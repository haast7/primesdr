'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TrendingUp, Users, DollarSign, Calendar, ArrowRight, Star } from 'lucide-react';

interface SuccessCase {
  id: string;
  title: string;
  description: string;
  industry: string;
  duration: string;
  metrics: {
    meetings: number;
    pipeline: string;
    clients: number;
    roi: string;
  };
  challenges: string[];
  solutions: string[];
  results: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
}

export function SuccessCases() {
  const cases: SuccessCase[] = [
    {
      id: 'saas-case',
      title: 'SaaS B2B → R$ 6,3M em pipeline (60 dias)',
      description: 'Como transformamos o LinkedIn em máquina de leads para uma SaaS de gestão empresarial.',
      industry: 'SaaS B2B',
      duration: '60 dias',
      metrics: {
        meetings: 112,
        pipeline: 'R$ 6,3M',
        clients: 12,
        roi: '2.100%'
      },
      challenges: [
        'Time comercial sobrecarregado',
        'Dependência excessiva de mídia paga',
        'Taxa de conversão baixa (3%)',
        'Pipeline inconsistente'
      ],
      solutions: [
        'Identificação precisa do ICP ideal',
        'Cadências personalizadas por persona',
        'Follow-up automatizado e humanizado',
        'Relatórios detalhados de performance'
      ],
      results: [
        '112 reuniões agendadas em 60 dias',
        'R$ 6,3M em pipeline gerado',
        'Taxa de conversão aumentou para 18%',
        'ROI de 2.100% em 60 dias'
      ],
      testimonial: {
        text: 'A Prime SDR transformou completamente nossa operação de vendas. Em 60 dias, geramos mais pipeline do que em 6 meses anteriores.',
        author: 'Carlos Mendes',
        role: 'CEO',
        company: 'TechFlow SaaS'
      }
    },
    {
      id: 'agency-case',
      title: 'Agência → 403 leads em 90 dias',
      description: 'Estratégia de prospecção para agência de marketing digital que queria expandir para B2B.',
      industry: 'Agência de Marketing',
      duration: '90 dias',
      metrics: {
        meetings: 89,
        pipeline: 'R$ 1,8M',
        clients: 15,
        roi: '1.800%'
      },
      challenges: [
        'Foco apenas em B2C',
        'Falta de processo de prospecção',
        'Dependência de indicações',
        'Crescimento limitado'
      ],
      solutions: [
        'Reposicionamento para B2B',
        'Estratégia de conteúdo educativa',
        'Prospecção consultiva',
        'Automação de follow-up'
      ],
      results: [
        '403 leads qualificados em 90 dias',
        '89 reuniões agendadas',
        '15 novos clientes B2B',
        'R$ 1,8M em pipeline'
      ],
      testimonial: {
        text: 'Conseguimos expandir para B2B sem perder nossa base B2C. A Prime SDR nos deu o processo que precisávamos.',
        author: 'Ana Silva',
        role: 'Diretora de Vendas',
        company: 'Digital Plus'
      }
    },
    {
      id: 'tech-case',
      title: 'Tech → 87 reuniões em 30 dias',
      description: 'Prospecção para empresa de tecnologia com ticket alto e ciclo de venda longo.',
      industry: 'Tecnologia',
      duration: '30 dias',
      metrics: {
        meetings: 87,
        pipeline: 'R$ 4,2M',
        clients: 8,
        roi: '1.500%'
      },
      challenges: [
        'Ticket alto (R$ 50k+)',
        'Ciclo de venda longo (6+ meses)',
        'Decisores difíceis de acessar',
        'Concorrência acirrada'
      ],
      solutions: [
        'Abordagem C-level direta',
        'Conteúdo técnico especializado',
        'Prova social com cases similares',
        'Follow-up persistente e consultivo'
      ],
      results: [
        '87 reuniões com decisores em 30 dias',
        '8 oportunidades qualificadas',
        'R$ 4,2M em pipeline',
        'ROI de 1.500%'
      ],
      testimonial: {
        text: 'Finalmente conseguimos acessar os C-levels que precisávamos. A abordagem da Prime SDR é diferente de tudo que tentamos.',
        author: 'Roberto Lima',
        role: 'VP de Vendas',
        company: 'TechCorp Solutions'
      }
    }
  ];

  const formatCurrency = (value: string) => {
    return value; // Já vem formatado
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Cases de Sucesso Reais
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Resultados reais de clientes que implementaram nossa metodologia completa.
        </p>
      </div>

      <div className="space-y-12">
        {cases.map((caseItem, index) => (
          <Card key={caseItem.id} className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Left Column - Overview */}
              <div className="lg:col-span-1 bg-gradient-to-br from-primary-50 to-primary-100 p-8">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-primary-700">
                      {caseItem.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {caseItem.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {caseItem.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Calendar className="h-4 w-4 text-primary-600" />
                        <span className="text-2xl font-bold text-gray-900">
                          {caseItem.metrics.meetings}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Reuniões</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <DollarSign className="h-4 w-4 text-primary-600" />
                        <span className="text-2xl font-bold text-gray-900">
                          {formatCurrency(caseItem.metrics.pipeline)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Pipeline</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="h-4 w-4 text-primary-600" />
                        <span className="text-2xl font-bold text-gray-900">
                          {caseItem.metrics.clients}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Clientes</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className="h-4 w-4 text-primary-600" />
                        <span className="text-2xl font-bold text-gray-900">
                          {caseItem.metrics.roi}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">ROI</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-primary-200 text-primary-800 text-sm font-medium rounded-full">
                      {caseItem.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="lg:col-span-2 p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Challenges */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Desafios
                    </h4>
                    <ul className="space-y-2">
                      {caseItem.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Soluções
                    </h4>
                    <ul className="space-y-2">
                      {caseItem.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Resultados
                    </h4>
                    <ul className="space-y-2">
                      {caseItem.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Testimonial */}
                {caseItem.testimonial && (
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary-500">
                    <blockquote className="text-gray-700 italic mb-4">
                      "{caseItem.testimonial.text}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold text-sm">
                          {caseItem.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {caseItem.testimonial.author}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {caseItem.testimonial.role} - {caseItem.testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Ver case completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <Card className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Quer ser nosso próximo case de sucesso?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Junte-se a centenas de empresas que já transformaram o LinkedIn em sua principal fonte de leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Agendar demonstração (15 min)
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
              Ver todos os cases
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
