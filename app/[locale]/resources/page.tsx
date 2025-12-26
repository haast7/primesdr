import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/routes';
import { Language } from '@/lib/i18n';
import { ResourcesPage } from '@/components/pages/ResourcesPage';
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
  const routePath = '/resources';
  const fullPath = `${baseUrl}/${locale}${routePath}`;

  return {
    title: locale === 'en'
      ? 'Resources - Free Tools, Guides and Templates | Prime SDR'
      : 'Recursos - Herramientas Gratuitas, Guías y Plantillas | Prime SDR',
    description: locale === 'en'
      ? 'Learn to master B2B prospecting on LinkedIn. Free tools, tested playbooks, ready templates and real cases. Everything to fill your calendar with qualified meetings.'
      : 'Aprende a dominar la prospección B2B en LinkedIn. Herramientas gratuitas, playbooks probados, plantillas listas y casos reales. Todo para llenar tu calendario de reuniones calificadas.',
    keywords: locale === 'en'
      ? ['prospecting resources', 'LinkedIn tools', 'sales templates', 'B2B guides', 'sales playbooks', 'ROI calculator']
      : ['recursos prospección', 'herramientas LinkedIn', 'plantillas ventas', 'guías B2B', 'playbooks ventas', 'calculadora ROI'],
    openGraph: {
      title: locale === 'en'
        ? 'Resources - Free Tools, Guides and Templates | Prime SDR'
        : 'Recursos - Herramientas Gratuitas, Guías y Plantillas | Prime SDR',
      description: locale === 'en'
        ? 'Learn to master B2B prospecting on LinkedIn. Free tools, tested playbooks, ready templates and real cases.'
        : 'Aprende a dominar la prospección B2B en LinkedIn. Herramientas gratuitas, playbooks probados, plantillas listas y casos reales.',
      type: 'website',
      url: fullPath,
    },
    alternates: {
      canonical: fullPath,
    },
  };
}

export default function LocaleResourcesPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as Language)) {
    notFound();
  }

  const resourcesJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": locale === 'en' ? "Resources - Prime SDR" : "Recursos - Prime SDR",
    "description": locale === 'en'
      ? "Free tools, guides and templates for B2B prospecting on LinkedIn"
      : "Herramientas gratuitas, guías y plantillas para prospección B2B en LinkedIn",
    "url": `https://primesdr.com/${locale}${locale === 'es' ? '/recursos' : '/resources'}`,
  };

  return (
    <>
      <JsonLd json={resourcesJsonLd} />
      <ResourcesPage />
    </>
  );
}

