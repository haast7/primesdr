import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/routes';
import { Language } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.filter(locale => locale !== defaultLocale).map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  
  if (!locales.includes(locale as Language)) {
    return {};
  }

  const baseUrl = 'https://www.primesdr.com';
  const localePath = locale === defaultLocale ? '' : `/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${localePath}`,
      languages: {
        'pt-BR': baseUrl,
        'es-ES': `${baseUrl}/es`,
        'en-US': `${baseUrl}/en`,
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // Validar locale
  if (!locales.includes(locale as Language)) {
    notFound();
  }

  // Se for português, não deveria estar aqui (deveria estar na raiz)
  // Mas vamos permitir para compatibilidade
  return <>{children}</>;
}

