'use client';

import React, { useEffect } from 'react';
import { useCookieTracking } from '@/lib/hooks/useCookieTracking';
import { Button } from '@/components/ui/Button';

export function TrackingExample() {
  const {
    consent,
    isAllowed,
    trackCTAClick,
    trackPageView,
    trackScroll,
    trackTimeOnPage,
    trackWhatsAppClick,
    trackScheduleCall,
    trackFormStart,
    trackFormSubmit
  } = useCookieTracking();

  // Exemplo: Rastrear visualização da página
  useEffect(() => {
    trackPageView('Exemplo de Tracking', 'Demonstração');
  }, [trackPageView]);

  // Exemplo: Rastrear scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollPercent >= 25 && scrollPercent < 50) {
        trackScroll(25);
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        trackScroll(50);
      } else if (scrollPercent >= 75) {
        trackScroll(75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScroll]);

  // Exemplo: Rastrear tempo na página
  useEffect(() => {
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [trackTimeOnPage]);

  const handleCTAClick = (ctaName: string, location: string) => {
    trackCTAClick(ctaName, location, 100);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('exemplo-componente', '+5511945022847');
  };

  const handleScheduleCall = () => {
    trackScheduleCall('exemplo-componente', 'calendly');
  };

  const handleFormStart = () => {
    trackFormStart('exemplo-formulario', 'exemplo-componente');
  };

  const handleFormSubmit = (success: boolean) => {
    trackFormSubmit('exemplo-formulario', 'exemplo-componente', success);
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Exemplo de Tracking com Consentimento
      </h3>
      
      {/* Status do Consentimento */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2">Status do Consentimento:</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className={`p-2 rounded ${isAllowed('analytics') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            Analytics: {isAllowed('analytics') ? 'Permitido' : 'Negado'}
          </div>
          <div className={`p-2 rounded ${isAllowed('marketing') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            Marketing: {isAllowed('marketing') ? 'Permitido' : 'Negado'}
          </div>
          <div className={`p-2 rounded ${isAllowed('functional') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            Funcional: {isAllowed('functional') ? 'Permitido' : 'Negado'}
          </div>
          <div className="p-2 rounded bg-blue-100 text-blue-800">
            Essencial: Sempre Ativo
          </div>
        </div>
      </div>

      {/* Botões de Exemplo */}
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">CTAs (sempre rastreados se analytics permitido):</h4>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => handleCTAClick('botao-principal', 'exemplo-componente')}
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              CTA Principal
            </Button>
            <Button
              onClick={() => handleCTAClick('botao-secundario', 'exemplo-componente')}
              variant="outline"
            >
              CTA Secundário
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">WhatsApp (sempre rastreado se analytics permitido):</h4>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Falar no WhatsApp
          </Button>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Agendamento (sempre rastreado se analytics permitido):</h4>
          <Button
            onClick={handleScheduleCall}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Agendar Reunião
          </Button>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Formulário (sempre rastreado se analytics permitido):</h4>
          <div className="flex gap-2">
            <Button
              onClick={handleFormStart}
              variant="outline"
            >
              Iniciar Formulário
            </Button>
            <Button
              onClick={() => handleFormSubmit(true)}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Enviar (Sucesso)
            </Button>
            <Button
              onClick={() => handleFormSubmit(false)}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Enviar (Erro)
            </Button>
          </div>
        </div>
      </div>

      {/* Informações de Debug */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">Informações de Debug:</h4>
        <pre className="text-xs text-yellow-700 overflow-auto">
          {JSON.stringify(consent, null, 2)}
        </pre>
      </div>
    </div>
  );
}
