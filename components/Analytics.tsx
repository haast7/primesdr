'use client';

import Script from 'next/script';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

export function Analytics() {
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

      {/* Consent Mode v2 */}
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
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `,
        }}
      />
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




