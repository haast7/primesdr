'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp,
  BarChart3,
  Target,
  Eye,
  Lock,
  ExternalLink,
  AlertTriangle
} from 'lucide-react';
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';
import { Button } from '@/components/ui/Button';

export function CookieBanner() {
  const { 
    showBanner, 
    acceptAll, 
    rejectAll, 
    acceptSelected, 
    hideConsentBanner 
  } = useCookieConsent();
  
  const [showDetails, setShowDetails] = useState(false);
  const [selectedConsent, setSelectedConsent] = useState({
    necessary: true, // Sempre necessário
    analytics: false,
    marketing: false,
    functional: false
  });

  const handleAcceptSelected = () => {
    acceptSelected(selectedConsent);
  };

  const handleToggleCategory = (category: keyof typeof selectedConsent) => {
    if (category === 'necessary') return; // Não pode ser desabilitado
    
    setSelectedConsent(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const cookieCategories = [
    {
      id: 'necessary' as const,
      title: 'Cookies Essenciais',
      description: 'Necessários para o funcionamento básico do site',
      icon: Lock,
      required: true,
      examples: ['Sessão de login', 'Segurança', 'Preferências básicas']
    },
    {
      id: 'analytics' as const,
      title: 'Cookies de Análise',
      description: 'Nos ajudam a entender como você usa o site',
      icon: BarChart3,
      required: false,
      examples: ['Google Analytics', 'Microsoft Clarity', 'Métricas de uso']
    },
    {
      id: 'marketing' as const,
      title: 'Cookies de Marketing',
      description: 'Usados para exibir anúncios relevantes',
      icon: Target,
      required: false,
      examples: ['Meta Pixel', 'Google Ads', 'LinkedIn Insight', 'TikTok Pixel']
    },
    {
      id: 'functional' as const,
      title: 'Cookies Funcionais',
      description: 'Melhoram sua experiência de navegação',
      icon: Settings,
      required: false,
      examples: ['Chat de suporte', 'Preferências personalizadas', 'Lembrar configurações']
    }
  ];

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white border-t border-primary-500 shadow-lg"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 border border-primary-200">
            {/* Header Compacto */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <Cookie className="w-5 h-5 text-primary-600" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    🍪 Usamos cookies para melhorar sua experiência
                  </h3>
                  <p className="text-xs text-gray-600">
                    Cookies essenciais + opcionais para análise. Você pode escolher.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions Compactas */}
            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              <Button
                onClick={acceptAll}
                className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-1"
              >
                <Check className="w-4 h-4" />
                <span>Aceitar Todos</span>
              </Button>
              
              <Button
                onClick={rejectAll}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-1"
              >
                <X className="w-4 h-4" />
                <span>Apenas Essenciais</span>
              </Button>
              
              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="outline"
                className="border-primary-300 text-primary-700 hover:bg-primary-50 text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-1"
              >
                {showDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                <span>Personalizar</span>
              </Button>
            </div>

            {/* Detailed Settings Compactas */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200 pt-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Settings className="w-4 h-4 text-primary-600" />
                      <h4 className="text-sm font-semibold text-gray-900">
                        Escolha suas preferências
                      </h4>
                    </div>

                    {cookieCategories.map((category) => (
                      <div
                        key={category.id}
                        className={`p-3 rounded-lg border transition-all duration-200 ${
                          selectedConsent[category.id]
                            ? 'border-primary-200 bg-primary-50'
                            : 'border-gray-200 bg-white'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            selectedConsent[category.id] ? 'bg-primary-100' : 'bg-gray-100'
                          }`}>
                            <category.icon className={`w-4 h-4 ${
                              selectedConsent[category.id] ? 'text-primary-600' : 'text-gray-500'
                            }`} />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h5 className="text-sm font-medium text-gray-900">
                                {category.title}
                                {category.required && (
                                  <span className="ml-1 text-xs bg-red-100 text-red-700 px-1 py-0.5 rounded">
                                    Obrigatório
                                  </span>
                                )}
                              </h5>
                              
                              <button
                                onClick={() => handleToggleCategory(category.id)}
                                disabled={category.required}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                                  selectedConsent[category.id] ? 'bg-primary-600' : 'bg-gray-300'
                                } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                              >
                                <span
                                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                                    selectedConsent[category.id] ? 'translate-x-6' : 'translate-x-1'
                                  }`}
                                />
                              </button>
                            </div>
                            
                            <p className="text-xs text-gray-600">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Action Buttons Compactas */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <Button
                        onClick={handleAcceptSelected}
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200"
                      >
                        Salvar Preferências
                      </Button>
                      
                      <Button
                        onClick={() => window.open('/cookies', '_blank')}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Política de Cookies</span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer Info Compacto */}
            <div className="mt-3 pt-2 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-1 sm:space-y-0">
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Shield className="w-3 h-3" />
                  <span>
                    Dados protegidos pela LGPD. 
                    <button 
                      onClick={() => window.open('/privacidade', '_blank')}
                      className="text-primary-600 hover:text-primary-700 underline ml-1"
                    >
                      Saiba mais
                    </button>
                  </span>
                </div>
                
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <AlertTriangle className="w-3 h-3" />
                  <span>Altere preferências a qualquer momento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
