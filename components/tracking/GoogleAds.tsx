'use client';

import { useEffect } from 'react';
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';

declare global {
  interface Window {
    gtag: any;
    dataLayer: any[];
  }
}

interface GoogleAdsProps {
  googleAdsId: string;
}

export function GoogleAds({ googleAdsId }: GoogleAdsProps) {
  const { consent } = useCookieConsent();

  useEffect(() => {
    // Só carrega o Google Ads se o usuário consentiu com marketing
    if (!consent?.marketing) return;

    // Carrega o script do Google Ads
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`;
    document.head.appendChild(script1);

    // Configura o gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleAdsId}');
    `;
    document.head.appendChild(script2);

    // Inicializa o gtag
    if (typeof window !== 'undefined') {
      window.gtag = window.gtag || function() {
        (window.dataLayer = window.dataLayer || []).push(arguments);
      };
    }

    return () => {
      // Cleanup
      if (script1.parentNode) {
        script1.parentNode.removeChild(script1);
      }
      if (script2.parentNode) {
        script2.parentNode.removeChild(script2);
      }
    };
  }, [googleAdsId, consent?.marketing]);

  return null;
}

// Funções utilitárias para tracking
export const trackGoogleAdsEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackGoogleAdsConversion = (conversionId: string, value?: number, currency = 'BRL') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency,
    });
  }
};

// Eventos específicos para o Prime SDR
export const trackGoogleAdsLead = (formData: any) => {
  trackGoogleAdsEvent('generate_lead', {
    currency: 'BRL',
    value: 0,
    custom_parameters: {
      company: formData.company,
      role: formData.role,
      team_size: formData.teamSize,
      average_ticket: formData.averageTicket,
      fit_score: formData.fitScore
    }
  });
};

export const trackGoogleAdsSchedule = (formData: any) => {
  trackGoogleAdsEvent('schedule', {
    currency: 'BRL',
    value: 0,
    custom_parameters: {
      vendedor: formData.vendedor,
      meeting_type: 'Demonstração Prime SDR'
    }
  });
};

export const trackGoogleAdsPurchase = (value: number, currency: string = 'BRL') => {
  trackGoogleAdsEvent('purchase', {
    currency: currency,
    value: value,
    transaction_id: `prime-sdr-${Date.now()}`
  });
};

export const trackGoogleAdsPageView = (pageName: string) => {
  trackGoogleAdsEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  });
};

export const trackGoogleAdsSignUp = (formData: any) => {
  trackGoogleAdsEvent('sign_up', {
    method: 'website_form',
    custom_parameters: {
      company: formData.company,
      role: formData.role
    }
  });
};






