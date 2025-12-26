import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLocaleFromPath, defaultLocale, locales } from './lib/routes';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Ignorar arquivos estáticos e API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|json)$/)
  ) {
    return NextResponse.next();
  }

  // Verificar se já tem locale na URL
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Se tem locale na URL, definir cookie e continuar
  if (pathnameHasLocale) {
    const locale = getLocaleFromPath(pathname);
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 ano
      sameSite: 'lax',
    });
    return response;
  }

  // Se não tem locale e não é a raiz, manter como está (português)
  // Não redirecionar automaticamente para não quebrar links existentes
  // O usuário pode escolher o idioma manualmente
  if (pathname !== '/') {
    // Definir cookie como português
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', defaultLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    return response;
  }

  // Para a raiz, verificar preferência mas não redirecionar automaticamente
  // Deixar o usuário escolher manualmente
  const response = NextResponse.next();
  response.cookies.set('NEXT_LOCALE', defaultLocale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

