'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  Users, 
  AlertTriangle,
  Zap,
  Pause
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

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Limites Respeitados',
      description: 'Máximo 30-40 convites/dia (LinkedIn permite até 100, mas não é seguro)',
      details: [
        'Intervalos randomizados (não parece robô)',
        'Horário comercial (9h-18h, dias úteis)'
      ]
    },
    {
      icon: Users,
      title: 'Comportamento Humano',
      description: 'Variação de cadência (não envia tudo no mesmo horário)',
      details: [
        'Pausas naturais (simula almoço, reuniões)',
        'Ações mistas (curtir, ver perfil, conectar, mensagem)'
      ]
    },
    {
      icon: Zap,
      title: 'Aquecimento Obrigatório',
      description: 'Perfis novos começam devagar',
      details: [
        'Aumento gradual até limite seguro',
        'Monitoramento contínuo de sinais de alerta'
      ]
    },
    {
      icon: Pause,
      title: 'Pausa Automática',
      description: 'Lead respondeu? Automação para imediatamente',
      details: [
        'LinkedIn enviou aviso? Sistema pausa por 48h',
        'Taxa de aceitação caiu? Reduz volume automaticamente'
      ]
    }
  ];

  const safetyStats = [
    { label: 'Anos operando', value: '2+', icon: Clock },
    { label: 'Bans registrados', value: '0', icon: Shield },
    { label: 'Perfis protegidos', value: '1000+', icon: Users },
    { label: 'Taxa de segurança', value: '100%', icon: CheckCircle }
  ];

  return (
    <Section background="gray" padding="lg" id="seguranca">
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
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Segurança e Compliance
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Como garantimos zero risco de ban
            </p>
          </motion.div>

          {/* Safety Stats */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {safetyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-white rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Security Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-green-200 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                  <div className="p-8">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Result */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Resultado</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Operamos há <span className="font-bold text-green-600">2+ anos sem um único ban</span>
              </p>
              <div className="flex items-center justify-center space-x-2 text-green-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>100% de segurança garantida</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}


