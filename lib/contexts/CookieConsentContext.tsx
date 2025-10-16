'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface CookieConsentContextType {
  consent: CookieConsent | null;
  hasConsented: boolean;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  acceptSelected: (selectedConsent: Partial<CookieConsent>) => void;
  updateConsent: (newConsent: CookieConsent) => void;
  showConsentBanner: () => void;
  hideConsentBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const CONSENT_STORAGE_KEY = 'primesdr_cookie_consent';
const CONSENT_VERSION = '1.0';

interface CookieConsentProviderProps {
  children: ReactNode;
}

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // Carregar consentimento do localStorage
  useEffect(() => {
    const loadConsent = () => {
      try {
        const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.version === CONSENT_VERSION) {
            setConsent(parsed.consent);
            setHasConsented(true);
            setShowBanner(false);
            applyConsentToGTM(parsed.consent);
          } else {
            // Versão diferente, mostrar banner novamente
            setShowBanner(true);
          }
        } else {
          setShowBanner(true);
        }
      } catch (error) {
        console.error('Erro ao carregar consentimento de cookies:', error);
        setShowBanner(true);
      }
    };

    loadConsent();
  }, []);

  // Aplicar consentimento ao GTM/GA4
  const applyConsentToGTM = (consentData: CookieConsent) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'consent_update',
        ad_storage: consentData.marketing ? 'granted' : 'denied',
        analytics_storage: consentData.analytics ? 'granted' : 'denied',
        functionality_storage: consentData.functional ? 'granted' : 'denied',
        personalization_storage: consentData.marketing ? 'granted' : 'denied',
        security_storage: 'granted', // Sempre concedido para cookies essenciais
        cookie_consent: consentData
      });
    }
  };

  // Salvar consentimento no localStorage
  const saveConsent = (consentData: CookieConsent) => {
    try {
      const consentPackage = {
        version: CONSENT_VERSION,
        consent: consentData,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentPackage));
      setConsent(consentData);
      setHasConsented(true);
      setShowBanner(false);
      applyConsentToGTM(consentData);
    } catch (error) {
      console.error('Erro ao salvar consentimento de cookies:', error);
    }
  };

  const acceptAll = () => {
    const fullConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    saveConsent(fullConsent);
  };

  const rejectAll = () => {
    const minimalConsent: CookieConsent = {
      necessary: true, // Sempre necessário
      analytics: false,
      marketing: false,
      functional: false
    };
    saveConsent(minimalConsent);
  };

  const acceptSelected = (selectedConsent: Partial<CookieConsent>) => {
    const newConsent: CookieConsent = {
      necessary: true, // Sempre necessário
      analytics: selectedConsent.analytics || false,
      marketing: selectedConsent.marketing || false,
      functional: selectedConsent.functional || false
    };
    saveConsent(newConsent);
  };

  const updateConsent = (newConsent: CookieConsent) => {
    saveConsent(newConsent);
  };

  const showConsentBanner = () => {
    setShowBanner(true);
  };

  const hideConsentBanner = () => {
    setShowBanner(false);
  };

  const value: CookieConsentContextType = {
    consent,
    hasConsented,
    showBanner,
    acceptAll,
    rejectAll,
    acceptSelected,
    updateConsent,
    showConsentBanner,
    hideConsentBanner
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent deve ser usado dentro de um CookieConsentProvider');
  }
  return context;
}

// Declaração global para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}
