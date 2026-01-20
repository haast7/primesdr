import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/routes';
import { Language } from '@/lib/i18n';
import ContactPage from '@/app/contato/page';

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
  const routePath = locale === 'es' ? '/contacto' : '/contact';
  const fullPath = `${baseUrl}/${locale}${routePath}`;

  return {
    title: locale === 'en'
      ? 'Contact - Prime SDR'
      : 'Contacto - Prime SDR',
    description: locale === 'en'
      ? 'Get in touch with Prime SDR. We are here to help you transform your LinkedIn into a sales machine.'
      : 'Ponte en contacto con Prime SDR. Estamos aquí para ayudarte a transformar tu LinkedIn en una máquina de ventas.',
    openGraph: {
      title: locale === 'en'
        ? 'Contact - Prime SDR'
        : 'Contacto - Prime SDR',
      description: locale === 'en'
        ? 'Get in touch with Prime SDR. We are here to help you transform your LinkedIn into a sales machine.'
        : 'Ponte en contacto con Prime SDR. Estamos aquí para ayudarte a transformar tu LinkedIn en una máquina de ventas.',
      url: fullPath,
    },
    alternates: {
      canonical: fullPath,
    },
  };
}

export default function LocaleContactPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as Language)) {
    notFound();
  }

  return <ContactPage />;
}





