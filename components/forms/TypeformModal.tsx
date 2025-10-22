'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle, Calendar, Download, MessageCircle, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/components/Analytics';
import { trackMetaLead, trackMetaSchedule } from '../tracking/MetaPixel';
import { trackGoogleAdsLead, trackGoogleAdsSchedule } from '../tracking/GoogleAds';
import { trackGA4Lead, trackGA4Schedule } from '../tracking/GoogleAnalytics';
import { ThankYouScreen } from './ThankYouScreen';
import { sendToWebhook, formatPhoneForWebhook, getCurrentDateTime } from '@/lib/webhook';

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
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+52', country: 'México', flag: '🇲🇽' },
  { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
  { code: '+598', country: 'Uruguai', flag: '🇺🇾' },
  { code: '+595', country: 'Paraguai', flag: '🇵🇾' },
  { code: '+591', country: 'Bolívia', flag: '🇧🇴' },
  { code: '+593', country: 'Equador', flag: '🇪🇨' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+81', country: 'Japão', flag: '🇯🇵' },
  { code: '+82', country: 'Coreia do Sul', flag: '🇰🇷' },
  { code: '+91', country: 'Índia', flag: '🇮🇳' },
  { code: '+61', country: 'Austrália', flag: '🇦🇺' },
  { code: '+64', country: 'Nova Zelândia', flag: '🇳🇿' },
  { code: '+27', country: 'África do Sul', flag: '🇿🇦' },
  { code: '+20', country: 'Egito', flag: '🇪🇬' },
  { code: '+971', country: 'Emirados Árabes Unidos', flag: '🇦🇪' },
  { code: '+966', country: 'Arábia Saudita', flag: '🇸🇦' },
  { code: '+7', country: 'Rússia', flag: '🇷🇺' },
  { code: '+90', country: 'Turquia', flag: '🇹🇷' },
  { code: '+48', country: 'Polônia', flag: '🇵🇱' },
  { code: '+420', country: 'República Tcheca', flag: '🇨🇿' },
  { code: '+421', country: 'Eslováquia', flag: '🇸🇰' },
  { code: '+36', country: 'Hungria', flag: '🇭🇺' },
  { code: '+40', country: 'Romênia', flag: '🇷🇴' },
  { code: '+359', country: 'Bulgária', flag: '🇧🇬' },
  { code: '+385', country: 'Croácia', flag: '🇭🇷' },
  { code: '+386', country: 'Eslovênia', flag: '🇸🇮' },
  { code: '+372', country: 'Estônia', flag: '🇪🇪' },
  { code: '+371', country: 'Letônia', flag: '🇱🇻' },
  { code: '+370', country: 'Lituânia', flag: '🇱🇹' },
  { code: '+46', country: 'Suécia', flag: '🇸🇪' },
  { code: '+47', country: 'Noruega', flag: '🇳🇴' },
  { code: '+45', country: 'Dinamarca', flag: '🇩🇰' },
  { code: '+358', country: 'Finlândia', flag: '🇫🇮' },
  { code: '+353', country: 'Irlanda', flag: '🇮🇪' },
  { code: '+30', country: 'Grécia', flag: '🇬🇷' },
  { code: '+357', country: 'Chipre', flag: '🇨🇾' },
  { code: '+356', country: 'Malta', flag: '🇲🇹' },
  { code: '+352', country: 'Luxemburgo', flag: '🇱🇺' },
  { code: '+377', country: 'Mônaco', flag: '🇲🇨' },
  { code: '+378', country: 'San Marino', flag: '🇸🇲' },
  { code: '+39', country: 'Vaticano', flag: '🇻🇦' },
  { code: '+376', country: 'Andorra', flag: '🇦🇩' },
  { code: '+423', country: 'Liechtenstein', flag: '🇱🇮' }
];

interface FormData {
  businessModel: string;
  mainPain: string;
  teamSize: string;
  meetingGoal: string;
  linkedinActive: string;
  averageTicket: string;
  urgency: string;
  name: string;
  email: string;
  phone: string;
  phoneCountry: string;
  phoneNumber: string;
  company: string;
  role: string;
  linkedin: string;
}

interface TypeformModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 'businessModel',
    title: 'Qual é o modelo de negócio da sua empresa?',
    type: 'multiple',
    options: [
      { value: 'b2b-consultivo', label: 'B2B com venda consultiva (ticket mais alto com ciclo de venda)' },
      { value: 'b2b-transacional', label: 'B2B transacional (venda rápida, ticket menor)' },
      { value: 'b2c', label: 'B2C (vendo para consumidor final)' },
      { value: 'validando', label: 'Ainda não vendo (estou validando o negócio)' }
    ],
    required: true
  },
  {
    id: 'mainPain',
    title: 'Qual é a DOR que mais sangra hoje na prospecção?',
    type: 'multiple',
    options: [
      { value: 'leads-desqualificados', label: 'Leads desqualificados entupindo o pipeline' },
      { value: 'nao-acesso-decisores', label: 'Não consigo acessar decisores (eles não atendem/respondem)' },
      { value: 'time-sem-tempo', label: 'Time sem tempo pra prospectar (apagando incêndio sempre)' },
      { value: 'dependencia-midia-paga', label: 'Dependência de mídia paga cara (e resultados oscilando)' },
      { value: 'nenhuma', label: 'Nenhuma dessas (estou só explorando)' }
    ],
    required: true
  },
  {
    id: 'teamSize',
    title: 'Quantas pessoas vendem ativamente hoje?',
    type: 'multiple',
    options: [
      { value: '1-3', label: '1-3 (fundador + poucos vendedores)' },
      { value: '4-10', label: '4-10 (time pequeno/médio)' },
      { value: '11-25', label: '11-25 (time estruturado)' },
      { value: '26+', label: '26+ (operação grande)' },
      { value: 'zero', label: 'Zero (ainda não tenho time comercial)' }
    ],
    required: true
  },
  {
    id: 'meetingGoal',
    title: 'Quantas reuniões qualificadas/mês você PRECISA gerar?',
    type: 'multiple',
    options: [
      { value: '20-50', label: '20-50 (começando a estruturar)' },
      { value: '50-100', label: '50-100 (crescimento consistente)' },
      { value: '100-200', label: '100-200 (escala agressiva)' },
      { value: '200+', label: '200+ (dominação de mercado)' }
    ],
    required: true
  },
  {
    id: 'linkedinActive',
    title: 'Seu time já usa LinkedIn ativamente pra prospectar?',
    type: 'multiple',
    options: [
      { value: 'sim-manual', label: 'Sim (usamos mas de forma manual/inconsistente)' },
      { value: 'nao', label: 'Não (LinkedIn é só networking, não vendas)' }
    ],
    required: true
  },
  {
    id: 'averageTicket',
    title: 'Qual é o ticket médio do seu produto/serviço?',
    type: 'text',
    placeholder: 'Ex: R$ 5.000/mês ou R$ 50.000/ano',
    required: true
  },
  {
    id: 'urgency',
    title: 'Quando você quer começar a gerar reuniões?',
    type: 'multiple',
    options: [
      { value: 'agora', label: 'AGORA (preciso resolver isso essa semana)' },
      { value: 'este-mes', label: 'Este mês (planejando pras próximas semanas)' },
      { value: 'proximo-trimestre', label: 'Próximo trimestre (só pesquisando ainda)' },
      { value: 'sem-pressa', label: 'Sem pressa (só explorando opções)' }
    ],
    required: true
  },
  {
    id: 'contact',
    title: 'Quase lá! Onde te encontramos?',
    type: 'contact',
    fields: [
      { id: 'name', label: 'Nome e sobrenome', type: 'text', required: true },
      { id: 'email', label: 'Email profissional', type: 'email', required: true },
      { id: 'phone', label: 'WhatsApp', type: 'phone', required: true },
      { id: 'company', label: 'Empresa', type: 'text', required: true },
      { id: 'role', label: 'Cargo', type: 'text', required: true },
      { id: 'linkedin', label: 'Domínio/site', type: 'url', required: true }
    ]
  }
];

