import { Language } from './i18n';

/**
 * Mapeamento de rotas por idioma
 * Português (pt): sem prefixo na URL
 * Inglês (en): prefixo /en/
 * Espanhol (es): prefixo /es/
 */
export const routes: Record<Language, Record<string, string>> = {
  pt: {
    home: '/',
    sobre: '/sobre',
    'como-funciona': '/como-funciona',
    precos: '/precos',
    recursos: '/recursos',
    contato: '/contato',
    termos: '/termos',
    privacidade: '/privacidade',
    cookies: '/cookies',
  },
  en: {
    home: '/en',
    sobre: '/en/about',
    'como-funciona': '/en/how-it-works',
    precos: '/en/pricing',
    recursos: '/en/resources',
    contato: '/en/contact',
    termos: '/en/terms',
    privacidade: '/en/privacy',
    cookies: '/en/cookies',
  },
  es: {
    home: '/es',
    sobre: '/es/acerca',
    'como-funciona': '/es/como-funciona',
    precos: '/es/precios',
    recursos: '/es/recursos',
    contato: '/es/contacto',
    termos: '/es/terminos',
    privacidade: '/es/privacidad',
    cookies: '/es/cookies',
  },
};

/**
 * Obtém a rota traduzida para um idioma específico
 * @param routeKey - Chave da rota (ex: 'sobre', 'precos')
 * @param locale - Idioma desejado
 * @returns Rota traduzida com prefixo de idioma se necessário
 */
export function getLocalizedRoute(routeKey: string, locale: Language): string {
  return routes[locale][routeKey] || routes.pt[routeKey] || '/';
}

/**
 * Extrai o locale da URL
 * @param pathname - Caminho da URL
 * @returns Locale detectado ou 'pt' como padrão
 */
export function getLocaleFromPath(pathname: string): Language {
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return 'en';
  }
  if (pathname.startsWith('/es/') || pathname === '/es') {
    return 'es';
  }
  return 'pt';
}

/**
 * Remove o prefixo de locale da URL para obter a rota base
 * @param pathname - Caminho da URL
 * @returns Rota sem prefixo de locale
 */
export function getRouteWithoutLocale(pathname: string): string {
  if (pathname.startsWith('/en/')) {
    return pathname.replace('/en', '');
  }
  if (pathname.startsWith('/es/')) {
    return pathname.replace('/es', '');
  }
  if (pathname === '/en' || pathname === '/es') {
    return '/';
  }
  return pathname;
}

/**
 * Obtém a chave da rota baseada no pathname
 * @param pathname - Caminho da URL
 * @returns Chave da rota ou 'home'
 */
export function getRouteKey(pathname: string): string {
  // Normalizar pathname
  const normalizedPath = pathname === '/' ? '/' : pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  
  // Mapeamento completo de todas as rotas para suas chaves
  const routeToKey: Record<string, string> = {
    // Português
    '/': 'home',
    '/sobre': 'sobre',
    '/como-funciona': 'como-funciona',
    '/precos': 'precos',
    '/recursos': 'recursos',
    '/contato': 'contato',
    '/termos': 'termos',
    '/privacidade': 'privacidade',
    '/cookies': 'cookies',
    // Inglês
    '/en': 'home',
    '/en/': 'home',
    '/en/about': 'sobre',
    '/en/how-it-works': 'como-funciona',
    '/en/pricing': 'precos',
    '/en/resources': 'recursos',
    '/en/contact': 'contato',
    '/en/terms': 'termos',
    '/en/privacy': 'privacidade',
    '/en/cookies': 'cookies',
    // Espanhol
    '/es': 'home',
    '/es/': 'home',
    '/es/acerca': 'sobre',
    '/es/como-funciona': 'como-funciona',
    '/es/precios': 'precos',
    '/es/recursos': 'recursos',
    '/es/contacto': 'contato',
    '/es/terminos': 'termos',
    '/es/privacidad': 'privacidade',
    '/es/cookies': 'cookies',
  };
  
  return routeToKey[normalizedPath] || 'home';
}

/**
 * Lista de locales suportados
 */
export const locales: Language[] = ['pt', 'en', 'es'];

/**
 * Locale padrão
 */
export const defaultLocale: Language = 'pt';

