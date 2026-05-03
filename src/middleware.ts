import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin/* routes except the login page itself
  if (pathname.startsWith('/admin/')) {
    const session = request.cookies.get('admin_session');
    const secret = process.env.ADMIN_SESSION_SECRET || 'bharatsdev-admin-secret';
    if (!session || session.value !== secret) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path+'],
};
