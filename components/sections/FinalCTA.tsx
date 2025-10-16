'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle, 
  Eye, 
  MessageSquare, 
  BarChart3,
  Users,
  Zap,
  Sparkles,
  TrendingUp,
  Clock,
  Target,
  Star,
  Award,
  Shield
} from 'lucide-react';
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

export function FinalCTA() {
  const handleCTAClick = () => {
    trackEvent('cta_click', {
      cta_type: 'schedule_demo',
      cta_location: 'how_it_works_final',
      cta_text: 'Agendar demonstração'
    });
  };

  const handleSecondaryCTAClick = () => {
    trackEvent('cta_click', {
      cta_type: 'view_cases',
      cta_location: 'how_it_works_final',
      cta_text: 'Ver casos de sucesso'
    });
  };

  const demoFeatures = [
    {
      icon: Eye,
      title: 'Interface completa em funcionamento',
      description: 'Veja o dashboard real com métricas ao vivo',
      highlight: 'Tempo real'
    },
    {
      icon: MessageSquare,
      title: 'Como criar uma campanha do zero',
      description: 'Processo completo de configuração passo a passo',
      highlight: 'Passo a passo'
    },
    {
      icon: BarChart3,
      title: 'Exemplos de mensagens que convertem',
      description: 'Templates testados e otimizados por segmento',
      highlight: 'Comprovado'
    },
    {
      icon: Users,
      title: 'Dashboard com métricas reais',
      description: 'Dados reais de clientes (anônimos)',
      highlight: 'Dados reais'
    },
    {
      icon: Zap,
      title: 'Calculadora de ROI com seus números',
      description: 'Projeção personalizada para seu negócio',
      highlight: 'Personalizado'
    }
  ];

  const finalStats = [
    { number: '2.000+', label: 'Perfis ativos', icon: Users, color: 'from-blue-500 to-blue-600' },
    { number: '112', label: 'Reuniões em 45 dias', icon: Calendar, color: 'from-green-500 to-green-600' },
    { number: '39%', label: 'Taxa de aceitação', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
    { number: '0', label: 'Bans em 2+ anos', icon: Shield, color: 'from-orange-500 to-orange-600' }
  ];

  const guarantees = [
    { icon: CheckCircle, text: 'Demonstração gratuita', highlight: 'Sem custo' },
    { icon: Clock, text: 'Sem compromisso', highlight: 'Flexível' },
    { icon: Target, text: 'Resultados em 7 dias', highlight: 'Rápido' },
    { icon: Award, text: 'Garantia de 30 dias', highlight: 'Seguro' }
  ];

  return (
    <Section background="gradient" padding="xl" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            variants={fadeInUp} 
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 mr-2" />
              Pronto para Começar?
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Transforme seu LinkedIn em um{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                motor de reuniões
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-5xl mx-auto">
              Veja a Prime SDR funcionando ao vivo em uma demonstração de 15 minutos.
            </p>
          </motion.div>

          {/* Final Stats */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto"
          >
            {finalStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Demo Features */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Na demo, você vai ver:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demoFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white mb-3">
                      {feature.highlight}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {/* Primary CTA */}
              <motion.button
                onClick={handleCTAClick}
                className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold text-xl px-20 py-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 group overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Efeito de brilho interno */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Conteúdo do botão */}
                <span className="relative flex items-center justify-center">
                  <span className="mr-3 text-2xl">🚀</span>
                  Agendar demonstração (15 min)
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                onClick={handleSecondaryCTAClick}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-12 py-6 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="w-5 h-5 mr-2 inline" />
                Ver casos de sucesso
              </motion.button>
            </div>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
          >
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-4 text-white/90 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <guarantee.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{guarantee.text}</div>
                  <div className="text-sm text-white/70">{guarantee.highlight}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Message */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Da configuração a resultados em apenas 7 dias</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Junte-se a mais de <span className="font-bold text-yellow-400">2.000 perfis LinkedIn</span> que já transformaram sua prospecção em um motor de reuniões previsíveis e escaláveis.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}