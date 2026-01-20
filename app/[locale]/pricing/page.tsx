import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/routes';
import { Language } from '@/lib/i18n';
import { PricingPage } from '@/components/pages/PricingPage';

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
  const routePath = locale === 'es' ? '/precios' : '/pricing';
  const fullPath = `${baseUrl}/${locale}${routePath}`;

  return {
    title: locale === 'en'
      ? 'Pricing - Prime SDR Plans'
      : 'Precios - Planes Prime SDR',
    description: locale === 'en'
      ? 'Choose the ideal plan for your company. 90-day guarantee, no setup fee and positive ROI in up to 90 days.'
      : 'Elige el plan ideal para tu empresa. Garantía de 90 días, sin tarifa de configuración y ROI positivo en hasta 90 días.',
    keywords: locale === 'en'
      ? ['pricing', 'plans', 'SDR', 'prospecting', 'LinkedIn', 'automation', 'sales', 'B2B']
      : ['precios', 'planes', 'SDR', 'prospección', 'LinkedIn', 'automatización', 'ventas', 'B2B'],
    openGraph: {
      title: locale === 'en'
        ? 'Pricing - Prime SDR Plans'
        : 'Precios - Planes Prime SDR',
      description: locale === 'en'
        ? 'Choose the ideal plan for your company. 90-day guarantee, no setup fee and positive ROI in up to 90 days.'
        : 'Elige el plan ideal para tu empresa. Garantía de 90 días, sin tarifa de configuración y ROI positivo en hasta 90 días.',
      type: 'website',
      url: fullPath,
    },
    alternates: {
      canonical: fullPath,
    },
  };
}

export default function LocalePricingPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as Language)) {
    notFound();
  }

  return <PricingPage />;
}





