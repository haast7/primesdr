'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ContactButton } from '@/components/ui/ContactButton';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Target, Settings, Rocket, BarChart3, Clock, CheckCircle, Send, Users, MessageSquare, Bell, Calendar, Zap, Brain, TrendingUp } from 'lucide-react';
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

export function HowItWorks() {
  const handleCTAClick = () => {
    trackEvent('cta_click', {
      cta_type: 'how_it_works',
      cta_location: 'how_it_works_section',
      cta_text: 'Ver demonstração'
    });
  };

  const timeline = [
    {
      icon: Target,
      title: 'Kickoff (Dia 1–7)',
      subtitle: 'Entendemos seu negócio a fundo',
      description: 'Reunião de 60 min com você para mapear ICP, definir metas e criar mensagens personalizadas.',
      deliverables: [
        'Documento de ICP validado',
        '3–4 listas segmentadas (1.000+ prospects cada)',
        'Sequências de mensagens prontas (A/B test)',
        'Cronograma dos primeiros 90 dias'
      ],
      color: 'blue'
    },
    {
      icon: Settings,
      title: 'Setup Técnico (Dia 7–10)',
      subtitle: 'Conectamos tudo com segurança',
      description: 'Conectamos perfis LinkedIn, ativamos aquecimento automático e integramos com seu CRM.',
      deliverables: [
        'Perfis conectados e aquecidos',
        'Integração CRM ativa',
        'Dashboard de métricas configurado',
        'Notificações (Slack, e-mail) ativas'
      ],
      color: 'green'
    },
    {
      icon: Rocket,
      title: 'Go-live (Dia 10+)',
      subtitle: 'Automação roda 24/7. SDR entra quando lead responde',
      description: 'Sistema detecta respostas positivas em tempo real e SDR humano qualifica e agenda reuniões.',
      deliverables: [
        'Automação enviando convites e follow-ups',
        'IA personalizando mensagens',
        'SDR qualificando leads em tempo real',
        'Reuniões aparecendo no seu calendário'
      ],
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Otimização (Contínua)',
      subtitle: 'Testamos, ajustamos, melhoramos',
      description: 'Reuniões semanais de review, testes A/B e refinamento contínuo para maximizar resultados.',
      deliverables: [
        'Dashboard atualizado semanalmente',
        'Relatório de performance',
        'Recomendações de otimização',
        'Novos testes rodando'
      ],
      color: 'orange'
    }
  ];

  const dailyFlow = [
    { 
      time: 'D1', 
      action: 'Automação envia 120 convites', 
      detail: '3 perfis x 40/dia',
      icon: Send,
      color: 'blue',
      type: 'automation'
    },
    { 
      time: 'D3', 
      action: '49 aceitações chegam', 
      detail: 'Taxa de aceitação: 49%',
      icon: Users,
      color: 'green',
      type: 'response'
    },
    { 
      time: 'D5', 
      action: 'Mensagem pós-aceite', 
      detail: 'Via Automação',
      icon: MessageSquare,
      color: 'purple',
      type: 'automation'
    },
    { 
      time: 'D7', 
      action: '20 leads respondem', 
      detail: 'Com interesse real - 33,9% dos conectados responderam.',
      icon: Brain,
      color: 'orange',
      type: 'response'
    },
    { 
      time: 'Na hora', 
      action: 'SDR entra na conversa', 
      detail: 'Notificação instantânea',
      icon: Bell,
      color: 'red',
      type: 'human'
    },
    { 
      time: 'D10', 
      action: 'SDR agenda 8 reuniões', 
      detail: '40% dos que responderam marcaram reunião.',
      icon: Calendar,
      color: 'emerald',
      type: 'human'
    },
    { 
      time: 'Conversão', 
      action: 'Você Fecha!', 
      detail: 'A taxa de conversão é sua, mas o lead qualificaso é com a gente!',
      icon: TrendingUp,
      color: 'indigo',
      type: 'result'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-50 text-gray-600 border-gray-200';
  };

  const getFlowColorClasses = (color: string, type: string) => {
    const colorMap = {
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
      },
      red: {
        bg: 'bg-red-500',
        light: 'bg-red-50',
        text: 'text-red-700',
        border: 'border-red-200',
        gradient: 'from-red-500 to-red-600'
      },
      emerald: {
        bg: 'bg-emerald-500',
        light: 'bg-emerald-50',
        text: 'text-emerald-700',
        border: 'border-emerald-200',
        gradient: 'from-emerald-500 to-emerald-600'
      },
      indigo: {
        bg: 'bg-indigo-500',
        light: 'bg-indigo-50',
        text: 'text-indigo-700',
        border: 'border-indigo-200',
        gradient: 'from-indigo-500 to-indigo-600'
      }
    };
    
    const colors = colorMap[color as keyof typeof colorMap] || colorMap.blue;
    
    return {
      ...colors,
      typeClass: type === 'automation' ? 'border-dashed' : type === 'human' ? 'border-solid ring-2 ring-yellow-200' : 'border-solid'
    };
  };

  return (
    <>
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
              <p className="text-body text-gray-900 font-bold leading-relaxed">
                Veja exatamente como transformamos seu LinkedIn em um motor de reuniões previsíveis
              </p>
            </motion.div>

            {/* Interactive Flowchart */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Card className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-0 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 text-center">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Fluxo de Automação Inteligente
                    </h3>
                    <p className="text-blue-100 text-lg">
                      Veja na prática, como o Prime trabalha 24/7 para gerar reuniões
                    </p>
                  </div>
                </div>

                {/* Flowchart Container */}
                <div className="p-8">
                  <div className="relative">
                    {/* Flow Steps */}
                    <div className="space-y-6">
                      {dailyFlow.map((flow, index) => {
                        const colors = getFlowColorClasses(flow.color, flow.type);
                        const isEven = index % 2 === 0;
                        
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className={`relative ${isEven ? 'lg:ml-0' : 'lg:ml-16'}`}
                          >
                            {/* Connection Line */}
                            {index < dailyFlow.length - 1 && (
                              <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-gray-200 z-0">
                                <motion.div
                                  className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                  animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7]
                                  }}
                                  transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                              </div>
                            )}

                            {/* Flow Step Card */}
                            <motion.div
                              className={`relative bg-white rounded-2xl shadow-lg border-2 ${colors.typeClass} ${colors.border} overflow-hidden group hover:shadow-xl transition-all duration-300`}
                              whileHover={{ scale: 1.02, y: -5 }}
                            >
                              {/* Step Number */}
                              <div className={`absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r ${colors.gradient} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg z-10`}>
                                {index + 1}
                              </div>

                              {/* Type Badge */}
                              <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  flow.type === 'automation' ? 'bg-blue-100 text-blue-700' :
                                  flow.type === 'human' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-green-100 text-green-700'
                                }`}>
                                  {flow.type === 'automation' ? '🤖 IA' : 
                                   flow.type === 'human' ? '👤 SDR' : '📊 Resultado'}
                                </span>
                              </div>

                              <div className="p-6 pt-8">
                                <div className="flex items-start space-x-4">
                                  {/* Icon */}
                                  <motion.div
                                    className={`w-16 h-16 bg-gradient-to-r ${colors.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <flow.icon className="w-8 h-8 text-white" />
                                  </motion.div>

                                  {/* Content */}
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                      <div className={`px-3 py-1 ${colors.light} rounded-lg`}>
                                        <span className={`text-sm font-bold ${colors.text}`}>
                                          {flow.time}
                                        </span>
                                      </div>
                                    </div>
                                    
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                                      {flow.action}
                                    </h4>
                                    
                                    <p className={`text-sm ${colors.text} font-medium`}>
                                      {flow.detail}
                                    </p>
                                  </div>
                                </div>

                                {/* Progress Indicator */}
                                <div className="mt-4">
                                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                                    <span>Progresso</span>
                                    <span>{Math.round(((index + 1) / dailyFlow.length) * 100)}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <motion.div
                                      className={`h-2 bg-gradient-to-r ${colors.gradient} rounded-full`}
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${((index + 1) / dailyFlow.length) * 100}%` }}
                                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Hover Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Summary Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.6 }}
                      className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-3xl font-bold mb-2">120</div>
                        <div className="text-blue-100">Convites enviados</div>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-3xl font-bold mb-2">49</div>
                        <div className="text-green-100">Aceitações</div>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-3xl font-bold mb-2">20</div>
                        <div className="text-orange-100">Respostas</div>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-3xl font-bold mb-2">8</div>
                        <div className="text-purple-100">Reuniões agendadas</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Expected Results - Full Width Section */}
      <section className="relative overflow-hidden">
        {/* Full Width Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20"></div>
        
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="relative z-10 py-20 sm:py-24 lg:py-28"
          >
            {/* Header - No Background */}
            <div className="text-center py-16 px-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">
                Resultado Esperado
              </h3>
              <p className="text-white/80 text-xl max-w-2xl mx-auto">
                Evolução da performance ao longo do tempo
              </p>
            </div>

            {/* Timeline Cards */}
            <div className="px-8 pb-16">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Semana 1-2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:scale-105">
                      {/* Timeline Connector */}
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-white/60 hidden md:block"></div>
                      
                      <div className="text-center">
                        <motion.div 
                          className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Clock className="w-8 h-8 text-gray-700" />
                        </motion.div>
                        
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-3">Semana 1–2</h4>
                          <p className="text-gray-600 leading-relaxed">Primeiras respostas e reuniões</p>
                        </div>

                        {/* Progress Indicator */}
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                          <motion.div
                            className="h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "33%" }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                          />
                        </div>
                        <p className="text-sm text-gray-500 font-medium">33% do processo</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Semana 3-6 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:scale-105">
                      {/* Timeline Connector */}
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-white/60 hidden md:block"></div>
                      
                      <div className="text-center">
                        <motion.div 
                          className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-8 h-8 text-gray-700" />
                        </motion.div>
                        
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-3">Semana 3–6</h4>
                          <p className="text-gray-600 leading-relaxed">Ritmo estável (20–30 reuniões/mês por perfil ativo)</p>
                        </div>

                        {/* Progress Indicator */}
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                          <motion.div
                            className="h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "66%" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                          />
                        </div>
                        <p className="text-sm text-gray-500 font-medium">66% do processo</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mês 2-3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:scale-105">
                      <div className="text-center">
                        <motion.div 
                          className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Rocket className="w-8 h-8 text-gray-700" />
                        </motion.div>
                        
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-3">Mês 2–3</h4>
                          <p className="text-gray-600 leading-relaxed">Escala e otimização (80–120 reuniões/mês no Growth)</p>
                        </div>

                        {/* Progress Indicator */}
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                          <motion.div
                            className="h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                          />
                        </div>
                        <p className="text-sm text-gray-500 font-medium">100% do processo</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Summary Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-xl">
                    <div className="text-3xl font-bold text-gray-900 mb-2">20-30</div>
                    <div className="text-gray-600 text-sm">Reuniões/mês inicial</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-xl">
                    <div className="text-3xl font-bold text-gray-900 mb-2">50-80</div>
                    <div className="text-gray-600 text-sm">Reuniões/mês estável</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-xl">
                    <div className="text-3xl font-bold text-gray-900 mb-2">80-120</div>
                    <div className="text-gray-600 text-sm">Reuniões/mês otimizado</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <Section background="white" padding="lg">
        <Container>
          <motion.div 
            variants={fadeInUp} 
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative inline-block"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-30 scale-110"></div>
              
              <ContactButton
                source="how-it-works-cta"
                className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold text-lg px-12 py-4 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 group overflow-hidden"
              >
                {/* Efeito de brilho interno */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Conteúdo do botão */}
                <span className="relative flex items-center justify-center">
                  <span className="mr-3">🚀</span>
                  Ver demonstração
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </ContactButton>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Demonstração gratuita</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Resultados em 7 dias</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}