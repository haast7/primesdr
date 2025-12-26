'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { X, CheckCircle, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { usePartialFormCapture } from '@/lib/hooks/usePartialFormCapture';
import { sendToWebhook, formatPhoneForWebhook, getCurrentDateTime } from '@/lib/webhook';
import { trackEvent } from '@/components/Analytics';
import { trackMetaLead } from '../tracking/MetaPixel';
import { trackGoogleAdsLead } from '../tracking/GoogleAds';
import { trackGA4Lead } from '../tracking/GoogleAnalytics';

interface ResourceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  resourceId: string;
  resourceTitle: string;
  redirectUrl?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  phoneCountry: string;
  phoneNumber: string;
  company: string;
  role: string;
}

export function ResourceFormModal({
  isOpen,
  onClose,
  onSuccess,
  resourceId,
  resourceTitle,
  redirectUrl
}: ResourceFormModalProps) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    phoneCountry: '+55',
    phoneNumber: '',
    company: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  // Hook para captura de dados parciais
  const { updateFormData, markFormSubmitted } = usePartialFormCapture({
    formId: `resource-${resourceId}`,
    debounceMs: 1500,
    minFieldsToCapture: 2,
    onPartialData: async (data) => {
      try {
        await fetch('/api/forms/partial-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            resourceId,
            resourceTitle
          })
        });
      } catch (error) {
        console.error('Erro ao enviar dados parciais:', error);
      }
    },
    onFormAbandon: async (data) => {
      try {
        await fetch('/api/forms/partial-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            resourceId,
            resourceTitle,
            isAbandoned: true
          })
        });
      } catch (error) {
        console.error('Erro ao enviar dados de abandono:', error);
      }
    }
  });

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        phoneCountry: '+55',
        phoneNumber: '',
        company: '',
        role: ''
      });
      setShowThankYou(false);
    }
  }, [isOpen]);

  const handleFieldChange = (fieldId: string, value: string) => {
    const newFormData = { ...formData, [fieldId]: value };
    setFormData(newFormData);
    updateFormData(newFormData);
  };

  const handlePhoneChange = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos (DDD + 9 dígitos)
    const limitedNumbers = numbers.slice(0, 11);
    
    // Formata apenas se tiver números
    let formatted = '';
    if (limitedNumbers.length > 0) {
      if (limitedNumbers.length <= 2) {
        formatted = `(${limitedNumbers}`;
      } else if (limitedNumbers.length <= 7) {
        formatted = `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`;
      } else {
        formatted = `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`;
      }
    }
    
    // Atualiza o estado
    const newFormData = {
      ...formData,
      phone: formatted,
      phoneNumber: limitedNumbers
    };
    
    setFormData(newFormData);
    
    // Atualiza para captura parcial
    updateFormData(newFormData);
  };

  const isFormValid = () => {
    const phoneNumbers = formData.phoneNumber || formData.phone.replace(/\D/g, '');
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      phoneNumbers.length >= 10 &&
      formData.company.trim() !== ''
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      console.log('Formulário inválido:', formData);
      return;
    }

    setIsSubmitting(true);
    markFormSubmitted();
    
    console.log('Enviando formulário...', { resourceId, redirectUrl, formData });

    try {
      // Track events
      trackEvent('resource_form_submitted', {
        resourceId,
        resourceTitle,
        form_data: formData
      });

      // Enviar para Meta Pixel
      trackMetaLead({ ...formData });

      // Enviar para Google Ads
      trackGoogleAdsLead({ ...formData });

      // Enviar para Google Analytics 4
      trackGA4Lead({ ...formData });

      // Enviar para Meta Conversions API
      try {
        await fetch('/api/meta/lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formData: { ...formData },
            eventType: 'Lead'
          }),
        });
      } catch (error) {
        console.error('Erro ao enviar para Meta API:', error);
      }

      // Enviar para Google Ads Conversions API
      try {
        await fetch('/api/google-ads/conversion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formData: { ...formData },
            eventType: 'Lead'
          }),
        });
      } catch (error) {
        console.error('Erro ao enviar para Google Ads API:', error);
      }

      // Enviar para webhook do Make.com (não bloqueia o fluxo se falhar)
      try {
        const { data, horario } = getCurrentDateTime();
        const phoneFormatted = formatPhoneForWebhook(formData.phone);
        const webhookData = {
          nome: formData.name,
          email: formData.email,
          whatsapp: phoneFormatted,
          empresa: formData.company,
          cargo: formData.role || '',
          dominio: formData.email.split('@')[1] || '',
          data_entrada: data,
          horario_entrada: horario,
          fonte: `Recurso: ${resourceTitle}`,
          form_id: `resource-${resourceId}`,
          material_id: resourceId,
          material_nome: resourceTitle
        };

        await sendToWebhook(webhookData);
        console.log('Webhook enviado com sucesso');
      } catch (webhookError) {
        console.error('Erro ao enviar webhook (continuando mesmo assim):', webhookError);
        // Não bloqueia o fluxo se o webhook falhar
      }

      // Mostrar tela de sucesso
      setShowThankYou(true);

      // Aguardar 1.5s e redirecionar ou chamar onSuccess
      setTimeout(() => {
        if (redirectUrl) {
          console.log('Redirecionando para:', redirectUrl);
          // Usar router do Next.js para navegação mais suave
          router.push(redirectUrl);
          // Fechar modal após navegação
          setTimeout(() => {
            onClose();
          }, 200);
        } else {
          console.log('Chamando onSuccess');
          onSuccess();
          onClose();
        }
      }, 1500);

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      // Mesmo com erro, tenta redirecionar se tiver redirectUrl
      if (redirectUrl) {
        setShowThankYou(true);
        setTimeout(() => {
          router.push(redirectUrl);
          setTimeout(() => {
            onClose();
          }, 200);
        }, 1500);
      } else {
        alert('Erro ao enviar formulário. Por favor, tente novamente.');
        setIsSubmitting(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full -mr-16 -mt-16 opacity-50" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-100 to-accent-100 rounded-full -ml-12 -mb-12 opacity-30" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                aria-label="Fechar"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              {/* Content */}
              <div className="relative z-10">
                {showThankYou ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === 'pt' ? 'Acesso liberado!' : language === 'es' ? '¡Acceso liberado!' : 'Access granted!'}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {language === 'pt' 
                        ? 'Redirecionando para o recurso...' 
                        : language === 'es'
                        ? 'Redirigiendo al recurso...'
                        : 'Redirecting to resource...'}
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Icon */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calculator className="w-8 h-8 text-primary-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {language === 'pt' 
                          ? 'Acesse este recurso' 
                          : language === 'es'
                          ? 'Accede a este recurso'
                          : 'Access this resource'}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        {language === 'pt'
                          ? 'Preencha o formulário para acessar'
                          : language === 'es'
                          ? 'Completa el formulario para acceder'
                          : 'Fill out the form to access'}
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'pt' ? 'Nome completo *' : language === 'es' ? 'Nombre completo *' : 'Full name *'}
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleFieldChange('name', e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder={language === 'pt' ? 'Seu nome completo' : language === 'es' ? 'Tu nombre completo' : 'Your full name'}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => handleFieldChange('email', e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'pt' ? 'WhatsApp *' : language === 'es' ? 'WhatsApp *' : 'WhatsApp *'}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder={language === 'pt' ? '(11) 99999-9999' : '(11) 99999-9999'}
                          maxLength={15}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          {language === 'pt' 
                            ? 'Digite apenas números (mínimo 10 dígitos)' 
                            : language === 'es'
                            ? 'Ingresa solo números (mínimo 10 dígitos)'
                            : 'Enter numbers only (minimum 10 digits)'}
                        </p>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'pt' ? 'Empresa *' : language === 'es' ? 'Empresa *' : 'Company *'}
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleFieldChange('company', e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder={language === 'pt' ? 'Nome da sua empresa' : language === 'es' ? 'Nombre de tu empresa' : 'Your company name'}
                        />
                      </div>

                      <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'pt' ? 'Cargo' : language === 'es' ? 'Cargo' : 'Role'}
                        </label>
                        <input
                          type="text"
                          id="role"
                          value={formData.role}
                          onChange={(e) => handleFieldChange('role', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder={language === 'pt' ? 'Seu cargo (opcional)' : language === 'es' ? 'Tu cargo (opcional)' : 'Your role (optional)'}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={!isFormValid() || isSubmitting}
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={(e) => {
                          if (!isFormValid()) {
                            e.preventDefault();
                            console.log('Formulário inválido. Campos:', {
                              name: formData.name,
                              email: formData.email,
                              phone: formData.phone,
                              company: formData.company
                            });
                            return;
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 inline-block" />
                            {language === 'pt' ? 'Enviando...' : language === 'es' ? 'Enviando...' : 'Sending...'}
                          </>
                        ) : (
                          language === 'pt' ? 'Acessar recurso' : language === 'es' ? 'Acceder al recurso' : 'Access resource'
                        )}
                      </Button>
                      {!isFormValid() && formData.name !== '' && (
                        <p className="text-xs text-red-500 mt-2 text-center">
                          {language === 'pt' 
                            ? 'Por favor, preencha todos os campos obrigatórios' 
                            : language === 'es'
                            ? 'Por favor, completa todos los campos obligatorios'
                            : 'Please fill in all required fields'}
                        </p>
                      )}
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

