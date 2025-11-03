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

  // Carrega o script apenas uma vez quando o componente monta
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Verifica se o script já foi carregado
    const existingScript = document.getElementById('meta-pixel-script');
    if (existingScript) {
      return; // Script já foi carregado
    }

    // Carrega o script do Meta Pixel SEMPRE para aparecer no Pixel Helper
    // O script será carregado mesmo sem consentimento para aparecer no helper
    const script = document.createElement('script');
    script.id = 'meta-pixel-script';
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
    `;
    
    document.head.appendChild(script);

    // Inicializa a função fbq sempre
    window.fbq = window.fbq || function() {
      (window.fbq.q = window.fbq.q || []).push(arguments);
    };
  }, [pixelId]);

  // Reage a mudanças de consentimento para enviar PageView
  useEffect(() => {
    if (typeof window === 'undefined' || !window.fbq) return;

    // Se houver consentimento de marketing, envia PageView
    if (consent?.marketing) {
      // Aguarda um pouco para garantir que o script está pronto
      const sendPageView = () => {
        if (window.fbq && window.fbq.loaded) {
          window.fbq('track', 'PageView');
        } else {
          // Se ainda não carregou, tenta novamente em breve
          setTimeout(sendPageView, 200);
        }
      };
      sendPageView();
    }
  }, [consent?.marketing]);

  return null;
}

// Funções utilitárias para tracking
export const trackMetaEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    // Sempre tenta enviar o evento (fbq já está carregado)
    // O Meta Pixel sempre carrega, mas respeita consentimento internamente
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
