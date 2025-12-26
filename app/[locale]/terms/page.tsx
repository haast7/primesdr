import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/routes';
import { Language } from '@/lib/i18n';
import { TermsOfUsePage } from '@/components/pages/TermsOfUsePage';
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
  const routePath = locale === 'es' ? '/terminos' : '/terms';
  const fullPath = `${baseUrl}/${locale}${routePath}`;

  return {
    title: locale === 'en'
      ? 'Terms of Use - Prime SDR'
      : 'Términos de Uso - Prime SDR',
    description: locale === 'en'
      ? 'Terms of Use of Prime SDR. Learn about the conditions and rules for using our LinkedIn prospecting automation platform.'
      : 'Términos de Uso de Prime SDR. Conoce las condiciones y reglas para utilizar nuestra plataforma de automatización de prospección en LinkedIn.',
    keywords: locale === 'en'
      ? ['terms of use', 'conditions of use', 'rules', 'platform', 'automation', 'LinkedIn']
      : ['términos de uso', 'condiciones de uso', 'reglas', 'plataforma', 'automatización', 'LinkedIn'],
    openGraph: {
      title: locale === 'en'
        ? 'Terms of Use - Prime SDR'
        : 'Términos de Uso - Prime SDR',
      description: locale === 'en'
        ? 'Terms of Use of Prime SDR. Learn about the conditions and rules for using our LinkedIn prospecting automation platform.'
        : 'Términos de Uso de Prime SDR. Conoce las condiciones y reglas para utilizar nuestra plataforma de automatización de prospección en LinkedIn.',
      url: fullPath,
    },
    alternates: {
      canonical: fullPath,
    },
  };
}

export default function LocaleTermsPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as Language)) {
    notFound();
  }

  return <TermsOfUsePage />;
}

