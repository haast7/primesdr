import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import { LanguageProvider } from '@/lib/contexts/LanguageContext';
import { TypeformProvider } from '@/components/TypeformProvider';
import { ContactModalProvider } from '@/lib/contexts/ContactModalContext';
import { CookieConsentProvider } from '@/lib/contexts/CookieConsentContext';
import { CookieBanner } from '@/components/CookieBanner';
import { TrackingPixels } from '@/components/TrackingPixels';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { IMAGE_URLS } from '@/lib/imageLoader';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Prime SDR - Seu time não tem tempo pra prospectar. A gente faz isso por você.',
    template: '%s | Prime SDR',
  },
  description: '112 reuniões em 45 dias no calendário do seu comercial — sem contratar SDR, sem perder tempo com cadências e sem depender de mídia paga que queima budget.',
  keywords: ['SDR', 'prospecção', 'LinkedIn', 'automação', 'vendas', 'B2B', 'SaaS'],
  authors: [{ name: 'Prime SDR' }],
  creator: 'Prime SDR',
  publisher: 'Prime SDR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://primesdr.com'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt',
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://primesdr.com',
    title: 'Prime SDR - Seu time não tem tempo pra prospectar. A gente faz isso por você.',
    description: '112 reuniões em 45 dias no calendário do seu comercial — sem contratar SDR, sem perder tempo com cadências e sem depender de mídia paga que queima budget.',
    siteName: 'Prime SDR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prime SDR - Prospecção LinkedIn Automatizada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime SDR - Seu time não tem tempo pra prospectar. A gente faz isso por você.',
    description: '112 reuniões em 45 dias no calendário do seu comercial — sem contratar SDR, sem perder tempo com cadências e sem depender de mídia paga que queima budget.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico?v=2', sizes: '16x16', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/favicon.ico?v=2', sizes: '180x180', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico?v=2',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <CookieConsentProvider>
          <LanguageProvider>
            <TypeformProvider>
              <ContactModalProvider>
              <Analytics />
              <TrackingPixels />
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
              <CookieBanner />
              <WhatsAppButton 
                phone="5511932001771" 
                message="Olá! Gostaria de saber mais sobre o Prime SDR."
              />
              </ContactModalProvider>
            </TypeformProvider>
          </LanguageProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
