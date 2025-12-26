import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/routes';
import { Language } from '@/lib/i18n';
import { HowItWorksPage } from '@/components/pages/HowItWorksPage';
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
  const routePath = '/how-it-works';
  const fullPath = `${baseUrl}/${locale}${routePath}`;

  return {
    title: locale === 'en'
      ? 'How It Works - Prime SDR | From Setup to Results in 7 Days'
      : 'Cómo Funciona - Prime SDR | De Configuración a Resultados en 7 Días',
    description: locale === 'en'
      ? 'See exactly how Prime SDR transforms your LinkedIn into a predictable meeting engine, step by step. Setup, activation, 24/7 execution and continuous optimization.'
      : 'Ve exactamente cómo Prime SDR transforma tu LinkedIn en un motor de reuniones predecible, paso a paso. Configuración, activación, ejecución 24/7 y optimización continua.',
    keywords: locale === 'en'
      ? ['how it works LinkedIn prospecting', 'LinkedIn automation', 'SDR', 'lead generation', 'B2B meetings']
      : ['cómo funciona prospección LinkedIn', 'automatización LinkedIn', 'SDR', 'generación de leads', 'reuniones B2B'],
    openGraph: {
      title: locale === 'en'
        ? 'How It Works - Prime SDR | From Setup to Results in 7 Days'
        : 'Cómo Funciona - Prime SDR | De Configuración a Resultados en 7 Días',
      description: locale === 'en'
        ? 'See exactly how Prime SDR transforms your LinkedIn into a predictable meeting engine, step by step.'
        : 'Ve exactamente cómo Prime SDR transforma tu LinkedIn en un motor de reuniones predecible, paso a paso.',
      type: 'website',
      url: fullPath,
    },
    alternates: {
      canonical: fullPath,
    },
  };
}

export default function LocaleHowItWorksPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as Language)) {
    notFound();
  }

  return <HowItWorksPage />;
}

