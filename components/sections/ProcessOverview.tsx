'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Target, Settings, Rocket, BarChart3, ArrowRight } from 'lucide-react';

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

export function ProcessOverview() {
  const timeline = [
    {
      icon: Target,
      title: 'Configuração',
      subtitle: 'Dias 1-7',
      description: 'Definimos sua estratégia de prospecção, ICP, campanhas e sequências personalizadas.',
      color: 'blue',
      features: [
        'Kickoff estratégico (60 min)',
        'Escolha do tipo de campanha',
        'Definição de público-alvo',
        'Construção da sequência'
      ]
    },
    {
      icon: Settings,
      title: 'Ativação',
      subtitle: 'Dias 7-10',
      description: 'Conectamos tudo com segurança: perfis LinkedIn, aquecimento automático e integração CRM.',
      color: 'green',
      features: [
        'Conexão de perfis LinkedIn',
        'Aquecimento automático',
        'Integração com CRM',
        'Configuração de notificações'
      ]
    },
    {
      icon: Rocket,
      title: 'Execução 24/7',
      subtitle: 'Contínuo',
      description: 'Automação roda, SDR fecha. Sistema detecta respostas e SDR humano qualifica e agenda.',
      color: 'purple',
      features: [
        'Automação enviando convites',
        'IA personalizando mensagens',
        'SDR qualificando leads',
        'Reuniões no seu calendário'
      ]
    },
    {
      icon: BarChart3,
      title: 'Otimização',
      subtitle: 'Semanal',
      description: 'Testamos, ajustamos, melhoramos. Reuniões semanais de review e refinamento contínuo.',
      color: 'orange',
      features: [
        'Reunião de review (30 min)',
        'Testes A/B constantes',
        'Relatórios automatizados',
        'Otimizações contínuas'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        light: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-200',
        gradient: 'from-blue-500 to-blue-600'
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200',
        gradient: 'from-green-500 to-green-600'
      },
      purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-200',
        gradient: 'from-purple-500 to-purple-600'
      },
      orange: {
        bg: 'bg-orange-500',
        light: 'bg-orange-50',
        text: 'text-orange-700',
        border: 'border-orange-200',
        gradient: 'from-orange-500 to-orange-600'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <Section background="white" padding="lg">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como funciona na prática
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Timeline visual com 4 etapas principais que transformam seu LinkedIn em um motor de reuniões previsíveis
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200 transform -translate-y-1/2 z-0">
              <motion.div
                className="absolute top-1/2 left-0 h-2 w-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transform -translate-y-1/2"
                animate={{ 
                  x: ['0%', '100%'],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {timeline.map((step, index) => {
                const colors = getColorClasses(step.color);
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    <Card className="h-full bg-white border-2 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                      {/* Step Number */}
                      <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${colors.gradient} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg z-10`}>
                        {index + 1}
                      </div>

                      <div className="p-6 pt-8">
                        {/* Icon */}
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-r ${colors.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <step.icon className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Content */}
                        <div className="mb-6">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                            <span className={`px-3 py-1 ${colors.light} rounded-lg`}>
                              <span className={`text-sm font-bold ${colors.text}`}>
                                {step.subtitle}
                              </span>
                            </span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-2">
                          {step.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}></div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 via-green-50 via-purple-50 to-orange-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Resultado Final
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Em 7 dias você tem tudo configurado. Em 30 dias, reuniões consistentes. Em 90 dias, pipeline robusto.
              </p>
              <div className="flex items-center justify-center space-x-2 text-blue-600 font-semibold">
                <span>Veja cada etapa em detalhes</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}


