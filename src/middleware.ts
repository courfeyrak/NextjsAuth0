import type { NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";
import { NextResponse } from "next/server";
export async function middleware(request: NextRequest) {
  
  //return await auth0.middleware(request);
  if (!process.env.AUTH0_ISSUER_BASE_URL) {
    console.error("ERROR: AUTH0_ISSUER_BASE_URL no está definido.");
    return NextResponse.error();
  }
  console.log("------AUTH0_ISSUER_BASE_URL:", process.env.AUTH0_ISSUER_BASE_URL);
  try {
    let x= await auth0.middleware(request);
    return x;
  } catch (error) {
    console.error("Error en el middleware de Auth0:", error);
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};