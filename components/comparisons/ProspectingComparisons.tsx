'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle, XCircle, Users, Clock, DollarSign, TrendingUp, Download, Eye } from 'lucide-react';

interface ComparisonOption {
  id: string;
  name: string;
  description: string;
  features: {
    name: string;
    included: boolean;
    details?: string;
  }[];
  metrics: {
    setupTime: string;
    monthlyCost: string;
    meetingsPerMonth: string;
    roi: string;
  };
  pros: string[];
  cons: string[];
  bestFor: string;
  badge?: string;
  badgeColor?: string;
}

export function ProspectingComparisons() {
  const [activeComparison, setActiveComparison] = useState<'sdr' | 'agency' | 'primesdr'>('sdr');

  const comparisons = {
    sdr: {
      title: 'SDR Interno vs Prime SDR vs Agência de Prospecção',
      subtitle: 'Compare as opções disponíveis para sua operação de prospecção',
      options: [
        {
          id: 'internal-sdr',
          name: 'SDR Interno',
          description: 'Contratação de SDR para sua equipe interna',
          features: [
            { name: 'SDR dedicado', included: true, details: '1 SDR por contratação' },
            { name: 'Controle total', included: true },
            { name: 'Conhecimento do produto', included: true },
            { name: 'Setup rápido', included: false, details: '3-6 meses para treinamento' },
            { name: 'Custo baixo inicial', included: false, details: 'Alto custo total' },
            { name: 'Escalabilidade', included: false, details: 'Limitada' },
            { name: 'Expertise em LinkedIn', included: false, details: 'Depende do SDR' },
            { name: 'Relatórios detalhados', included: false, details: 'Básicos' },
            { name: 'Suporte especializado', included: false, details: 'Limitado' },
            { name: 'Garantia de resultados', included: false }
          ],
          metrics: {
            setupTime: '3-6 meses',
            monthlyCost: 'R$ 8.000-15.000',
            meetingsPerMonth: '20-40',
            roi: '200-400%'
          },
          pros: [
            'Controle total do processo',
            'Conhecimento profundo do produto',
            'Integração com equipe interna',
            'Flexibilidade de horários'
          ],
          cons: [
            'Alto custo de contratação e treinamento',
            'Tempo longo para resultados',
            'Dependência de uma pessoa',
            'Falta de expertise especializada',
            'Custo de demissão se não funcionar'
          ],
          bestFor: 'Empresas com orçamento alto e tempo para investir em treinamento',
          badge: 'TRADICIONAL',
          badgeColor: 'bg-gray-100 text-gray-800'
        },
        {
          id: 'agency',
          name: 'Agência de Prospecção',
          description: 'Terceirização para agência especializada',
          features: [
            { name: 'SDR dedicado', included: true, details: 'Compartilhado entre clientes' },
            { name: 'Controle total', included: false, details: 'Limitado' },
            { name: 'Conhecimento do produto', included: false, details: 'Superficial' },
            { name: 'Setup rápido', included: true, details: '2-4 semanas' },
            { name: 'Custo baixo inicial', included: true, details: 'Médio custo' },
            { name: 'Escalabilidade', included: true, details: 'Alta' },
            { name: 'Expertise em LinkedIn', included: true },
            { name: 'Relatórios detalhados', included: true },
            { name: 'Suporte especializado', included: true },
            { name: 'Garantia de resultados', included: false, details: 'Limitada' }
          ],
          metrics: {
            setupTime: '2-4 semanas',
            monthlyCost: 'R$ 3.000-8.000',
            meetingsPerMonth: '15-30',
            roi: '300-600%'
          },
          pros: [
            'Setup rápido',
            'Expertise em prospecção',
            'Custo menor que SDR interno',
            'Escalabilidade',
            'Sem custos de contratação'
          ],
          cons: [
            'SDR compartilhado entre clientes',
            'Conhecimento limitado do produto',
            'Menor controle do processo',
            'Qualidade inconsistente',
            'Dependência da agência'
          ],
          bestFor: 'Empresas que querem resultados rápidos com investimento médio',
          badge: 'TERCEIRIZADO',
          badgeColor: 'bg-blue-100 text-blue-800'
        },
        {
          id: 'primesdr',
          name: 'Prime SDR',
          description: 'Solução completa de prospecção LinkedIn',
          features: [
            { name: 'SDR dedicado', included: true, details: '1 SDR exclusivo por cliente' },
            { name: 'Controle total', included: true, details: 'Dashboard completo' },
            { name: 'Conhecimento do produto', included: true, details: 'Treinamento especializado' },
            { name: 'Setup rápido', included: true, details: '7 dias' },
            { name: 'Custo baixo inicial', included: true, details: 'Custo otimizado' },
            { name: 'Escalabilidade', included: true, details: 'Ilimitada' },
            { name: 'Expertise em LinkedIn', included: true, details: 'Especializada' },
            { name: 'Relatórios detalhados', included: true, details: 'Tempo real' },
            { name: 'Suporte especializado', included: true, details: 'Dedicado' },
            { name: 'Garantia de resultados', included: true, details: '90 dias' }
          ],
          metrics: {
            setupTime: '7 dias',
            monthlyCost: 'R$ 799-2.499',
            meetingsPerMonth: '50-200',
            roi: '1.500-2.100%'
          },
          pros: [
            'Setup em apenas 7 dias',
            'SDR dedicado exclusivo',
            'Garantia de 90 dias',
            'ROI superior comprovado',
            'Relatórios em tempo real',
            'Suporte especializado',
            'Escalabilidade ilimitada',
            'Sem custos ocultos'
          ],
          cons: [
            'Investimento mensal',
            'Dependência da plataforma'
          ],
          bestFor: 'Empresas que querem resultados rápidos, previsíveis e escaláveis',
          badge: 'RECOMENDADO',
          badgeColor: 'bg-green-100 text-green-800'
        }
      ]
    }
  };

  const currentComparison = comparisons[activeComparison];

  const FeatureIcon = ({ included }: { included: boolean }) => {
    return included ? (
      <CheckCircle className="h-5 w-5 text-green-500" />
    ) : (
      <XCircle className="h-5 w-5 text-red-500" />
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {currentComparison.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {currentComparison.subtitle}
        </p>
      </div>

      {/* Comparison Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveComparison('sdr')}
            className={`px-6 py-2 rounded-md transition-all ${
              activeComparison === 'sdr'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Comparativo SDR
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <Card className="mb-8 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                  Recursos
                </th>
                {currentComparison.options.map((option) => (
                  <th key={option.id} className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-semibold text-gray-900">
                          {option.name}
                        </span>
                        {option.badge && (
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${option.badgeColor}`}>
                            {option.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 max-w-xs">
                        {option.description}
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentComparison.options[0].features.map((feature, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {feature.name}
                    {feature.details && (
                      <p className="text-xs text-gray-500 mt-1">
                        {feature.details}
                      </p>
                    )}
                  </td>
                  {currentComparison.options.map((option) => (
                    <td key={option.id} className="px-6 py-4 text-center">
                      <FeatureIcon included={option.features[index].included} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Metrics Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {currentComparison.options.map((option) => (
          <Card key={option.id} className="relative">
            {option.badge && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${option.badgeColor}`}>
                  {option.badge}
                </span>
              </div>
            )}
            
            <CardHeader>
              <CardTitle className="text-center">{option.name}</CardTitle>
              <CardDescription className="text-center">
                {option.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="h-4 w-4 text-primary-600" />
                      <span className="text-lg font-bold text-gray-900">
                        {option.metrics.setupTime}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">Setup</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <DollarSign className="h-4 w-4 text-primary-600" />
                      <span className="text-lg font-bold text-gray-900">
                        {option.metrics.monthlyCost}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">Custo/mês</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="h-4 w-4 text-primary-600" />
                      <span className="text-lg font-bold text-gray-900">
                        {option.metrics.meetingsPerMonth}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">Reuniões/mês</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TrendingUp className="h-4 w-4 text-primary-600" />
                      <span className="text-lg font-bold text-gray-900">
                        {option.metrics.roi}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">ROI</p>
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-green-700 mb-2">Vantagens:</h4>
                    <ul className="space-y-1">
                      {option.pros.slice(0, 3).map((pro, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-green-500 mt-0.5">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-red-700 mb-2">Desvantagens:</h4>
                    <ul className="space-y-1">
                      {option.cons.slice(0, 3).map((con, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-red-500 mt-0.5">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-600 mb-3">
                    <strong>Ideal para:</strong> {option.bestFor}
                  </p>
                  
                  <Button 
                    className="w-full" 
                    variant={option.id === 'primesdr' ? 'primary' : 'outline'}
                  >
                    {option.id === 'primesdr' ? 'Começar agora' : 'Saiba mais'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Pronto para escolher a melhor opção?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Nossa equipe pode ajudar você a tomar a decisão certa para seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Agendar consultoria gratuita
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
              <Download className="mr-2 h-4 w-4" />
              Baixar comparativo completo (PDF)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
