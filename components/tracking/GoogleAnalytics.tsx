'use client';

import { useEffect } from 'react';
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';

declare global {
  interface Window {
    gtag: any;
    dataLayer: any[];
  }
}

interface GoogleAnalyticsProps {
  ga4Id: string;
}

export function GoogleAnalytics({ ga4Id }: GoogleAnalyticsProps) {
  const { consent } = useCookieConsent();

  useEffect(() => {
    // Só carrega o GA4 se o usuário consentiu com analytics
    if (!consent?.analytics) return;

    // Carrega o script do Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    document.head.appendChild(script1);

    // Configura o gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${ga4Id}');
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
  }, [ga4Id, consent?.analytics]);

  return null;
}

// Funções utilitárias para tracking
export const trackGA4Event = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Eventos específicos para o Prime SDR
export const trackGA4Lead = (formData: any) => {
  trackGA4Event('generate_lead', {
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

export const trackGA4Schedule = (formData: any) => {
  trackGA4Event('schedule', {
    currency: 'BRL',
    value: 0,
    custom_parameters: {
      vendedor: formData.vendedor,
      meeting_type: 'Demonstração Prime SDR'
    }
  });
};

export const trackGA4Purchase = (value: number, currency: string = 'BRL') => {
  trackGA4Event('purchase', {
    currency: currency,
    value: value,
    transaction_id: `prime-sdr-${Date.now()}`
  });
};

export const trackGA4PageView = (pageName: string) => {
  trackGA4Event('page_view', {
    page_title: pageName,
    page_location: window.location.href
  });
};

export const trackGA4SignUp = (formData: any) => {
  trackGA4Event('sign_up', {
    method: 'website_form',
    custom_parameters: {
      company: formData.company,
      role: formData.role
    }
  });
};








