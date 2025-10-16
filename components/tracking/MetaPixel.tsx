'use client';

import { useEffect } from 'react';
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

interface MetaPixelProps {
  pixelId: string;
}

export function MetaPixel({ pixelId }: MetaPixelProps) {
  const { consent } = useCookieConsent();

  useEffect(() => {
    // Em desenvolvimento, carrega sempre. Em produção, só com consentimento
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (!isDevelopment && !consent?.marketing) return;

    // Carrega o script do Meta Pixel
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `;
    
    document.head.appendChild(script);

    // Inicializa o pixel
    if (typeof window !== 'undefined') {
      window.fbq = window.fbq || function() {
        (window.fbq.q = window.fbq.q || []).push(arguments);
      };
    }

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [pixelId, consent?.marketing]);

  return null;
}

// Funções utilitárias para tracking
export const trackMetaEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackMetaCustomEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

// Eventos específicos para o Prime SDR
export const trackMetaLead = (formData: any) => {
  trackMetaEvent('Lead', {
    content_name: 'Prime SDR - Formulário de Qualificação',
    content_category: 'SDR Software',
    value: 0,
    currency: 'BRL',
    custom_data: {
      company: formData.company,
      role: formData.role,
      team_size: formData.teamSize,
      average_ticket: formData.averageTicket,
      fit_score: formData.fitScore
    }
  });
};

export const trackMetaSchedule = (formData: any) => {
  trackMetaEvent('Schedule', {
    content_name: 'Prime SDR - Agendamento de Reunião',
    content_category: 'SDR Software',
    value: 0,
    currency: 'BRL',
    custom_data: {
      vendedor: formData.vendedor,
      meeting_type: 'Demonstração Prime SDR'
    }
  });
};

export const trackMetaPurchase = (value: number, currency: string = 'BRL') => {
  trackMetaEvent('Purchase', {
    content_name: 'Prime SDR - Assinatura',
    content_category: 'SDR Software',
    value: value,
    currency: currency
  });
};

export const trackMetaViewContent = (contentName: string) => {
  trackMetaEvent('ViewContent', {
    content_name: contentName,
    content_category: 'SDR Software'
  });
};

export const trackMetaAddToCart = (value: number) => {
  trackMetaEvent('AddToCart', {
    content_name: 'Prime SDR - Teste Grátis',
    content_category: 'SDR Software',
    value: value,
    currency: 'BRL'
  });
};
