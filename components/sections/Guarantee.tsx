'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Shield, Target, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';

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

export function Guarantee() {
  const handleCTAClick = () => {
    trackEvent('cta_click', {
      cta_type: 'guarantee',
      cta_location: 'guarantee_section',
      cta_text: 'Começar teste de 30 dias'
    });
  };

  const guaranteeSteps = [
    {
      icon: Target,
      title: 'Definimos as metas no kickoff',
      description: 'Ex: 400 MQLs ou X reuniões/mês',
      step: '1'
    },
    {
      icon: Clock,
      title: 'Rodamos a operação por 30 dias',
      description: 'Automação + SDR humano trabalhando',
      step: '2'
    },
    {
      icon: CheckCircle,
      title: 'Não bateu? Reembolso integral',
      description: 'Sem letra miúda. Sem "depende"',
      step: '3'
    }
  ];

  const transparencyFeatures = [
    'Transparência total via dashboard',
    'Métricas em tempo real',
    'Relatórios semanais',
    'Acesso completo aos dados'
  ];

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
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Garantia Brutal
            </div>
            <h2 className="text-display font-bold text-gray-900 mb-6">
              Teste 30 dias. Se não tiver ROI, você não paga nada.
            </h2>
            <p className="text-body text-gray-600 leading-relaxed">
              Por que fazemos isso? Porque sabemos que funciona. E se não funcionar pra você, 
              não merecemos seu dinheiro.
            </p>
          </motion.div>

          {/* Guarantee Process */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guaranteeSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full text-center relative overflow-hidden">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </Card>

                {/* Connector Line */}
                {index < guaranteeSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-primary-400 absolute -right-2 -top-1.5" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Transparency Section */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Transparência total via dashboard</h3>
                      <p className="text-gray-600">Acompanhe tudo em tempo real</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {transparencyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  {/* Dashboard Mockup */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary-600 rounded-lg"></div>
                          <div>
                            <div className="h-3 w-24 bg-gray-200 rounded"></div>
                            <div className="h-2 w-16 bg-gray-100 rounded mt-1"></div>
                          </div>
                        </div>
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-primary-600">89</div>
                          <div className="text-xs text-gray-600">Reuniões</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-green-600">23%</div>
                          <div className="text-xs text-gray-600">Taxa</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Meta: 100 reuniões</span>
                          <span>89%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="relative inline-block">
              {/* Efeito de brilho pulsante */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl blur opacity-75 animate-pulse"></div>
              
              {/* Botão principal */}
              <motion.button
                onClick={handleCTAClick}
                className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/50 group overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Efeito de brilho interno */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Conteúdo do botão */}
                <span className="relative flex items-center justify-center">
                  <span className="mr-3">🚀</span>
                  Começar teste de 30 dias
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