// Funções de validação movidas para fora do componente
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string) => {
  const numbers = phone.replace(/\D/g, '');
  return numbers.length >= 10;
};

export function TypeformModal({ isOpen, onClose }: TypeformModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    businessModel: '',
    mainPain: '',
    teamSize: '',
    meetingGoal: '',
    linkedinActive: '',
    averageTicket: '',
    urgency: '',
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
  const [fitScore, setFitScore] = useState(0);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setFormData({
        businessModel: '',
        mainPain: '',
        teamSize: '',
        meetingGoal: '',
        linkedinActive: '',
        averageTicket: '',
        urgency: '',
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
      setFitScore(0);
    }
  }, [isOpen]);

  const handleAnswer = (questionId: string, answer: string) => {
    setFormData(prev => ({ ...prev, [questionId]: answer }));
    
    // Track answer
    trackEvent('typeform_answer', {
      question: questionId,
      answer: answer,
      step: currentStep + 1
    });

    // Auto advance for multiple choice questions
    // For text fields, advance immediately when handleAnswer is called (button click)
    const currentQuestion = questions[currentStep];
    if (questionId !== 'contact') {
      if (currentQuestion.type === 'multiple') {
        // Auto advance for multiple choice after 500ms
        setTimeout(() => {
          handleNext();
        }, 500);
      } else if (currentQuestion.type === 'text') {
        // Immediate advance for text fields (button click)
        handleNext();
      }
    }
  };

  const getNextStep = (currentStepIndex: number, answers: FormData) => {
    const currentQuestion = questions[currentStepIndex];
    
    // Lógica condicional baseada nas respostas
    if (currentQuestion.id === 'businessModel') {
      if (answers.businessModel === 'b2c' || answers.businessModel === 'validando') {
        // Pula para pergunta 8 (contato) - não é fit
        return 7; // Index da pergunta de contato
      }
    }
    
    if (currentQuestion.id === 'mainPain') {
      if (answers.mainPain === 'nenhuma') {
        // Pula para pergunta 8 (contato) - não tem dor específica
        return 7; // Index da pergunta de contato
      }
    }
    
    if (currentQuestion.id === 'teamSize') {
      if (answers.teamSize === 'zero') {
        // Pula para pergunta 8 (contato) - ainda não tem time
        return 7; // Index da pergunta de contato
      }
    }
    
    // Comportamento padrão: próxima pergunta
    return currentStepIndex + 1;
  };

  const handleContactFieldChange = (fieldId: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleNext = () => {
    const nextStep = getNextStep(currentStep, formData);
    
    if (nextStep < questions.length) {
      setCurrentStep(nextStep);
    } else {
      calculateFitScore();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateFitScore = () => {
    let score = 0;
    let totalQuestions = 0;

    // Business Model (30 points) - Mais peso para modelo de negócio
    if (formData.businessModel === 'b2b-consultivo') score += 30;
    else if (formData.businessModel === 'b2b-transacional') score += 20;
    else if (formData.businessModel === 'b2c') score += 5;
    else if (formData.businessModel === 'validando') score += 0;
    totalQuestions += 30;

    // Main Pain (25 points) - Dor específica é crucial
    if (formData.mainPain === 'leads-desqualificados') score += 25;
    else if (formData.mainPain === 'nao-acesso-decisores') score += 25;
    else if (formData.mainPain === 'time-sem-tempo') score += 20;
    else if (formData.mainPain === 'dependencia-midia-paga') score += 20;
    else if (formData.mainPain === 'nenhuma') score += 0;
    totalQuestions += 25;

    // Team Size (20 points)
    if (formData.teamSize === '4-10') score += 20; // Ideal
    else if (formData.teamSize === '11-25') score += 20; // Ideal
    else if (formData.teamSize === '1-3') score += 15; // Bom
    else if (formData.teamSize === '26+') score += 15; // Bom, mas pode ser complexo
    else if (formData.teamSize === 'zero') score += 0;
    totalQuestions += 20;

    // Meeting Goal (15 points)
    if (formData.meetingGoal === '100-200') score += 15; // Ideal
    else if (formData.meetingGoal === '200+') score += 15; // Ideal
    else if (formData.meetingGoal === '50-100') score += 12; // Bom
    else if (formData.meetingGoal === '20-50') score += 8; // Aceitável
    totalQuestions += 15;

    // LinkedIn Active (5 points)
    if (formData.linkedinActive === 'sim-manual') score += 5; // Já usa, mais fácil
    else if (formData.linkedinActive === 'nao') score += 3; // Precisa aprender
    totalQuestions += 5;

    // Urgency (5 points)
    if (formData.urgency === 'agora') score += 5; // Máxima urgência
    else if (formData.urgency === 'este-mes') score += 4; // Alta urgência
    else if (formData.urgency === 'proximo-trimestre') score += 2; // Média urgência
    else if (formData.urgency === 'sem-pressa') score += 0; // Baixa urgência
    totalQuestions += 5;

    const finalScore = Math.round((score / totalQuestions) * 100);
    setFitScore(finalScore);
    setShowThankYou(true);

    // Track completion
    trackEvent('typeform_completed', {
      fit_score: finalScore,
      business_model: formData.businessModel,
      main_pain: formData.mainPain,
      team_size: formData.teamSize,
      meeting_goal: formData.meetingGoal,
      urgency: formData.urgency,
      average_ticket: formData.averageTicket
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      trackEvent('typeform_submitted', {
        fit_score: fitScore,
        form_data: formData
      });

      // Enviar para Meta Pixel
      trackMetaLead({ ...formData, fitScore });

      // Enviar para Google Ads
      trackGoogleAdsLead({ ...formData, fitScore });

      // Enviar para Google Analytics 4
      trackGA4Lead({ ...formData, fitScore });

      // Enviar para Meta Conversions API
      try {
        await fetch('/api/meta/lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formData: { ...formData, fitScore },
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
            formData: { ...formData, fitScore },
            eventType: 'Lead'
          }),
        });
      } catch (error) {
        console.error('Erro ao enviar para Google Ads API:', error);
      }
      
      // Here you would integrate with your backend/CRM
      console.log('Form submitted:', { formData, fitScore });
      
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
        fonte: 'Formulário A (Quiz)'
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


  const getResultType = () => {
    if (fitScore >= 75) return 'perfect';
    if (fitScore >= 50) return 'medium';
    return 'low';
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const formatCurrency = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    if (!numbers) return '';
    
    // Se o valor for apenas zero, retorna R$ 0,00
    if (numbers === '0') {
      return 'R$ 0,00';
    }
    
    // Se o valor for apenas zeros, retorna R$ 0,00
    if (numbers === '00') {
      return 'R$ 0,00';
    }
    
    // Converte diretamente para número (sem dividir por 100)
    const number = parseInt(numbers);
    
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  };


  const isContactFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      validateEmail(formData.email) &&
      formData.phoneNumber.trim() !== '' &&
      validatePhone(formData.phoneNumber) &&
      formData.company.trim() !== '' &&
      formData.role.trim() !== ''
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
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
                  Vamos ver se a Prime SDR é pra você
                </h2>
                <p className="text-blue-100">
                  60 segundos → Agendamento direto na agenda
                </p>
                
                {/* Progress Bar */}
                <div className="mt-4 bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-white rounded-full h-2"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-8 max-h-[calc(90vh-120px)] overflow-y-auto">
            {!showThankYou ? (
              <QuestionStep
                question={questions[currentStep]}
                formData={formData}
                onAnswer={handleAnswer}
                onContactFieldChange={handleContactFieldChange}
                onNext={handleNext}
                onPrevious={handlePrevious}
                formatPhoneNumber={formatPhoneNumber}
                formatCurrency={formatCurrency}
                currentStep={currentStep}
                totalSteps={questions.length}
                isContactFormValid={isContactFormValid}
              />
            ) : showThankYou ? (
              <ThankYouScreen
                formData={formData}
                onClose={onClose}
              />
            ) : (
              <ResultScreen
                fitScore={fitScore}
                resultType={getResultType()}
                formData={formData}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                onShowCalendly={() => {}}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

interface QuestionStepProps {
  question: any;
  formData: FormData;
  onAnswer: (questionId: string, answer: string) => void;
  onContactFieldChange: (fieldId: string, value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  formatPhoneNumber: (value: string) => string;
  formatCurrency: (value: string) => string;
  currentStep: number;
  totalSteps: number;
  isContactFormValid: () => boolean;
}

function QuestionStep({
  question,
  formData,
  onAnswer,
  onContactFieldChange,
  onNext,
  onPrevious,
  formatPhoneNumber,
  formatCurrency,
  currentStep,
  totalSteps,
  isContactFormValid
}: QuestionStepProps) {
  const [localValue, setLocalValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchTerm, setCountrySearchTerm] = useState('');

  // Função para filtrar países baseado na busca
  const filteredCountries = countryCodes.filter(country => {
    const searchTerm = countrySearchTerm.toLowerCase().trim();
    if (!searchTerm) return true;
    
    return (
      country.country.toLowerCase().includes(searchTerm) ||
      country.code.includes(searchTerm) ||
      country.country.toLowerCase().startsWith(searchTerm) ||
      country.country.toLowerCase().split(' ').some(word => word.startsWith(searchTerm))
    );
  });

  useEffect(() => {
    // Para o campo de ticket médio, só atualiza se não estiver digitando
    if (question.id === 'averageTicket' && !isTyping) {
      const formValue = formData[question.id as keyof FormData] || '';
      setLocalValue(formValue);
    } else if (question.id !== 'averageTicket') {
      setLocalValue(formData[question.id as keyof FormData] || '');
    }
  }, [question.id, formData, isTyping]);

  // Cleanup do timeout quando o componente for desmontado
  useEffect(() => {
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isCountryDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('.country-dropdown')) {
          setIsCountryDropdownOpen(false);
          setCountrySearchTerm('');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCountryDropdownOpen]);

  const handleTextChange = (value: string) => {
    if (question.id === 'phone') {
      const formatted = formatPhoneNumber(value);
      setLocalValue(formatted);
      onContactFieldChange(question.id, formatted);
    } else if (question.id === 'averageTicket') {
      // Marca que está digitando
      setIsTyping(true);
      // Atualiza o valor local imediatamente
      setLocalValue(value);
      // Formata o valor (sem chamar onAnswer para evitar auto-avanço)
      const formatted = formatCurrency(value);
      // Atualiza o formData diretamente via onContactFieldChange (que não causa auto-avanço)
      onContactFieldChange(question.id, formatted);
      
      // Limpa o timeout anterior se existir
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
      
      // Define um novo timeout para parar de digitar após 1 segundo
      const newTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000);
      setTypingTimeout(newTimeout);
    } else {
      setLocalValue(value);
      if (question.type === 'contact') {
        onContactFieldChange(question.id, value);
      } else {
        onAnswer(question.id, value);
      }
    }
  };

  const isContactStep = question.type === 'contact';
  const canProceed = isContactStep 
    ? isContactFormValid()
    : formData[question.id as keyof FormData];

  return (
    <motion.div
      key={currentStep}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {question.title}
        </h3>
        
        {question.type === 'multiple' && (
          <div className="space-y-3">
            {question.options.map((option: any) => (
              <motion.button
                key={option.value}
                onClick={() => onAnswer(question.id, option.value)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                  formData[question.id as keyof FormData] === option.value
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        )}

        {question.type === 'text' && (
          <div className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              value={localValue}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder={question.placeholder}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
              autoFocus
              onKeyPress={(e) => {
                if (e.key === 'Enter' && localValue.trim()) {
                  if (question.id === 'averageTicket') {
                    // Para ticket médio, usa o valor formatado
                    const formatted = formatCurrency(localValue);
                    onAnswer(question.id, formatted);
                  } else {
                    onAnswer(question.id, localValue);
                  }
                }
              }}
            />
            {localValue.trim() && (
              <Button
                onClick={() => {
                  if (question.id === 'averageTicket') {
                    // Para ticket médio, usa o valor formatado
                    const formatted = formatCurrency(localValue);
                    onAnswer(question.id, formatted);
                  } else {
                    onAnswer(question.id, localValue);
                  }
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Continuar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        )}

        {question.type === 'contact' && (
          <div className="max-w-md mx-auto space-y-4">
            {question.fields.map((field: any) => {
              if (field.id === 'phone') {
                // Renderização especial para o campo de telefone com dropdown de país
                const phoneNumber = formData.phoneNumber || '';
                const phoneCountry = formData.phoneCountry || '+55';
                const isValid = validatePhone(phoneNumber);
                const showError = phoneNumber !== '' && !isValid;
                
                const handleCountrySelect = (countryCode: string) => {
                  onContactFieldChange('phoneCountry', countryCode);
                  setIsCountryDropdownOpen(false);
                  setCountrySearchTerm('');
                };
                
                const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                  const newValue = e.target.value;
                  const formatted = formatPhoneNumber(newValue);
                  onContactFieldChange('phoneNumber', formatted);
                  // Atualiza também o campo phone completo para compatibilidade
                  onContactFieldChange('phone', `${phoneCountry} ${formatted}`);
                };
                
                return (
                  <div key={field.id}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label} {field.required && '*'}
                    </label>
                    <div className="flex gap-2">
                      <div className="relative country-dropdown">
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          className="flex items-center gap-2 p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white min-w-[120px]"
                        >
                          <span className="text-lg">
                            {countryCodes.find(c => c.code === phoneCountry)?.flag || '🏳️'}
                          </span>
                          <span className="font-medium">
                            {phoneCountry}
                          </span>
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        </button>
                        
                        {isCountryDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-hidden">
                            <div className="p-2 border-b border-gray-100">
                              <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                  type="text"
                                  placeholder="Buscar país..."
                                  value={countrySearchTerm}
                                  onChange={(e) => setCountrySearchTerm(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' && filteredCountries.length > 0) {
                                      handleCountrySelect(filteredCountries[0].code);
                                    } else if (e.key === 'Escape') {
                                      setIsCountryDropdownOpen(false);
                                      setCountrySearchTerm('');
                                    }
                                  }}
                                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 text-sm"
                                  autoFocus
                                />
                              </div>
                            </div>
                            <div className="max-h-48 overflow-y-auto">
                              {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => (
                                  <button
                                    key={`${country.code}-${country.country}`}
                                    type="button"
                                    onClick={() => handleCountrySelect(country.code)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors ${
                                      country.code === phoneCountry ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                    }`}
                                  >
                                    <span className="text-lg">{country.flag}</span>
                                    <div className="flex-1 min-w-0">
                                      <div className="font-medium text-sm">{country.country}</div>
                                      <div className="text-xs text-gray-500">{country.code}</div>
                                    </div>
                                  </button>
                                ))
                              ) : (
                                <div className="px-3 py-2 text-gray-500 text-sm">
                                  Nenhum país encontrado
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder="(11) 99999-9999"
                        className={`flex-1 p-3 border-2 rounded-lg focus:outline-none transition-colors ${
                          showError 
                            ? 'border-red-500 focus:border-red-500' 
                            : isValid 
                            ? 'border-green-500 focus:border-green-500' 
                            : 'border-gray-200 focus:border-blue-500'
                        }`}
                        required={field.required}
                      />
                    </div>
                    {showError && (
                      <p className="text-red-500 text-sm mt-1">
                        Telefone inválido
                      </p>
                    )}
                  </div>
                );
              } else {
                // Renderização normal para outros campos
                const value = formData[field.id as keyof FormData] || '';
                const isValid = field.id === 'email' 
                  ? validateEmail(value) 
                  : value.trim() !== '';
                const showError = value !== '' && !isValid;
                
                const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                  const newValue = e.target.value;
                  onContactFieldChange(field.id, newValue);
                };
                
                return (
                  <div key={field.id}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label} {field.required && '*'}
                    </label>
                    <input
                      type={field.type}
                      value={value}
                      onChange={handleFieldChange}
                      placeholder={field.type === 'url' ? 'https://suaempresa.com.br' : ''}
                      className={`w-full p-3 border-2 rounded-lg focus:outline-none transition-colors ${
                        showError 
                          ? 'border-red-500 focus:border-red-500' 
                          : isValid 
                          ? 'border-green-500 focus:border-green-500' 
                          : 'border-gray-200 focus:border-blue-500'
                      }`}
                      required={field.required}
                    />
                    {showError && (
                      <p className="text-red-500 text-sm mt-1">
                        {field.id === 'email' ? 'Email inválido' : 'Campo obrigatório'}
                      </p>
                    )}
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6">
        <Button
          variant="ghost"
          onClick={onPrevious}
          disabled={currentStep === 0}
          className="flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Anterior
        </Button>

        {isContactStep && (
          <Button
            onClick={onNext}
            disabled={!canProceed}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            Finalizar
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </motion.div>
  );
}

interface ResultScreenProps {
  fitScore: number;
  resultType: 'perfect' | 'medium' | 'low';
  formData: FormData;
  onSubmit: () => void;
  isSubmitting: boolean;
  onShowCalendly: () => void;
}

function ResultScreen({ fitScore, resultType, formData, onSubmit, isSubmitting, onShowCalendly }: ResultScreenProps) {
  const getResultContent = () => {
    switch (resultType) {
      case 'perfect':
        return {
          title: 'Perfeito! Você tem tudo pra gerar 100+ reuniões/mês.',
          description: `${formData.name}, com base nas suas respostas:`,
          points: [
            `Modelo: B2B consultivo ✅`,
            `Dor: ${getPainLabel(formData.mainPain)} ✅`,
            `Time: ${getTeamSizeLabel(formData.teamSize)} pessoas ✅`,
            `Meta: ${getMeetingGoalLabel(formData.meetingGoal)}/mês ✅`
          ],
          cta: 'Escolher horário',
          ctaSecondary: 'Prefiro receber por WhatsApp',
          showCalendar: true
        };
      
      case 'medium':
        return {
          title: 'Você pode ter resultados, mas com alguns ajustes.',
          description: `${formData.name}, sua operação tem potencial, mas identificamos que pode impactar os resultados.`,
          points: [
            'Recomendação: Agende 15 min com nosso especialista',
            'Entender se o momento é ideal pra você',
            'Quais ajustes fazer antes (se necessário)',
            'Timeline realista pro seu cenário'
          ],
          cta: 'Falar com especialista',
          ctaSecondary: 'Enviar materiais por email',
          showCalendar: true
        };
      
      case 'low':
        return {
          title: 'A Prime SDR ainda não é ideal pro seu momento.',
          description: `${formData.name}, com base no seu perfil, recomendamos focar em estruturar sua operação antes de investir em prospecção automatizada.`,
          points: [
            'Baixe nosso guia gratuito:',
            '"7 Passos pra Estruturar Prospecção B2B do Zero"',
            'Inclui: Como definir ICP, Templates de mensagens',
            'Checklist de LinkedIn, Métricas pra acompanhar'
          ],
          cta: 'Baixar guia grátis',
          ctaSecondary: 'Me avise quando estiver pronto',
          showCalendar: false
        };
    }
  };

  const getPainLabel = (pain: string) => {
    const labels: { [key: string]: string } = {
      'leads-desqualificados': 'Leads desqualificados',
      'nao-acesso-decisores': 'Não acessar decisores',
      'time-sem-tempo': 'Time sem tempo',
      'dependencia-midia-paga': 'Dependência de mídia paga'
    };
    return labels[pain] || pain;
  };

  const getTeamSizeLabel = (size: string) => {
    const labels: { [key: string]: string } = {
      '1-3': '1-3',
      '4-10': '4-10',
      '11-25': '11-25',
      '26+': '26+'
    };
    return labels[size] || size;
  };

  const getMeetingGoalLabel = (goal: string) => {
    const labels: { [key: string]: string } = {
      '20-50': '20-50',
      '50-100': '50-100',
      '100-200': '100-200',
      '200+': '200+'
    };
    return labels[goal] || goal;
  };

  const content = getResultContent();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-8"
    >
      <div className="space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900">
          {content.title}
        </h3>
        
        <p className="text-gray-600 text-lg">
          {content.description}
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 space-y-3">
        {content.points.map((point, index) => (
          <div key={index} className="flex items-start text-left">
            <span className="text-blue-500 mr-3 mt-1">•</span>
            <span className="text-gray-700">{point}</span>
          </div>
        ))}
      </div>

      {content.showCalendar && (
        <div className="bg-blue-50 rounded-xl p-6">
          <h4 className="font-semibold text-blue-900 mb-4">
            Próximo passo: Agende 15 minutos com nosso especialista
          </h4>
          <p className="text-blue-700 mb-4">
            Vamos te mostrar como replicar casos de 112 reuniões em 45 dias
          </p>
          
          {/* Calendly Embed Placeholder */}
          <div className="bg-white rounded-lg p-4 border-2 border-dashed border-blue-300">
            <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-blue-600 font-medium">Calendly Widget</p>
            <p className="text-sm text-gray-500">Integração com Google Calendar</p>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={content.showCalendar ? onShowCalendly : onSubmit}
          disabled={isSubmitting}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Processando...
            </>
          ) : (
            <>
              {content.showCalendar ? <Calendar className="w-5 h-5 mr-2" /> : <Download className="w-5 h-5 mr-2" />}
              {content.cta}
            </>
          )}
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="px-8"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          {content.ctaSecondary}
        </Button>
      </div>

      <div className="text-sm text-gray-500">
        Score de compatibilidade: <span className="font-semibold text-blue-600">{fitScore}%</span>
      </div>
    </motion.div>
  );
}
