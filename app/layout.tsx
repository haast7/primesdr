import type { Metadata, Viewport } from 'next';
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
    default: 'Prime SDR - Máquina previsível de leads no LinkedIn',
    template: '%s | Prime SDR',
  },
  description: 'Transforme o LinkedIn em uma máquina previsível de geração de leads qualificados para o seu time comercial.',
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
      'pt-BR': '/',
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://primesdr.com',
    title: 'Prime SDR - Máquina previsível de leads no LinkedIn',
    description: 'Transforme o LinkedIn em uma máquina previsível de geração de leads qualificados para o seu time comercial.',
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
    title: 'Prime SDR - Máquina previsível de leads no LinkedIn',
    description: 'Transforme o LinkedIn em uma máquina previsível de geração de leads qualificados para o seu time comercial.',
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
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
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
