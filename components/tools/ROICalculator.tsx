'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calculator, TrendingUp, Users, DollarSign, Target } from 'lucide-react';

interface ROIResult {
  investment: number;
  meetings: number;
  pipeline: number;
  roi: number;
}

export function ROICalculator() {
  const [sellers, setSellers] = useState<number>(1);
  const [meetingsNeeded, setMeetingsNeeded] = useState<number>(50);
  const [averageTicket, setAverageTicket] = useState<number>(10000);
  const [result, setResult] = useState<ROIResult | null>(null);

  const calculateROI = () => {
    // Cálculos baseados em métricas reais da Prime SDR
    const costPerMeeting = 150; // Custo médio por reunião
    const conversionRate = 0.15; // 15% das reuniões viram vendas
    const pipelineMultiplier = 3; // Pipeline é 3x o valor das vendas fechadas

    const totalMeetings = meetingsNeeded * sellers;
    const investment = totalMeetings * costPerMeeting;
    const closedDeals = totalMeetings * conversionRate;
    const pipeline = closedDeals * averageTicket * pipelineMultiplier;
    const roi = ((pipeline - investment) / investment) * 100;

    setResult({
      investment,
      meetings: totalMeetings,
      pipeline,
      roi
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Calculator className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <CardTitle>Calculadora de ROI de Prospecção</CardTitle>
              <CardDescription>
                Descubra quantas reuniões e quanto pipeline você pode gerar investindo em prospecção no LinkedIn.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantos vendedores você tem?
              </label>
              <input
                type="number"
                value={sellers}
                onChange={(e) => setSellers(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                min="1"
                max="50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantas reuniões/mês você precisa?
              </label>
              <input
                type="number"
                value={meetingsNeeded}
                onChange={(e) => setMeetingsNeeded(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                min="10"
                max="500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qual seu ticket médio?
              </label>
              <input
                type="number"
                value={averageTicket}
                onChange={(e) => setAverageTicket(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                min="1000"
                max="1000000"
                step="1000"
              />
            </div>
          </div>
          
          <Button onClick={calculateROI} className="w-full">
            Calcular meu ROI
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Investimento</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(result.investment)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Reuniões</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {result.meetings}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pipeline</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(result.pipeline)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">ROI</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {result.roi.toFixed(0)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Card className="mt-8">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Como funciona o cálculo?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Métricas utilizadas:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custo médio por reunião: R$ 150</li>
                <li>• Taxa de conversão: 15%</li>
                <li>• Pipeline é 3x o valor das vendas</li>
                <li>• Baseado em dados reais da Prime SDR</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">O que você recebe:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Reuniões qualificadas agendadas</li>
                <li>• Leads pré-qualificados</li>
                <li>• Relatórios detalhados</li>
                <li>• Suporte dedicado</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
