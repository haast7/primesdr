'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Settings, 
  Check, 
  X, 
  BarChart3,
  Target,
  Lock,
  RefreshCw,
  AlertTriangle,
  Info
} from 'lucide-react';
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function CookieManager() {
  const { 
    consent, 
    updateConsent, 
    showConsentBanner 
  } = useCookieConsent();
  
  const [localConsent, setLocalConsent] = useState(consent || {
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const [hasChanges, setHasChanges] = useState(false);

  const handleToggleCategory = (category: keyof typeof localConsent) => {
    if (category === 'necessary') return; // Não pode ser desabilitado
    
    const newConsent = {
      ...localConsent,
      [category]: !localConsent[category]
    };
    setLocalConsent(newConsent);
    setHasChanges(true);
  };

  const handleSaveChanges = () => {
    updateConsent(localConsent);
    setHasChanges(false);
  };

  const handleReset = () => {
    setLocalConsent(consent || {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    });
    setHasChanges(false);
  };

  const cookieCategories = [
    {
      id: 'necessary' as const,
      title: 'Cookies Essenciais',
      description: 'Necessários para o funcionamento básico do site',
      icon: Lock,
      required: true,
      examples: ['Sessão de login', 'Segurança', 'Preferências básicas'],
      color: 'red'
    },
    {
      id: 'analytics' as const,
      title: 'Cookies de Análise',
      description: 'Nos ajudam a entender como você usa o site',
      icon: BarChart3,
      required: false,
      examples: ['Google Analytics', 'Microsoft Clarity', 'Métricas de uso'],
      color: 'blue'
    },
    {
      id: 'marketing' as const,
      title: 'Cookies de Marketing',
      description: 'Usados para exibir anúncios relevantes',
      icon: Target,
      required: false,
      examples: ['Meta Pixel', 'Google Ads', 'LinkedIn Insight', 'TikTok Pixel'],
      color: 'yellow'
    },
    {
      id: 'functional' as const,
      title: 'Cookies Funcionais',
      description: 'Melhoram sua experiência de navegação',
      icon: Settings,
      required: false,
      examples: ['Chat de suporte', 'Preferências personalizadas', 'Lembrar configurações'],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colorMap = {
      red: isActive ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-white',
      blue: isActive ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white',
      yellow: isActive ? 'border-yellow-200 bg-yellow-50' : 'border-gray-200 bg-white',
      green: isActive ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'
    };
    return colorMap[color as keyof typeof colorMap] || 'border-gray-200 bg-white';
  };

  const getIconColorClasses = (color: string, isActive: boolean) => {
    const colorMap = {
      red: isActive ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500',
      blue: isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500',
      yellow: isActive ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-500',
      green: isActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm mb-4">
          <Cookie className="w-5 h-5 mr-2" />
          Gerenciador de Cookies
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Controle suas Preferências de Cookies
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Gerencie quais tipos de cookies você permite em nosso site. 
          Você pode alterar essas configurações a qualquer momento.
        </p>
      </div>

      {/* Current Status */}
      {consent && (
        <Card className="p-6 bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
          <div className="flex items-center space-x-3 mb-4">
            <Info className="w-5 h-5 text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Status Atual do Consentimento
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cookieCategories.map((category) => (
              <div
                key={category.id}
                className={`p-3 rounded-lg border text-center ${
                  consent[category.id] 
                    ? 'border-green-200 bg-green-50 text-green-800' 
                    : 'border-gray-200 bg-gray-50 text-gray-600'
                }`}
              >
                <category.icon className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm font-medium">{category.title}</p>
                <p className="text-xs">
                  {consent[category.id] ? 'Ativado' : 'Desativado'}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Cookie Categories */}
      <div className="space-y-4">
        {cookieCategories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className={`p-6 border-2 transition-all duration-200 ${getColorClasses(category.color, localConsent[category.id])}`}>
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconColorClasses(category.color, localConsent[category.id])}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {category.title}
                        {category.required && (
                          <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                            Obrigatório
                          </span>
                        )}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {category.description}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => handleToggleCategory(category.id)}
                      disabled={category.required}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                        localConsent[category.id] ? 'bg-primary-600' : 'bg-gray-300'
                      } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                          localConsent[category.id] ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, index) => (
                      <span
                        key={index}
                        className="text-xs bg-white/50 text-gray-600 px-3 py-1 rounded-full border"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={handleSaveChanges}
          disabled={!hasChanges}
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Check className="w-5 h-5" />
          <span>Salvar Alterações</span>
        </Button>
        
        <Button
          onClick={handleReset}
          disabled={!hasChanges}
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Restaurar</span>
        </Button>
        
        <Button
          onClick={showConsentBanner}
          variant="outline"
          className="border-primary-300 text-primary-700 hover:bg-primary-50 font-semibold py-3 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Settings className="w-5 h-5" />
          <span>Mostrar Banner</span>
        </Button>
      </div>

      {/* Warning */}
      <Card className="p-4 bg-yellow-50 border-yellow-200">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-yellow-800 mb-1">
              Importante
            </h4>
            <p className="text-yellow-700 text-sm">
              Desativar cookies não essenciais pode afetar algumas funcionalidades do site. 
              Cookies essenciais são sempre necessários para o funcionamento básico.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
