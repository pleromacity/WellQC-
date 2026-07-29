import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { readSession } from "@/lib/auth";

export async function GET() {
  const user = readSession((await cookies()).get("wellqc_session")?.value);
  if (!user) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  return NextResponse.json({ user });
}
