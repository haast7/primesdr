'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Clock,
  Users,
  MessageSquare,
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

export function OptimizationStep() {
  const weeklyMetrics = [
    { label: 'Taxa de aceitação', value: '35%+', target: 'Meta' },
    { label: 'Taxa de resposta', value: '18%+', target: 'Meta' },
    { label: 'MQLs gerados', value: 'Variável', target: 'Por campanha' },
    { label: 'Reuniões agendadas', value: 'Variável', target: 'Por perfil' },
    { label: 'Custo por reunião', value: 'Otimizado', target: 'CPR' }
  ];

  const abTests = [
    { test: 'Mensagem A vs. Mensagem B', status: 'Rodando' },
    { test: 'Timing (manhã vs. tarde)', status: 'Rodando' },
    { test: 'Abordagem (consultiva vs. direta)', status: 'Planejado' }
  ];

  const optimizations = [
    'Refinar ICP (adicionar/remover cargos)',
    'Melhorar copy das mensagens',
    'Alterar cadência (mais/menos follow-ups)',
    'Expandir listas'
  ];

  const reportExample = {
    period: '07-13 Out',
    metrics: [
      { label: 'Convites enviados', value: '280', status: 'success' },
      { label: 'Aceitações', value: '109', percentage: '39%', status: 'success' },
      { label: 'Respostas', value: '24', percentage: '22%', status: 'success' },
      { label: 'Reuniões agendadas', value: '9', percentage: '38%', status: 'success' }
    ],
    recommendation: 'Taxa de resposta da lista "CTOs SaaS" está 15% acima da média. Sugerimos dobrar volume nessa lista.',
    nextWeek: 'Testar nova abordagem no follow-up 2 (foco em caso específico de SaaS).'
  };

  return (
    <Section background="white" padding="lg" id="otimizacao">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6">
              <BarChart3 className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Etapa 4: Otimização (Semanal)
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Testamos, ajustamos, melhoramos
            </p>
          </motion.div>

          {/* Weekly Review */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card className="bg-white border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">4.1 Reunião de Review (30 minutos)</h3>
                    <p className="text-gray-600">Analisamos juntos:</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Métricas */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-orange-600" />
                      <span>Métricas da semana:</span>
                    </h4>
                    <div className="space-y-3">
                      {weeklyMetrics.map((metric, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                          <span className="text-sm text-gray-700">{metric.label}</span>
                          <div className="text-right">
                            <span className="text-sm font-semibold text-orange-700">{metric.value}</span>
                            <span className="text-xs text-gray-500 ml-2">({metric.target})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testes A/B */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-orange-600" />
                      <span>Testes A/B rodando:</span>
                    </h4>
                    <div className="space-y-3">
                      {abTests.map((test, index) => (
                        <div key={index} className="p-3 bg-orange-50 rounded-lg">
                          <p className="text-sm text-gray-700 mb-1">{test.test}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            test.status === 'Rodando' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {test.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ajustes */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                      <Target className="w-5 h-5 text-orange-600" />
                      <span>Ajustes necessários:</span>
                    </h4>
                    <div className="space-y-2">
                      {optimizations.map((optimization, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{optimization}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Automated Reports */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <Card className="bg-white border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">4.2 Relatórios Automatizados</h3>
                    <p className="text-gray-600">Você recebe toda semana:</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email executivo</h4>
                    <p className="text-sm text-gray-600">Resumo visual com gráficos</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-xl">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dashboard atualizado</h4>
                    <p className="text-sm text-gray-600">Acesso 24/7</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-xl">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recomendações</h4>
                    <p className="text-sm text-gray-600">Baseadas em dados</p>
                  </div>
                </div>

                {/* Report Example */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Exemplo de relatório - Performance Semanal ({reportExample.period})
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {reportExample.metrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-lg border border-gray-200">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                        {metric.percentage && (
                          <div className="text-sm font-semibold text-green-600">{metric.percentage}</div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">🎯 Recomendação:</span> {reportExample.recommendation}
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800">
                        <span className="font-semibold">📈 Próxima semana:</span> {reportExample.nextWeek}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Continuous Optimizations */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <Card className="bg-white border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">4.3 Otimizações Contínuas</h3>
                    <p className="text-gray-600">Baseado nos dados, fazemos:</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Refino de listas</h4>
                    <p className="text-sm text-gray-600">Removemos perfis frios, adicionamos similares aos quentes</p>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Melhoria de copy</h4>
                    <p className="text-sm text-gray-600">Ajustamos mensagens que convertem menos</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Testes A/B constantes</h4>
                    <p className="text-sm text-gray-600">Sempre testando variações</p>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expansão de ICP</h4>
                    <p className="text-sm text-gray-600">Identificamos padrões de quem responde mais</p>
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



















