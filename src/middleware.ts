import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  if (process.env.NODE_ENV !== 'production') return

  const proto = req.headers.get('x-forwarded-proto') || 'http'

  // Redirect to HTTPS if the protocol is not secure
  if (proto !== 'https') {
    const url = req.nextUrl.clone()
    url.protocol = 'https'
    return NextResponse.redirect(url)
  }

  // Continue with the request if secure
  return NextResponse.next()
}
