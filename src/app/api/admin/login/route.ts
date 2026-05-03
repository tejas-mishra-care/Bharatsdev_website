import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const adminUsername = process.env.ADMIN_USERNAME || 'BD-Tejas56';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Shivay@56';
  const sessionSecret = process.env.ADMIN_SESSION_SECRET || 'BDsec-Xk9mP2vQ8nR3hL5jY7tF2cH4eA6';

  if (username !== adminUsername || password !== adminPassword) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set('admin_session', sessionSecret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 8, // 8 hours
    path: '/',
  });

  return response;
}
