import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const users = await db.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        department: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      users: users.map((user) => ({
        ...user,
        department: user.department || "Workspace",
        status: "ACTIVE",
        createdAt: user.createdAt.toISOString(),
      })),
    });
  } catch (error) {
    console.error("Failed to load admin users", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to load users.", users: [] },
      { status: 500 },
    );
  }
}
