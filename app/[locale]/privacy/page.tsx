import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/routes';
import { Language } from '@/lib/i18n';
import { PrivacyPolicyPage } from '@/components/pages/PrivacyPolicyPage';
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
  const routePath = locale === 'es' ? '/privacidad' : '/privacy';
  const fullPath = `${baseUrl}/${locale}${routePath}`;

  return {
    title: locale === 'en'
      ? 'Privacy Policy - Prime SDR'
      : 'Política de Privacidad - Prime SDR',
    description: locale === 'en'
      ? 'Privacy Policy of Prime SDR. Learn how we collect, use and protect your personal data in compliance with GDPR.'
      : 'Política de Privacidad de Prime SDR. Descubre cómo recopilamos, utilizamos y protegemos tus datos personales en cumplimiento del RGPD.',
    keywords: locale === 'en'
      ? ['privacy policy', 'GDPR', 'data protection', 'privacy', 'personal data']
      : ['política de privacidad', 'RGPD', 'protección de datos', 'privacidad', 'datos personales'],
    openGraph: {
      title: locale === 'en'
        ? 'Privacy Policy - Prime SDR'
        : 'Política de Privacidad - Prime SDR',
      description: locale === 'en'
        ? 'Privacy Policy of Prime SDR. Learn how we collect, use and protect your personal data in compliance with GDPR.'
        : 'Política de Privacidad de Prime SDR. Descubre cómo recopilamos, utilizamos y protegemos tus datos personales en cumplimiento del RGPD.',
      url: fullPath,
    },
    alternates: {
      canonical: fullPath,
    },
  };
}

export default function LocalePrivacyPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as Language)) {
    notFound();
  }

  return <PrivacyPolicyPage />;
}





