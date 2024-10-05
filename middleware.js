import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/account') && token) {
    return NextResponse.next();
  }

  if (!token && pathname.startsWith('/account/profile')) {
    return NextResponse.redirect(new URL('/account/login', req.url));
  }

  if (pathname === '/account/login' || pathname === '/account/register') {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/account/:path*'],
};
