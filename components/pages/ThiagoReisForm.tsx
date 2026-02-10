'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { sendToWebhook, formatPhoneForWebhook, getCurrentDateTime } from '@/lib/webhook';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export function ThiagoReisForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const numbers = phone.replace(/\D/g, '');
    return numbers.length >= 10 && numbers.length <= 15;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name as keyof FormData]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Telefone inválido';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Empresa é obrigatória';
    }
    
    if (!formData.role.trim()) {
      newErrors.role = 'Cargo é obrigatório';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar para RD Station
      try {
        await fetch('/api/rd-station/lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formData: { ...formData },
            formSource: 'ThiagoReisLandingPage',
            formIdentifier: 'thiagoreis-event-form',
            tags: ['evento', 'thiago-reis', 'landing-page', 'evento-presencial']
          }),
        });
      } catch (error) {
        console.error('Erro ao enviar para RD Station:', error);
      }

      // Enviar para webhook do Make.com
      try {
        const { data, horario } = getCurrentDateTime();
        const phoneFormatted = formatPhoneForWebhook(formData.phone);
        const webhookData = {
          nome: formData.name,
          email: formData.email,
          whatsapp: phoneFormatted,
          empresa: formData.company,
          cargo: formData.role,
          dominio: formData.email.split('@')[1] || '',
          data_entrada: data,
          horario_entrada: horario,
          fonte: 'Evento Thiago Reis - 11/02',
          form_id: 'thiagoreis-event-form',
        };

        await sendToWebhook(webhookData);
      } catch (error) {
        console.error('Erro ao enviar webhook:', error);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="thiagoreis-form" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Formulário Enviado com Sucesso!
            </h2>
            <p className="text-xl text-gray-600">
              Nossa equipe entrará em contato em breve para garantir sua vaga no evento.
            </p>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section id="thiagoreis-form" className="py-20 bg-white">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Garanta seu desconto,
            </h2>
            <p className="text-xl text-gray-600">
              é só preencher o formulário abaixo e começar a vender!
            </p>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-2xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                } focus:border-blue-500 focus:outline-none transition-colors text-gray-900`}
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                } focus:border-blue-500 focus:outline-none transition-colors text-gray-900`}
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  errors.phone ? 'border-red-500' : 'border-gray-200'
                } focus:border-blue-500 focus:outline-none transition-colors text-gray-900`}
                placeholder="(11) 99999-9999"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                Empresa *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  errors.company ? 'border-red-500' : 'border-gray-200'
                } focus:border-blue-500 focus:outline-none transition-colors text-gray-900`}
                placeholder="Nome da sua empresa"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-500">{errors.company}</p>
              )}
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                Cargo *
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  errors.role ? 'border-red-500' : 'border-gray-200'
                } focus:border-blue-500 focus:outline-none transition-colors text-gray-900`}
                placeholder="Seu cargo atual"
              />
              {errors.role && (
                <p className="mt-1 text-sm text-red-500">{errors.role}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Garantir meu acesso
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            <p className="text-sm text-gray-500 text-center">
              Ao preencher, você concorda em receber comunicações do Prime SDR.
            </p>
          </motion.form>
        </motion.div>
      </Container>
    </section>
  );
}
