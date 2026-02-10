'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Analytics } from '@/components/Analytics';
import { TrackingPixels } from '@/components/TrackingPixels';
import { CookieConsentProvider } from '@/lib/contexts/CookieConsentContext';
import { CookieBanner } from '@/components/CookieBanner';

export default function ThiagoReisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Ocultar header apenas na página /thiagoreis
    if (pathname === '/thiagoreis') {
      const header = document.querySelector('header');
      if (header) {
        header.style.display = 'none';
      }
    } else {
      // Garantir que o header esteja visível em outras páginas
      const header = document.querySelector('header');
      if (header) {
        header.style.display = '';
      }
    }

    // Cleanup: restaurar header quando componente desmontar ou rota mudar
    return () => {
      const header = document.querySelector('header');
      if (header && pathname !== '/thiagoreis') {
        header.style.display = '';
      }
    };
  }, [pathname]);

  return (
    <>
      <Analytics />
      <TrackingPixels />
      <CookieConsentProvider>
        {children}
        <CookieBanner />
      </CookieConsentProvider>
    </>
  );
}
