import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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
      { 
        url: process.env.NEXT_PUBLIC_FAVICON_URL || 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/favicon.ico.png?alt=media&token=9a716efd-67d9-4aa1-9688-abad42c347dd', 
        sizes: '32x32', 
        type: 'image/png' 
      },
      { 
        url: process.env.NEXT_PUBLIC_FAVICON_URL || 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/favicon.ico.png?alt=media&token=9a716efd-67d9-4aa1-9688-abad42c347dd', 
        sizes: '16x16', 
        type: 'image/png' 
      },
    ],
    apple: [
      { 
        url: process.env.NEXT_PUBLIC_FAVICON_URL || 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/favicon.ico.png?alt=media&token=9a716efd-67d9-4aa1-9688-abad42c347dd', 
        sizes: '180x180', 
        type: 'image/png' 
      },
    ],
    shortcut: process.env.NEXT_PUBLIC_FAVICON_URL || 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/favicon.ico.png?alt=media&token=9a716efd-67d9-4aa1-9688-abad42c347dd',
  },
  themeColor: '#2563eb',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
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
        {/* RD Station Marketing Script */}
        <Script
          id="rd-station-loader"
          strategy="afterInteractive"
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/4f200a9d-f5c6-447a-ae31-6893da4d4e04-loader.js"
        />
      </body>
    </html>
  );
}
