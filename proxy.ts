import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  const { pathname } = request.nextUrl;

  // Redirect authenticated users away from login/signup pages
  if (sessionCookie && ["/login", "/signup"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!sessionCookie && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/signup", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Apply middleware to these routes
  matcher: ["/dashboard", "/login", "/signup"]
};
