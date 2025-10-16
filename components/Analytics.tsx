'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';
import { MetaPixel } from './tracking/MetaPixel';
import { GoogleAds } from './tracking/GoogleAds';
import { GoogleAnalytics } from './tracking/GoogleAnalytics';
import { AutoTracking } from './tracking/AutoTracking';
import { WhatsAppTracking } from './tracking/WhatsAppTracking';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-N7FSD6VV';
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1831229621093127';
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-17655843732';
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-LT6R7TDXHW';

export function Analytics() {
  const { consent } = useCookieConsent();

  // Aplicar consentimento quando disponível
  useEffect(() => {
    if (consent && typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'consent_update',
        ad_storage: consent.marketing ? 'granted' : 'denied',
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        functionality_storage: consent.functional ? 'granted' : 'denied',
        personalization_storage: consent.marketing ? 'granted' : 'denied',
        security_storage: 'granted', // Sempre concedido para cookies essenciais
        cookie_consent: consent
      });
    }
  }, [consent]);

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Consent Mode v2 - Default Denied */}
      <Script
        id="consent-mode"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'granted'
            });
          `,
        }}
      />

      {/* Meta Pixel - Sempre carregado, mas com consentimento */}
      {META_PIXEL_ID && <MetaPixel pixelId={META_PIXEL_ID} />}

      {/* Google Ads - Sempre carregado, mas com consentimento */}
      {GOOGLE_ADS_ID && <GoogleAds googleAdsId={GOOGLE_ADS_ID} />}

      {/* Google Analytics 4 - Sempre carregado, mas com consentimento */}
      {GA4_ID && <GoogleAnalytics ga4Id={GA4_ID} />}

      {/* Auto Tracking */}
      <AutoTracking />

      {/* WhatsApp Tracking */}
      <WhatsAppTracking />
    </>
  );
}

// Utility functions for tracking events
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
};

export const trackConversion = (conversionType: string, value?: number, currency = 'BRL') => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value,
    currency,
  });
};

export const trackLead = (leadData: {
  name?: string;
  email?: string;
  company?: string;
  source?: string;
}) => {
  trackEvent('lead', {
    lead_name: leadData.name,
    lead_email: leadData.email,
    lead_company: leadData.company,
    lead_source: leadData.source,
  });
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}




