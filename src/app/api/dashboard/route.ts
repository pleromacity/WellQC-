import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { DashboardSummary } from "@/lib/api-types";

export async function GET() {
  try {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const sevenDaysAgo = new Date(startOfToday);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

    const [
      totalWells,
      lasFilesUploaded,
      curvesAnalysed,
      anomaliesFound,
      errorsDetected,
      scoreAggregate,
      uploadedToday,
      cleanedToday,
      reports,
      lasFiles,
      wells,
      problemWells,
      recentActivity,
    ] = await Promise.all([
      db.well.count(),
      db.lASFile.count(),
      db.curve.count(),
      db.anomaly.count(),
      db.anomaly.count({ where: { severity: { in: ["CRITICAL", "WARNING"] } } }),
      db.qualityReport.aggregate({ _avg: { overallScore: true } }),
      db.lASFile.count({ where: { createdAt: { gte: startOfToday } } }),
      db.lASFile.aggregate({
        where: { createdAt: { gte: startOfToday } },
        _sum: { fileSizeKb: true },
      }),
      db.qualityReport.findMany({
        where: { createdAt: { gte: sevenDaysAgo } },
        select: {
          createdAt: true,
          overallScore: true,
          anomalyCount: true,
          reportJson: true,
        },
      }),
      db.lASFile.findMany({
        where: { createdAt: { gte: sevenDaysAgo } },
        select: { createdAt: true },
      }),
      db.well.findMany({
        select: {
          fieldName: true,
          qualityScore: true,
        },
      }),
      db.well.findMany({
        where: {
          OR: [{ qualityScore: { lt: 75 } }, { qualityGrade: { in: ["POOR", "CRITICAL"] } }],
        },
        orderBy: { qualityScore: "asc" },
        take: 5,
        include: {
          reports: {
            orderBy: { createdAt: "desc" },
            take: 1,
            include: {
              anomalies: {
                orderBy: { createdAt: "asc" },
                take: 1,
              },
            },
          },
        },
      }),
      db.activityLog.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

    const summary: DashboardSummary = {
      totalWells,
      lasFilesUploaded,
      averageQualityScore: Math.round(scoreAggregate._avg.overallScore ?? 0),
      averageQualityGrade: gradeForScore(scoreAggregate._avg.overallScore ?? 0),
      curvesAnalysed,
      errorsDetected,
      missingCurves: reports.reduce((sum, report) => sum + countMissingCurves(report.reportJson), 0),
      anomaliesFound,
      cleanedTodayLabel: formatDataSize(cleanedToday._sum.fileSizeKb ?? 0),
      uploadedToday,
      trend: buildTrend(sevenDaysAgo, reports, lasFiles),
      fieldPerformance: buildFieldPerformance(wells),
      problemWells: problemWells.map((well) => ({
        id: well.id,
        name: well.name,
        api: well.apiNo,
        score: well.qualityScore,
        grade: well.qualityGrade,
        issue: well.reports[0]?.anomalies[0]?.description || "Quality score is below the accepted threshold.",
      })),
      recentActivity: recentActivity.map((activity) => ({
        id: activity.id,
        userName: activity.userName,
        userRole: activity.userRole,
        action: activity.action,
        target: activity.targetType || "PLATFORM",
        details: activity.details,
        timestamp: relativeTime(activity.createdAt),
        ip: activity.ipAddress,
      })),
    };

    return NextResponse.json(summary);
  } catch (error) {
    console.error("Failed to build dashboard summary", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load dashboard data." },
      { status: 500 },
    );
  }
}

function buildTrend(
  startDate: Date,
  reports: Array<{ createdAt: Date; overallScore: number; anomalyCount: number }>,
  lasFiles: Array<{ createdAt: Date }>,
) {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    const key = dateKey(date);
    const reportsForDate = reports.filter((report) => dateKey(report.createdAt) === key);
    const filesForDate = lasFiles.filter((file) => dateKey(file.createdAt) === key);
    const avgScore =
      reportsForDate.length > 0
        ? Math.round(reportsForDate.reduce((sum, report) => sum + report.overallScore, 0) / reportsForDate.length)
        : 0;

    return {
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      avgScore,
      filesUploaded: filesForDate.length,
      anomalies: reportsForDate.reduce((sum, report) => sum + report.anomalyCount, 0),
    };
  });
}

function buildFieldPerformance(wells: Array<{ fieldName: string; qualityScore: number }>) {
  const byField = new Map<string, { total: number; wells: number }>();

  wells.forEach((well) => {
    const current = byField.get(well.fieldName) || { total: 0, wells: 0 };
    current.total += well.qualityScore;
    current.wells += 1;
    byField.set(well.fieldName, current);
  });

  return Array.from(byField.entries())
    .map(([field, value]) => {
      const score = value.wells > 0 ? Math.round(value.total / value.wells) : 0;
      return {
        field,
        score,
        wells: value.wells,
        status: gradeForScore(score),
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}

function countMissingCurves(reportJson: string) {
  try {
    const parsed = JSON.parse(reportJson);
    return Array.isArray(parsed?.missingStandardCurves) ? parsed.missingStandardCurves.length : 0;
  } catch {
    return 0;
  }
}

function gradeForScore(score: number) {
  if (score >= 90) return "EXCELLENT";
  if (score >= 75) return "GOOD";
  if (score >= 50) return "POOR";
  if (score > 0) return "CRITICAL";
  return "UNVALIDATED";
}

function formatDataSize(kb: number) {
  if (kb >= 1024 * 1024) return `${(kb / 1024 / 1024).toFixed(1)} GB`;
  if (kb >= 1024) return `${(kb / 1024).toFixed(1)} MB`;
  return `${Math.round(kb)} KB`;
}

function relativeTime(date: Date) {
  const seconds = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}
