'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from '@/components/ui/ContactButton';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Linkedin, Brain, UserCheck, Shield, Zap, Target, BarChart3 } from 'lucide-react';
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

export function Differentiators() {

  const differentiators = [
    {
      icon: Linkedin,
      title: 'LinkedIn-first de verdade',
      description: 'Não é "mais um CRM com integração". Fomos desenhados 100% pro LinkedIn: limites seguros, aquecimento automático, cadências corretas. Zero risco de ban.',
      features: ['Limites seguros respeitados', 'Aquecimento automático', 'Cadências otimizadas', 'Zero risco de ban'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Brain,
      title: 'Você monta. A gente executa.',
      description: 'Você cria a cadência ideal ou usa nossos templates testados, define timing e ações, e nossa automação roda com precisão. Lead respondeu? Pausa automática e SDR humano assume.',
      features: ['Mensagens personalizadas por cargo', 'Sequência adaptada por setor', 'Quando solicitar conexão ou curtir posts', 'Dias e horários de cada disparo'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: UserCheck,
      title: 'SDR humano que fecha',
      description: 'Lead respondeu? SDR real assume em tempo real, qualifica e agenda. Nada de deixar esfriar. Nada de bot respondendo.',
      features: ['Resposta em tempo real', 'Qualificação humana', 'Agendamento direto', 'Sem bots'],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: BarChart3,
      title: 'Você no controle. Sempre.',
      description: 'Pare de mandar mensagem no escuro sem saber o que funciona.',
      features: ['Dashboard em tempo real', 'Testes A/B automatizados', 'Métricas que importam (não vaidade)', 'Decisões baseadas em dados'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const results = [
    {
      icon: Target,
      title: 'Sua agenda enche',
      description: 'Previsível. Escalável. Sem você mexer um dedo.'
    },
    {
      icon: Zap,
      title: 'Operação 24/7',
      description: 'Automação inteligente + SDR humano sempre disponível.'
    },
    {
      icon: Shield,
      title: 'Garantia total',
      description: '90 dias de teste. Sem ROI? Reembolso integral.'
    }
  ];

  return (
    <Section background="gray" padding="lg">
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
            <h2 className="text-display font-bold text-gray-900 mb-6">
              Os diferenciais que ninguém mais tem
            </h2>
            <p className="text-body text-gray-600 leading-relaxed">
              Por que só a Prime SDR consegue resultados consistentes e escaláveis no LinkedIn
            </p>
          </motion.div>

          {/* Differentiators Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      
                      {/* Features */}
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Results Section */}
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Automação para linkedin focada em resultados.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <motion.div
                  key={result.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <result.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{result.title}</h4>
                  <p className="text-gray-600">{result.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="relative inline-block">
              {/* Efeito de brilho pulsante */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-75 animate-pulse"></div>
              
              
              {/* Botão principal */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ContactButton
                  source="differentiators-cta"
                  className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 group overflow-hidden"
                >
                  {/* Efeito de brilho interno */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Conteúdo do botão */}
                  <span className="relative flex items-center justify-center">
                    <span className="mr-3">🚀</span>
                    Agendar demonstração (15 min)
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </ContactButton>
              </motion.div>
              
              {/* Texto de urgência */}
              <motion.div 
                className="mt-3 text-sm text-gray-600 font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡ Vagas limitadas esta semana
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

