'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/components/Analytics';
import { trackMetaLead, trackMetaSchedule } from '../tracking/MetaPixel';
import { trackGoogleAdsLead, trackGoogleAdsSchedule } from '../tracking/GoogleAds';
import { trackGA4Lead, trackGA4Schedule } from '../tracking/GoogleAnalytics';
import { ThankYouScreen } from './ThankYouScreen';
import { sendToWebhook, formatPhoneForWebhook, getCurrentDateTime } from '@/lib/webhook';
import { usePartialFormCapture } from '@/lib/hooks/usePartialFormCapture';
import { useLanguage } from '@/lib/contexts/LanguageContext';

// Lista de países com códigos telefônicos (sem duplicatas)
const countryCodes = [
  { code: '+55', country: 'Brasil', flag: '🇧🇷' },
  { code: '+1', country: 'Estados Unidos', flag: '🇺🇸' },
  { code: '+1', country: 'Canadá', flag: '🇨🇦' },
  { code: '+34', country: 'Espanha', flag: '🇪🇸' },
  { code: '+33', country: 'França', flag: '🇫🇷' },
  { code: '+49', country: 'Alemanha', flag: '🇩🇪' },
  { code: '+39', country: 'Itália', flag: '🇮🇹' },
  { code: '+44', country: 'Reino Unido', flag: '🇬🇧' },
  { code: '+31', country: 'Holanda', flag: '🇳🇱' },
  { code: '+32', country: 'Bélgica', flag: '🇧🇪' },
  { code: '+41', country: 'Suíça', flag: '🇨🇭' },
  { code: '+43', country: 'Áustria', flag: '🇦🇹' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'Colômbia', flag: '🇨🇴' },
  { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+598', country: 'Uruguai', flag: '🇺🇾' },
  { code: '+595', country: 'Paraguai', flag: '🇵🇾' }
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  phoneCountry: string;
  phoneNumber: string;
  company: string;
  role: string;
  linkedin: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// contactFields será criado dinamicamente com traduções dentro do componente

// Funções de validação
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string) => {
  const numbers = phone.replace(/\D/g, '');
  return numbers.length >= 10 && numbers.length <= 15;
};

const validateURL = (url: string) => {
  if (!url || url.trim() === '') return false;
  
  // Adicionar http:// se não tiver protocolo
  let urlToValidate = url.trim();
  if (!urlToValidate.startsWith('http://') && !urlToValidate.startsWith('https://')) {
    urlToValidate = 'https://' + urlToValidate;
  }
  
  try {
    new URL(urlToValidate);
    return true;
  } catch {
    return false;
  }
};

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    phoneCountry: '+55',
    phoneNumber: '',
    company: '',
    role: '',
    linkedin: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  // Hook para captura de dados parciais
  const { updateFormData, markFormSubmitted } = usePartialFormCapture({
    formId: 'contact-modal',
    debounceMs: 1500,
    minFieldsToCapture: 2,
    onPartialData: async (data) => {
      try {
        await fetch('/api/forms/partial-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
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
          body: JSON.stringify(data)
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
        role: '',
        linkedin: ''
      });
      setShowThankYou(false);
    }
  }, [isOpen]);

  const handleFieldChange = (fieldId: string, value: string) => {
    const newFormData = { ...formData, [fieldId]: value };
    setFormData(newFormData);
    
    // Captura dados parciais em tempo real
    updateFormData(newFormData);
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    const newFormData = { 
      ...formData, 
      phone: formatted,
      phoneNumber: formatted.replace(/\D/g, '')
    };
    setFormData(newFormData);
    
    // Captura dados parciais em tempo real
    updateFormData(newFormData);
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      validateEmail(formData.email) &&
      validatePhone(formData.phone) &&
      formData.company.trim() !== '' &&
      formData.role.trim() !== '' &&
      validateURL(formData.linkedin)
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Marca o formulário como submetido para evitar captura de abandono
    markFormSubmitted();
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      trackEvent('contact_form_submitted', {
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
      
      console.log('Contact form submitted:', formData);
      
      // Enviar para webhook do Make.com
      const { data, horario } = getCurrentDateTime();
      const webhookData = {
        nome: formData.name,
        email: formData.email,
        whatsapp: formatPhoneForWebhook(formData.phone),
        empresa: formData.company,
        cargo: formData.role,
        dominio: formData.linkedin,
        data_entrada: data,
        horario_entrada: horario,
        fonte: 'Formulário B (Captação Direta)'
      };
      
      try {
        await sendToWebhook(webhookData);
        console.log('Dados enviados para webhook com sucesso');
      } catch (error) {
        console.error('Erro ao enviar para webhook:', error);
      }
      
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
      setShowThankYou(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {!showThankYou && (
                <>
                  <h2 className="text-2xl font-bold mb-2">
                    {t.contactModal.title}
                  </h2>
                  <p className="text-blue-100">
                    {t.contactModal.subtitle}
                  </p>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-8 max-h-[calc(90vh-120px)] overflow-y-auto">
              {!showThankYou ? (
                <ContactForm
                  formData={formData}
                  onFieldChange={handleFieldChange}
                  onPhoneChange={handlePhoneChange}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  isFormValid={isFormValid}
                />
              ) : (
                <ThankYouScreen
                  formData={formData}
                  onClose={onClose}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ContactFormProps {
  formData: FormData;
  onFieldChange: (fieldId: string, value: string) => void;
  onPhoneChange: (value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  isFormValid: () => boolean;
}

function ContactForm({
  formData,
  onFieldChange,
  onPhoneChange,
  onSubmit,
  isSubmitting,
  isFormValid
}: ContactFormProps) {
  const { t } = useLanguage();
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  const handleCountrySelect = (country: typeof countryCodes[0]) => {
    setSelectedCountry(country);
    onFieldChange('phoneCountry', country.code);
    setShowCountryDropdown(false);
  };

  const contactFields = [
    { id: 'name', label: `${t.contactModal.form.name} *`, type: 'text', required: true },
    { id: 'email', label: `${t.contactModal.form.email} *`, type: 'email', required: true },
    { id: 'phone', label: `${t.contactModal.form.phone} *`, type: 'phone', required: true },
    { id: 'company', label: `${t.contactModal.form.company} *`, type: 'text', required: true },
    { id: 'role', label: `${t.contactModal.form.role} *`, type: 'text', required: true },
    { id: 'linkedin', label: `${t.contactModal.form.linkedin} *`, type: 'url', required: true }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {t.contactModal.form.heading}
        </h3>
        <p className="text-gray-600">
          {t.contactModal.form.description}
        </p>
      </div>

      <div className="space-y-6">
        {contactFields.map((field) => (
          <div key={field.id}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {field.label}
            </label>
            
            {field.id === 'phone' ? (
              <div className="flex space-x-3">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="flex items-center space-x-2 px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-white min-w-[120px]"
                  >
                    <span>{selectedCountry.flag}</span>
                    <span>{selectedCountry.code}</span>
                    <ArrowLeft className="w-4 h-4 rotate-90" />
                  </button>
                  
                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                      {countryCodes.map((country) => (
                        <button
                          key={country.code + country.country}
                          onClick={() => handleCountrySelect(country)}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
                        >
                          <span>{country.flag}</span>
                          <span>{country.code}</span>
                          <span className="text-gray-500">{country.country}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => onPhoneChange(e.target.value)}
                  placeholder={t.contactModal.form.phone}
                  className="flex-1 p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            ) : (
              <input
                type={field.type}
                value={formData[field.id as keyof FormData]}
                onChange={(e) => onFieldChange(field.id, e.target.value)}
                placeholder={field.type === 'url' ? t.contactModal.form.linkedinPlaceholder : ''}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-4 pt-6">
        <Button
          onClick={onSubmit}
          disabled={!isFormValid() || isSubmitting}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>{t.contactModal.form.submitting}</span>
            </>
          ) : (
            <>
              <span>{t.contactModal.form.submit}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}
