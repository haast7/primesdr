'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ContactButton } from '@/components/ui/ContactButton';
import { 
  Mail, 
  MessageCircle, 
  Calendar, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  ArrowRight
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@primesdr.com?subject=Interesse no Prime SDR&body=Olá! Gostaria de saber mais sobre o Prime SDR.';
  };

  const handleWhatsAppClick = () => {
    window.open('https://w.app/primesdr?text=Olá! Gostaria de saber mais sobre o Prime SDR.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Entre em Contato
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-primary-100 leading-relaxed mb-8"
            >
              Estamos aqui para ajudar você a transformar seu LinkedIn em uma máquina de vendas.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Escolha a melhor forma de contato
              </h2>
              <p className="text-xl text-gray-600">
                Nossa equipe está pronta para te ajudar
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Email Card */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    E-mail
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Resposta em até 24 horas
                  </p>
                  
                  <button
                    onClick={handleEmailClick}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar e-mail</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Card>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    WhatsApp
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Fale direto com especialista
                  </p>
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chamar no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Card>
              </motion.div>

              {/* Schedule Call Card */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-purple-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Agendar Call
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Reunião de 45 minutos
                  </p>
                  
                  <ContactButton
                    source="contact-schedule-call"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Agendar agora</span>
                    <ArrowRight className="w-4 h-4" />
                  </ContactButton>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Info */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Informações de Contato
              </h2>
              <p className="text-xl text-gray-600">
                Estamos sempre disponíveis para ajudar
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      E-mail
                    </h3>
                    <p className="text-gray-600">contato@primesdr.com</p>
                    <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600">+55 11 93200-1771</p>
                    <p className="text-sm text-gray-500">Atendimento imediato</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Horário de Atendimento
                    </h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-sm text-gray-500">Horário de Brasília</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Localização
                    </h3>
                    <p className="text-gray-600">São Paulo, SP</p>
                    <p className="text-sm text-gray-500">Brasil</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Por que escolher a Prime SDR?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Automação inteligente do LinkedIn</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>SDR humano especializado</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Resultados garantidos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Suporte dedicado</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}