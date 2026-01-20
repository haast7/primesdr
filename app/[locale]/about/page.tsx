import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/routes';
import { Language } from '@/lib/i18n';
import { AboutPage } from '@/components/pages/AboutPage';
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
  const localePath = locale === defaultLocale ? '' : `/${locale}`;
  const routePath = locale === 'es' ? '/acerca' : '/about';
  const fullPath = `${baseUrl}${localePath}${routePath}`;

  return {
    title: locale === 'en' 
      ? 'About Prime SDR - Our Story and Mission'
      : 'Acerca de Prime SDR - Nuestra Historia y Misión',
    description: locale === 'en'
      ? 'Learn about Prime SDR\'s story, our mission to transform LinkedIn into a predictable revenue engine for B2B companies and how we were born from real frustration.'
      : 'Conoce la historia de Prime SDR, nuestra misión de transformar LinkedIn en un motor de ingresos predecible para empresas B2B y cómo nacimos de una frustración real.',
    keywords: locale === 'en'
      ? ['about prime sdr', 'story', 'mission', 'values', 'team', 'B2B prospecting', 'LinkedIn']
      : ['sobre prime sdr', 'historia', 'misión', 'valores', 'equipo', 'prospección B2B', 'LinkedIn'],
    openGraph: {
      title: locale === 'en'
        ? 'About Prime SDR - Our Story and Mission'
        : 'Acerca de Prime SDR - Nuestra Historia y Misión',
      description: locale === 'en'
        ? 'Learn about Prime SDR\'s story, our mission to transform LinkedIn into a predictable revenue engine for B2B companies.'
        : 'Conoce la historia de Prime SDR, nuestra misión de transformar LinkedIn en un motor de ingresos predecible para empresas B2B.',
      url: fullPath,
    },
    alternates: {
      canonical: fullPath,
    },
  };
}

export default function LocaleAboutPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as Language)) {
    notFound();
  }

  // Validar que a rota está correta para o locale
  // Se for espanhol, a rota deveria ser /acerca, mas vamos permitir /about também
  // O middleware vai cuidar dos redirects se necessário

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: locale === 'en' ? 'About Prime SDR' : 'Acerca de Prime SDR',
    description: locale === 'en'
      ? 'Learn about the history, mission and values of Prime SDR, leading B2B prospecting platform on LinkedIn'
      : 'Conoce la historia, misión y valores de Prime SDR, plataforma líder en prospección B2B en LinkedIn',
    url: `https://primesdr.com/${locale === 'es' ? 'es/acerca' : 'en/about'}`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Prime SDR',
      url: 'https://primesdr.com',
      foundingDate: '2023',
      description: locale === 'en'
        ? 'B2B prospecting automation platform on LinkedIn'
        : 'Plataforma de automatización de prospección B2B en LinkedIn',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressCountry: 'BR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-11-94502-2847',
        contactType: 'customer service',
        email: 'contato@primesdr.com',
        availableLanguage: locale === 'en' ? ['English'] : ['Spanish'],
        areaServed: 'BR',
      },
    },
  };

  return (
    <>
      <JsonLd json={aboutSchema} />
      <AboutPage />
    </>
  );
}





