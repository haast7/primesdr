'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { 
  Settings, 
  Users, 
  Zap, 
  Bell, 
  CheckCircle, 
  Shield,
  TrendingUp,
  Calendar,
  Slack
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

export function ActivationStep() {
  const connectionSteps = [
    {
      icon: Users,
      title: 'Conexão de Perfis LinkedIn',
      description: 'Você conecta os perfis LinkedIn que vão rodar as campanhas',
      details: [
        'Mínimo: 1 perfil',
        'Ideal: 3-6 perfis (mais escala)',
        'Máximo: Ilimitado (plano Scale)'
      ],
      security: [
        'Login seguro via OAuth (não armazenamos senha)',
        'Cookies criptografados',
        'Acesso limitado apenas ao necessário'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Aquecimento Automático',
      description: 'Perfis novos ou inativos passam por aquecimento',
      details: [
        'Semana 1: 10-15 convites/dia',
        'Semana 2: 20-25 convites/dia',
        'Semana 3+: 35-40 convites/dia (limite pleno)'
      ],
      note: 'LinkedIn detecta mudanças bruscas de comportamento. Aquecimento evita ban.'
    },
    {
      icon: Settings,
      title: 'Integração com CRM',
      description: 'Conectamos com seu CRM favorito',
      details: [
        'HubSpot: Leads vão direto pra pipeline',
        'Pipedrive: Deals criados automaticamente',
        'RD Station: Contatos sincronizados',
        'Slack: Notificações em tempo real',
        'Google Calendar: Reuniões agendadas aparecem automaticamente'
      ]
    },
    {
      icon: Bell,
      title: 'Configuração de Notificações',
      description: 'Você escolhe como ser avisado',
      details: [
        'Email quando lead responde',
        'WhatsApp/Slack para respostas quentes',
        'Relatório semanal de performance'
      ]
    }
  ];

  return (
    <Section background="white" padding="lg" id="ativacao">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div 
            variants={fadeInUp} 
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
              <Settings className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Etapa 2: Ativação (Dias 7-10)
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Conectamos tudo com segurança
            </p>
          </motion.div>

          {/* Connection Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {connectionSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                  <div className="p-8">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Security Info */}
                    {step.security && (
                      <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-800">Segurança</span>
                        </div>
                        <ul className="space-y-1">
                          {step.security.map((security, securityIndex) => (
                            <li key={securityIndex} className="text-xs text-green-700">• {security}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Note */}
                    {step.note && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-800 italic">{step.note}</p>
                      </div>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Resultado da Ativação
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Em 3 dias você tem tudo conectado, aquecido e pronto para gerar reuniões.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Perfis Conectados</h4>
                  <p className="text-sm text-gray-600">Seguros e aquecidos</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Settings className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">CRM Integrado</h4>
                  <p className="text-sm text-gray-600">Leads automáticos</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Bell className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Notificações Ativas</h4>
                  <p className="text-sm text-gray-600">Tempo real</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}









