'use client';

import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';
import { trackEvent, trackConversion, trackLead } from '@/components/Analytics';

export function useCookieTracking() {
  const { consent } = useCookieConsent();

  // Função para verificar se um tipo de cookie está permitido
  const isAllowed = (type: 'analytics' | 'marketing' | 'functional') => {
    if (!consent) return false;
    return consent[type];
  };

  // Função para rastrear eventos apenas se o consentimento for dado
  const trackEventIfAllowed = (eventName: string, parameters: Record<string, any> = {}) => {
    if (isAllowed('analytics')) {
      trackEvent(eventName, parameters);
    }
  };

  // Função para rastrear conversões apenas se o consentimento for dado
  const trackConversionIfAllowed = (conversionType: string, value?: number, currency = 'BRL') => {
    if (isAllowed('marketing')) {
      trackConversion(conversionType, value, currency);
    }
  };

  // Função para rastrear leads apenas se o consentimento for dado
  const trackLeadIfAllowed = (leadData: {
    name?: string;
    email?: string;
    company?: string;
    source?: string;
  }) => {
    if (isAllowed('analytics')) {
      trackLead(leadData);
    }
  };

  // Função para rastrear cliques em CTAs
  const trackCTAClick = (ctaName: string, location: string, value?: number) => {
    trackEventIfAllowed('cta_click', {
      cta_name: ctaName,
      cta_location: location,
      cta_value: value
    });
  };

  // Função para rastrear visualizações de página
  const trackPageView = (pageName: string, pageCategory?: string) => {
    trackEventIfAllowed('page_view', {
      page_name: pageName,
      page_category: pageCategory
    });
  };

  // Função para rastrear scroll
  const trackScroll = (scrollPercentage: number) => {
    trackEventIfAllowed('scroll', {
      scroll_percentage: scrollPercentage
    });
  };

  // Função para rastrear tempo na página
  const trackTimeOnPage = (timeInSeconds: number) => {
    trackEventIfAllowed('time_on_page', {
      time_seconds: timeInSeconds
    });
  };

  // Função para rastrear cliques em links externos
  const trackExternalLink = (url: string, linkText: string) => {
    trackEventIfAllowed('external_link_click', {
      external_url: url,
      link_text: linkText
    });
  };

  // Função para rastrear downloads
  const trackDownload = (fileName: string, fileType: string) => {
    trackEventIfAllowed('file_download', {
      file_name: fileName,
      file_type: fileType
    });
  };

  // Função para rastrear formulários
  const trackFormStart = (formName: string, formLocation: string) => {
    trackEventIfAllowed('form_start', {
      form_name: formName,
      form_location: formLocation
    });
  };

  const trackFormSubmit = (formName: string, formLocation: string, success: boolean) => {
    trackEventIfAllowed('form_submit', {
      form_name: formName,
      form_location: formLocation,
      form_success: success
    });
  };

  // Função para rastrear interações com vídeos
  const trackVideoInteraction = (videoName: string, action: 'play' | 'pause' | 'complete', timeInSeconds?: number) => {
    trackEventIfAllowed('video_interaction', {
      video_name: videoName,
      video_action: action,
      video_time: timeInSeconds
    });
  };

  // Função para rastrear buscas
  const trackSearch = (searchTerm: string, resultsCount?: number) => {
    trackEventIfAllowed('search', {
      search_term: searchTerm,
      search_results: resultsCount
    });
  };

  // Função para rastrear cliques em WhatsApp
  const trackWhatsAppClick = (location: string, phoneNumber?: string) => {
    trackEventIfAllowed('whatsapp_click', {
      whatsapp_location: location,
      whatsapp_number: phoneNumber
    });
  };

  // Função para rastrear agendamento de reuniões
  const trackScheduleCall = (location: string, calendarType?: string) => {
    trackEventIfAllowed('schedule_call', {
      schedule_location: location,
      calendar_type: calendarType
    });
  };

  return {
    consent,
    isAllowed,
    trackEventIfAllowed,
    trackConversionIfAllowed,
    trackLeadIfAllowed,
    trackCTAClick,
    trackPageView,
    trackScroll,
    trackTimeOnPage,
    trackExternalLink,
    trackDownload,
    trackFormStart,
    trackFormSubmit,
    trackVideoInteraction,
    trackSearch,
    trackWhatsAppClick,
    trackScheduleCall
  };
}
