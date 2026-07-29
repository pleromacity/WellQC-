import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { WellListItem } from "@/lib/api-types";

interface CreateWellRequest {
  name?: string;
  apiNo?: string;
  operatorName?: string;
  fieldName?: string;
  basin?: string;
  country?: string;
  tdFt?: number;
  latitude?: number;
  longitude?: number;
}

export async function GET() {
  try {
    const wells = await db.well.findMany({
      orderBy: { updatedAt: "desc" },
      include: {
        lasFiles: {
          orderBy: { createdAt: "desc" },
          take: 1,
          include: {
            reports: {
              orderBy: { createdAt: "desc" },
              take: 1,
              include: {
                _count: { select: { anomalies: true } },
              },
            },
          },
        },
      },
    });

    return NextResponse.json({ wells: wells.map(toWellListItem) });
  } catch (error) {
    console.error("Failed to list wells", error);
    return NextResponse.json({ wells: [], error: "Database is not available yet." });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreateWellRequest;
    const name = body.name?.trim();
    const apiNo = body.apiNo?.trim();

    if (!name || !apiNo) {
      return NextResponse.json({ error: "Well name and API/UWI are required." }, { status: 400 });
    }

    const operatorName = body.operatorName?.trim() || "Unknown Operator";
    const fieldName = body.fieldName?.trim() || "Unassigned Field";
    const basin = body.basin?.trim() || "Uploaded Wells";
    const country = body.country?.trim() || "Unknown";

    const well = await db.$transaction(async (tx) => {
      await tx.operator.upsert({
        where: { name: operatorName },
        update: {},
        create: { name: operatorName },
      });

      await tx.field.upsert({
        where: { name: fieldName },
        update: { basin, country },
        create: { name: fieldName, basin, country },
      });

      const savedWell = await tx.well.upsert({
        where: { apiNo },
        update: {
          name,
          operatorName,
          fieldName,
          basin,
          country,
          latitude: body.latitude ?? 0,
          longitude: body.longitude ?? 0,
          tdFt: body.tdFt ?? 0,
        },
        create: {
          apiNo,
          name,
          operatorName,
          fieldName,
          basin,
          country,
          latitude: body.latitude ?? 0,
          longitude: body.longitude ?? 0,
          tdFt: body.tdFt ?? 0,
          qualityScore: 0,
          qualityGrade: "UNVALIDATED",
        },
      });

      await tx.activityLog.create({
        data: {
          userName: "Well Management",
          userRole: "DATA_ENGINEER",
          action: "CREATE_WELL",
          targetType: "WELL",
          targetId: savedWell.id,
          details: `Created or updated well asset ${savedWell.name} (${savedWell.apiNo}).`,
        },
      });

      return savedWell;
    });

    return NextResponse.json({ well });
  } catch (error) {
    console.error("Failed to create well", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create well." },
      { status: 500 },
    );
  }
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
