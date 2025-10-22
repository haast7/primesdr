'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  Calendar, 
  TrendingUp,
  Bell,
  Eye,
  Download
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

export function DashboardSection() {
  const mainMetrics = [
    { label: 'Convites enviados', value: '280', period: 'esta semana', icon: MessageSquare, color: 'blue' },
    { label: 'Aceitações', value: '109', percentage: '39%', icon: Users, color: 'green' },
    { label: 'Respostas', value: '24', percentage: '22%', icon: MessageSquare, color: 'orange' },
    { label: 'Reuniões agendadas', value: '9', icon: Calendar, color: 'purple' }
  ];

  const recentActivity = [
    { time: '10:32', action: 'João Silva aceitou conexão', type: 'acceptance' },
    { time: '10:45', action: 'Maria Souza respondeu: "Interessante, como funciona?"', type: 'response' },
    { time: '11:03', action: 'SDR agendou reunião com Carlos Lima (amanhã 15h)', type: 'meeting' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-700' },
      green: { bg: 'bg-green-500', light: 'bg-green-50', text: 'text-green-700' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-700' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-700' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'acceptance': return Users;
      case 'response': return MessageSquare;
      case 'meeting': return Calendar;
      default: return Bell;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'acceptance': return 'text-green-600 bg-green-100';
      case 'response': return 'text-orange-600 bg-orange-100';
      case 'meeting': return 'text-purple-600 bg-purple-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  return (
    <Section background="white" padding="lg" id="dashboard">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dashboard em Tempo Real
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Acompanhe tudo que acontece
            </p>
          </motion.div>

          {/* Main Metrics */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {mainMetrics.map((metric, index) => {
              const colors = getColorClasses(metric.color);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center`}>
                        <metric.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      {metric.percentage && (
                        <span className={`text-sm font-semibold ${colors.text}`}>
                          {metric.percentage}
                        </span>
                      )}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                    <div className="text-xs text-gray-500">{metric.period}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Charts and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Performance Charts */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <Card className="h-full bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Gráficos de Performance</h3>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">Tempo real</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Taxa de aceitação ao longo do tempo</h4>
                      <div className="h-20 bg-white rounded-lg border border-blue-200 flex items-center justify-center">
                        <span className="text-sm text-blue-600">📈 Gráfico interativo</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Taxa de resposta por campanha</h4>
                      <div className="h-20 bg-white rounded-lg border border-green-200 flex items-center justify-center">
                        <span className="text-sm text-green-600">📊 Comparativo</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2">Funil de conversão</h4>
                      <div className="h-20 bg-white rounded-lg border border-purple-200 flex items-center justify-center">
                        <span className="text-sm text-purple-600">🎯 Convite → Aceite → Resposta → Reunião</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <Card className="h-full bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Atividade Recente</h3>
                    <div className="flex items-center space-x-2">
                      <Bell className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">Feed ao vivo</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => {
                      const ActivityIcon = getActivityIcon(activity.type);
                      const colorClasses = getActivityColor(activity.type);
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className={`w-8 h-8 ${colorClasses} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <ActivityIcon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-sm font-semibold text-gray-500">{activity.time}</span>
                            </div>
                            <p className="text-sm text-gray-700">{activity.action}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Lead List */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            <Card className="bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Lista de Leads</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Filtros:</span>
                      <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                        <option>Por campanha</option>
                        <option>Por status</option>
                        <option>Por data</option>
                      </select>
                    </div>
                    <button className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700">
                      <Download className="w-4 h-4" />
                      <span>Exportar CSV</span>
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Nome</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Cargo</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Empresa</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Última ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">João Silva</td>
                        <td className="py-3 px-4 text-sm text-gray-600">CTO</td>
                        <td className="py-3 px-4 text-sm text-gray-600">TechCorp</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            Conectado
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">Aceitou conexão</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">Maria Souza</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Diretora Comercial</td>
                        <td className="py-3 px-4 text-sm text-gray-600">SalesPro</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                            Respondeu
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">Interessada</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">Carlos Lima</td>
                        <td className="py-3 px-4 text-sm text-gray-600">Gerente de Marketing</td>
                        <td className="py-3 px-4 text-sm text-gray-600">MarketingPlus</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                            Reunião agendada
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">Amanhã 15h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}







