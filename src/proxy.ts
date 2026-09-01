import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./services/getUser";

export const proxy = async (
  request: NextRequest,
): Promise<
  | NextResponse<{
      message: string;
    }>
  | undefined
> => {
  const { data: user } = await getUser();

  if (!user?.isAdmin && request.nextUrl.pathname.startsWith("/admin"))
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
