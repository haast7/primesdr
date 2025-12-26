import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
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

  // Se não for espanhol, redirecionar para a rota correta
  if (locale !== 'es') {
    redirect(`/${locale}/how-it-works`);
  }

  const baseUrl = 'https://www.primesdr.com';
  const fullPath = `${baseUrl}/${locale}/como-funciona`;

  return {
    title: 'Cómo Funciona - Prime SDR | De Configuración a Resultados en 7 Días',
    description: 'Ve exactamente cómo Prime SDR transforma tu LinkedIn en un motor de reuniones predecible, paso a paso. Configuración, activación, ejecución 24/7 y optimización continua.',
    keywords: ['cómo funciona prospección LinkedIn', 'automatización LinkedIn', 'SDR', 'generación de leads', 'reuniones B2B'],
    openGraph: {
      title: 'Cómo Funciona - Prime SDR | De Configuración a Resultados en 7 Días',
      description: 'Ve exactamente cómo Prime SDR transforma tu LinkedIn en un motor de reuniones predecible, paso a paso.',
      type: 'website',
      url: fullPath,
    },
    alternates: {
      canonical: fullPath,
    },
  };
}

export default function LocaleComoFuncionaPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as Language)) {
    notFound();
  }

  // Se não for espanhol, redirecionar
  if (locale !== 'es') {
    redirect(`/${locale}/how-it-works`);
  }

  return <HowItWorksPage />;
}

