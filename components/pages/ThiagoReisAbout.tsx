'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Linkedin, Zap, Users, Target, TrendingUp, Shield } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const features = [
  {
    icon: Linkedin,
    title: 'Automação Inteligente',
    description: 'Sistema que identifica e conecta com seus prospects ideais no LinkedIn automaticamente.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Users,
    title: 'Cadência Inteligente',
    description: 'Sequências de mensagens personalizadas e estratégicas que geram conexões e respostas qualificadas no LinkedIn.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Target,
    title: 'Segmentação Precisa',
    description: 'Encontramos os decisores certos baseado no seu ICP (Ideal Customer Profile).',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Zap,
    title: 'Velocidade de Execução',
    description: 'Resultados em 30 dias. Conexões e respostas geradas enquanto você foca no que importa.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: TrendingUp,
    title: 'Pipeline Previsível',
    description: 'Geração constante de oportunidades qualificadas para seu time comercial.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Shield,
    title: 'Garantia Total',
    description: '90 dias de garantia. Se não gerar resultados, devolvemos 100% do investimento.',
    color: 'from-indigo-500 to-indigo-600'
  }
];

export function ThiagoReisAbout() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              O Que É o <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Prime SDR</span>?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Transformamos LinkedIn em motor de receita previsível para empresas B2B. 
              <span className="block mt-4 font-semibold text-gray-900">
                Automação inteligente + cadência de mensagens personalizadas = resultados garantidos.
              </span>
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar Seu LinkedIn?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a centenas de empresas que já estão gerando resultados com o Prime SDR
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
