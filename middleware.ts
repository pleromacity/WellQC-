import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = Boolean(request.cookies.get("wellqc_session")?.value);
  if (publicPaths.includes(pathname) && hasSession) return NextResponse.redirect(new URL("/dashboard", request.url));
  if (!publicPaths.includes(pathname) && !hasSession) return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}

export const config = { matcher: ["/((?!api|_next|favicon.ico).*)"] };
