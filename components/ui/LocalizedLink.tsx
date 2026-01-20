'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocaleFromPath, getRouteKey, getLocalizedRoute } from '@/lib/routes';
import { Language } from '@/lib/i18n';

interface LocalizedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

/**
 * Componente Link que automaticamente adiciona o locale atual à URL
 */
export function LocalizedLink({ href, children, className, ...props }: LocalizedLinkProps) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  
  // Se o href já começa com /en/ ou /es/, usar como está
  if (href.startsWith('/en/') || href.startsWith('/es/') || href === '/en' || href === '/es') {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }
  
  // Se for uma rota externa ou absoluta, usar como está
  if (href.startsWith('http') || href.startsWith('//') || href.startsWith('#')) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }
  
  // Obter a chave da rota
  const routeKey = getRouteKey(href === '/' ? pathname : href);
  
  // Obter a rota localizada
  const localizedHref = getLocalizedRoute(routeKey, currentLocale);
  
  return (
    <Link href={localizedHref} className={className} {...props}>
      {children}
    </Link>
  );
}





