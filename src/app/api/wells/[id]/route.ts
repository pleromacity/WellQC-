import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { WellDetailResponse, WellListItem } from "@/lib/api-types";
import { getCurrentUser } from "@/lib/auth";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Authentication is required." }, { status: 401 });

  try {
    const well = await db.well.findUnique({
      where: { id, ownerId: user.id },
      include: {
        lasFiles: {
          orderBy: { createdAt: "desc" },
          take: 1,
          include: {
            curves: { orderBy: { createdAt: "asc" } },
            reports: {
              orderBy: { createdAt: "desc" },
              take: 1,
              include: {
                anomalies: { orderBy: { createdAt: "asc" } },
                _count: { select: { anomalies: true } },
              },
            },
          },
        },
      },
    });

    if (!well) {
      return NextResponse.json({ error: "Well not found." }, { status: 404 });
    }

    const latestLasFile = well.lasFiles[0];
    const latestReport = latestLasFile?.reports[0];
    const curvesData = buildCurvesData(latestLasFile?.curves || []);
    const response: WellDetailResponse = {
      well: toWellListItem(well),
      aiSummary: latestReport?.aiSummary || "Upload and commit a LAS file to generate an AI petrophysical summary.",
      recommendations: parseRecommendations(latestReport?.recommendations),
      curvesData,
      anomalies:
        latestReport?.anomalies.map((anomaly) => ({
          curveMnemonic: anomaly.curveMnemonic,
          depthStart: anomaly.depthStart,
          depthEnd: anomaly.depthEnd,
          anomalyType: anomaly.anomalyType,
          severity: normalizeSeverity(anomaly.severity),
          description: anomaly.description,
          suggestedCorrection: anomaly.suggestedCorrection,
        })) || [],
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Failed to load well detail", error);
    return NextResponse.json({ error: "Failed to load well detail." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Authentication is required." }, { status: 401 });

  try {
    await db.$transaction(async (tx) => {
      const well = await tx.well.findFirst({ where: { id, ownerId: user.id }, select: { name: true } });
      if (!well) throw new Error("Well not found or access is not permitted.");
      const reports = await tx.qualityReport.findMany({ where: { wellId: id }, select: { id: true } });
      const curves = await tx.curve.findMany({
        where: { lasFile: { wellId: id } },
        select: { id: true },
      });

      await tx.anomaly.deleteMany({
        where: {
          OR: [
            { qualityReportId: { in: reports.map((report) => report.id) } },
            { curveId: { in: curves.map((curve) => curve.id) } },
          ],
        },
      });

      await tx.well.delete({ where: { id } });

      await tx.activityLog.create({
        data: {
          userName: "Well Management",
          userRole: user.role,
          userId: user.id,
          action: "DELETE_WELL",
          targetType: "WELL",
          targetId: id,
          details: `Deleted well asset ${well?.name || id} and its uploaded LAS history.`,
        },
      });
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to delete well", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete well." },
      { status: 500 },
    );
  }
}

function buildCurvesData(
  curves: Array<{
    originalMnemonic: string;
    standardMnemonic: string;
    dataJson: string;
  }>,
) {
  const depth: number[] = [];
  const curveMap: Record<string, number[]> = {};
  const usedNames = new Set<string>();

  curves.forEach((curve) => {
    const rows = parseCurveRows(curve.dataJson);
    if (depth.length === 0) {
      depth.push(...rows.map((row) => row.depth));
    }

    const preferredName =
      curve.standardMnemonic && curve.standardMnemonic !== "UNKNOWN"
        ? curve.standardMnemonic
        : curve.originalMnemonic;
    const exportName = allocateName(preferredName, usedNames);
    curveMap[exportName] = rows.map((row) => row.value);
  });

  return { depth, curves: curveMap };
}

function parseCurveRows(dataJson: string): Array<{ depth: number; value: number }> {
  try {
    const parsed = JSON.parse(dataJson);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((row) => ({
        depth: Number(row?.depth),
        value: Number(row?.value),
      }))
      .filter((row) => Number.isFinite(row.depth) && Number.isFinite(row.value));
  } catch {
    return [];
  }
}

function allocateName(preferredName: string, usedNames: Set<string>) {
  const base = preferredName || "CURVE";
  let candidate = base;
  let suffix = 2;

  while (usedNames.has(candidate)) {
    candidate = `${base}_${suffix}`;
    suffix++;
  }

  usedNames.add(candidate);
  return candidate;
}

function parseRecommendations(value: string | undefined) {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

function normalizeSeverity(value: string): "CRITICAL" | "WARNING" | "INFO" {
  if (value === "CRITICAL" || value === "WARNING" || value === "INFO") {
    return value;
  }

  return "INFO";
}

function toWellListItem(well: {
  id: string;
  apiNo: string;
  name: string;
  operatorName: string;
  fieldName: string;
  basin: string;
  country: string;
  latitude: number;
  longitude: number;
  elevFt: number;
  tdFt: number;
  depthUnit: string;
  status: string;
  qualityScore: number;
  qualityGrade: string;
  createdAt: Date;
  updatedAt: Date;
  lasFiles: Array<{
    id: string;
    originalName: string;
    curveCount: number;
    pointCount: number;
    reports: Array<{
      id: string;
      anomalyCount: number;
      _count: { anomalies: number };
    }>;
  }>;
}): WellListItem {
  const latestLasFile = well.lasFiles[0];
  const latestReport = latestLasFile?.reports[0];

  return {
    id: well.id,
    apiNo: well.apiNo,
    name: well.name,
    operatorName: well.operatorName,
    fieldName: well.fieldName,
    basin: well.basin,
    country: well.country,
    latitude: well.latitude,
    longitude: well.longitude,
    elevFt: well.elevFt,
    tdFt: well.tdFt,
    depthUnit: well.depthUnit,
    status: well.status,
    qualityScore: well.qualityScore,
    qualityGrade: well.qualityGrade,
    latestLasFileName: latestLasFile?.originalName ?? null,
    latestLasFileId: latestLasFile?.id ?? null,
    latestReportId: latestReport?.id ?? null,
    curveCount: latestLasFile?.curveCount ?? 0,
    pointCount: latestLasFile?.pointCount ?? 0,
    anomalyCount: latestReport?._count.anomalies ?? latestReport?.anomalyCount ?? 0,
    createdAt: well.createdAt.toISOString(),
    updatedAt: well.updatedAt.toISOString(),
  };
}
