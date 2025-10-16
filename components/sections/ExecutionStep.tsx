'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { 
  Rocket, 
  Send, 
  Users, 
  MessageSquare, 
  Brain, 
  Bell, 
  Calendar, 
  TrendingUp,
  Clock,
  CheckCircle,
  Zap
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

export function ExecutionStep() {
  const dailyFlow = [
    { 
      time: '08h00', 
      action: 'Automação envia 120 convites', 
      detail: '3 perfis x 40 convites/dia',
      icon: Send,
      color: 'blue',
      type: 'automation'
    },
    { 
      time: '10h00', 
      action: '49 aceitações chegam', 
      detail: 'Taxa de aceitação: 49%',
      icon: Users,
      color: 'green',
      type: 'response'
    },
    { 
      time: '11h00', 
      action: 'Automação envia mensagem pós-aceite', 
      detail: 'Personalizada para cada lead',
      icon: MessageSquare,
      color: 'purple',
      type: 'automation'
    },
    { 
      time: '14h00', 
      action: '20 leads respondem com interesse', 
      detail: '33,9% dos que aceitaram',
      icon: Brain,
      color: 'orange',
      type: 'response'
    },
    { 
      time: '14h05', 
      action: 'SDR HUMANO recebe notificação', 
      detail: 'Entra na conversa em tempo real',
      icon: Bell,
      color: 'red',
      type: 'human'
    },
    { 
      time: '15h00', 
      action: 'SDR qualifica e agenda 8 reuniões', 
      detail: '40% dos que responderam marcaram',
      icon: Calendar,
      color: 'emerald',
      type: 'human'
    },
    { 
      time: '16h00', 
      action: 'Reuniões vão pro seu CRM + Calendário', 
      detail: 'Você só entra pra fechar! 🎯',
      icon: TrendingUp,
      color: 'indigo',
      type: 'result'
    }
  ];

  const automationTasks = [
    'Envia convites no timing certo',
    'Curtir posts antes de conectar (quando configurado)',
    'Visita perfis (desperta curiosidade)',
    'Envia mensagens personalizadas',
    'Dispara follow-ups automaticamente',
    'Monitora respostas 24/7',
    'PAUSA automaticamente quando lead responde'
  ];

  const sdrTasks = [
    'Recebe notificação instantânea de resposta',
    'Lê contexto completo da conversa',
    'Qualifica o lead (dor, budget, timing, fit)',
    'Responde em tom natural e consultivo',
    'Agenda reunião no melhor horário',
    'Envia convite de calendário',
    'Registra tudo no CRM com notas'
  ];

  const getFlowColorClasses = (color: string, type: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', gradient: 'from-blue-500 to-blue-600' },
      green: { bg: 'bg-green-500', light: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', gradient: 'from-green-500 to-green-600' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', gradient: 'from-purple-500 to-purple-600' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', gradient: 'from-orange-500 to-orange-600' },
      red: { bg: 'bg-red-500', light: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', gradient: 'from-red-500 to-red-600' },
      emerald: { bg: 'bg-emerald-500', light: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', gradient: 'from-emerald-500 to-emerald-600' },
      indigo: { bg: 'bg-indigo-500', light: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', gradient: 'from-indigo-500 to-indigo-600' }
    };
    
    const colors = colorMap[color as keyof typeof colorMap] || colorMap.blue;
    
    return {
      ...colors,
      typeClass: type === 'automation' ? 'border-dashed' : type === 'human' ? 'border-solid ring-2 ring-yellow-200' : 'border-solid'
    };
  };

  return (
    <Section background="gray" padding="lg" id="execucao">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
              <Rocket className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Etapa 3: Execução 24/7 (Contínuo)
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Automação roda, SDR fecha
            </p>
          </motion.div>

          {/* Daily Flow */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-0 shadow-2xl overflow-hidden">
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

              <div className="p-8">
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
                        <motion.div
                          className={`relative bg-white rounded-2xl shadow-lg border-2 ${colors.typeClass} ${colors.border} overflow-hidden group hover:shadow-xl transition-all duration-300`}
                          whileHover={{ scale: 1.02, y: -5 }}
                        >
                          <div className={`absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r ${colors.gradient} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg z-10`}>
                            {index + 1}
                          </div>

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
                              <motion.div
                                className={`w-16 h-16 bg-gradient-to-r ${colors.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <flow.icon className="w-8 h-8 text-white" />
                              </motion.div>

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
                          </div>
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
            </Card>
          </motion.div>

          {/* Automation vs Human */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Card className="h-full bg-white border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">O que a Automação faz:</h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {automationTasks.map((task, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <Card className="h-full bg-white border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">O que o SDR Humano faz:</h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {sdrTasks.map((task, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Conversation Example */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <Card className="bg-white border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Exemplo de conversa com SDR:
                </h3>
                <div className="space-y-4 max-w-2xl mx-auto">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">L</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-4 max-w-md">
                      <p className="text-gray-800">"Interessante, como funciona?"</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-blue-500 text-white rounded-2xl p-4 max-w-md">
                      <p>&quot;{`{{firstName}}`}, te explico rapidinho: rodamos prospecção no LinkedIn (automação + humano). Qual a meta de reuniões/mês que vcs precisam hoje?&quot;</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-white">S</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">L</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-4 max-w-md">
                      <p className="text-gray-800">"Uns 50-80/mês."</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-blue-500 text-white rounded-2xl p-4 max-w-md">
                      <p>"Perfeito, é bem factível. Posso te mostrar em 15 min como chegamos lá? Tenho slot amanhã 10h ou 15h. Qual melhor?"</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-white">S</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">L</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-4 max-w-md">
                      <p className="text-gray-800">"15h ok"</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-blue-500 text-white rounded-2xl p-4 max-w-md">
                      <p>"Fechado! Mandei convite no teu email. Até amanhã! 🚀"</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-white">S</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
