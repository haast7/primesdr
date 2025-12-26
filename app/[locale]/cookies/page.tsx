import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/routes';
import { Language } from '@/lib/i18n';
import { CookiesPolicyPage } from '@/components/pages/CookiesPolicyPage';
import { JsonLd } from '@/components/JsonLd';

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
  const fullPath = `${baseUrl}/${locale}/cookies`;

  return {
    title: locale === 'en'
      ? 'Cookie Policy - Prime SDR'
      : 'Política de Cookies - Prime SDR',
    description: locale === 'en'
      ? 'Cookie Policy of Prime SDR. Learn how we use cookies and similar technologies to improve your browsing experience.'
      : 'Política de Cookies de Prime SDR. Descubre cómo utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación.',
    keywords: locale === 'en'
      ? ['cookie policy', 'cookies', 'browsing', 'privacy', 'GDPR', 'tracking']
      : ['política de cookies', 'cookies', 'navegación', 'privacidad', 'RGPD', 'rastreo'],
    openGraph: {
      title: locale === 'en'
        ? 'Cookie Policy - Prime SDR'
        : 'Política de Cookies - Prime SDR',
      description: locale === 'en'
        ? 'Cookie Policy of Prime SDR. Learn how we use cookies and similar technologies to improve your browsing experience.'
        : 'Política de Cookies de Prime SDR. Descubre cómo utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación.',
      url: fullPath,
    },
    alternates: {
      canonical: fullPath,
    },
  };
}

export default function LocaleCookiesPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as Language)) {
    notFound();
  }

  return <CookiesPolicyPage />;
}

