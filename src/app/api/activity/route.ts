import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const activities = await db.activityLog.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    return NextResponse.json({
      activities: activities.map((activity) => ({
        id: activity.id,
        userName: activity.userName,
        userRole: activity.userRole,
        action: activity.action,
        target: activity.targetType || "PLATFORM",
        details: activity.details,
        timestamp: relativeTime(activity.createdAt),
        ip: activity.ipAddress,
      })),
    });
  } catch (error) {
    console.error("Failed to load activity", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load activity.", activities: [] },
      { status: 500 },
    );
  }
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
