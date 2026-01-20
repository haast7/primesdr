import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
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

  // Se não for espanhol, redirecionar para a rota correta
  if (locale !== 'es') {
    redirect(`/${locale}/resources`);
  }

  const baseUrl = 'https://www.primesdr.com';
  const fullPath = `${baseUrl}/${locale}/recursos`;

  return {
    title: 'Recursos - Herramientas Gratuitas, Guías y Plantillas | Prime SDR',
    description: 'Aprende a dominar la prospección B2B en LinkedIn. Herramientas gratuitas, playbooks probados, plantillas listas y casos reales. Todo para llenar tu calendario de reuniones calificadas.',
    keywords: ['recursos prospección', 'herramientas LinkedIn', 'plantillas ventas', 'guías B2B', 'playbooks ventas', 'calculadora ROI'],
    openGraph: {
      title: 'Recursos - Herramientas Gratuitas, Guías y Plantillas | Prime SDR',
      description: 'Aprende a dominar la prospección B2B en LinkedIn. Herramientas gratuitas, playbooks probados, plantillas listas y casos reales.',
      type: 'website',
      url: fullPath,
    },
    alternates: {
      canonical: fullPath,
    },
  };
}

export default function LocaleRecursosPage({
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
    redirect(`/${locale}/resources`);
  }

  const resourcesJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Recursos - Prime SDR",
    "description": "Herramientas gratuitas, guías y plantillas para prospección B2B en LinkedIn",
    "url": `https://primesdr.com/${locale}/recursos`,
  };

  return (
    <>
      <JsonLd json={resourcesJsonLd} />
      <ResourcesPage />
    </>
  );
}





