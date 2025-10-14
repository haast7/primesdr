'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FileText, Copy, RefreshCw, CheckCircle } from 'lucide-react';

interface HeadlineOption {
  text: string;
  type: string;
  conversionRate: string;
}

export function HeadlineGenerator() {
  const [role, setRole] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [problemSolved, setProblemSolved] = useState('');
  const [headlines, setHeadlines] = useState<HeadlineOption[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateHeadlines = async () => {
    if (!role || !targetAudience || !problemSolved) return;
    
    setIsGenerating(true);
    
    // Simulação de geração (em produção, isso seria uma API call)
    setTimeout(() => {
      const mockHeadlines: HeadlineOption[] = [
        {
          text: `Ajudo ${targetAudience} a ${problemSolved} | ${role} @PrimeSDR`,
          type: 'Direta',
          conversionRate: '22%'
        },
        {
          text: `Transformo LinkedIn em motor de receita para ${targetAudience} | ${role}`,
          type: 'Resultado',
          conversionRate: '18%'
        },
        {
          text: `${role} especializado em ${problemSolved} para ${targetAudience}`,
          type: 'Especialista',
          conversionRate: '15%'
        },
        {
          text: `Gero 100+ reuniões/mês para ${targetAudience} via LinkedIn | ${role}`,
          type: 'Métrica',
          conversionRate: '25%'
        },
        {
          text: `${role} que resolve ${problemSolved} | Resultados comprovados`,
          type: 'Credibilidade',
          conversionRate: '20%'
        }
      ];
      
      setHeadlines(mockHeadlines);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Direta': 'bg-blue-100 text-blue-800',
      'Resultado': 'bg-green-100 text-green-800',
      'Especialista': 'bg-purple-100 text-purple-800',
      'Métrica': 'bg-orange-100 text-orange-800',
      'Credibilidade': 'bg-red-100 text-red-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-100 rounded-lg">
              <FileText className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <CardTitle>Gerador de Headline de LinkedIn</CardTitle>
              <CardDescription>
                Responda 3 perguntas e receba 5 opções de headline testadas.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qual seu cargo?
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Ex: CEO, Diretor de Vendas, Consultor"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Para quem você vende?
              </label>
              <input
                type="text"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder="Ex: CEOs de SaaS, Diretores de Marketing, Empresários"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qual problema você resolve?
              </label>
              <input
                type="text"
                value={problemSolved}
                onChange={(e) => setProblemSolved(e.target.value)}
                placeholder="Ex: aumentar vendas, reduzir custos, melhorar produtividade"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <Button 
              onClick={generateHeadlines} 
              disabled={!role || !targetAudience || !problemSolved || isGenerating}
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Gerando headlines...
                </>
              ) : (
                'Gerar minha headline'
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {headlines.length > 0 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Suas Headlines Personalizadas</CardTitle>
              <CardDescription>
                Clique em "Copiar" para usar qualquer uma dessas opções
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {headlines.map((headline, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium mb-2">
                          {headline.text}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(headline.type)}`}>
                            {headline.type}
                          </span>
                          <span className="text-sm text-gray-500">
                            Taxa de conversão: {headline.conversionRate}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(headline.text, index)}
                        className="flex-shrink-0"
                      >
                        {copiedIndex === index ? (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="mr-2 h-4 w-4" />
                            Copiar
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Como escolher a melhor headline?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Critérios de escolha:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• <strong>Direta:</strong> Clara e objetiva</li>
                    <li>• <strong>Resultado:</strong> Foca no benefício</li>
                    <li>• <strong>Especialista:</strong> Demonstra expertise</li>
                    <li>• <strong>Métrica:</strong> Inclui números específicos</li>
                    <li>• <strong>Credibilidade:</strong> Destaca provas sociais</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Dicas de otimização:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Teste diferentes versões</li>
                    <li>• Use palavras-chave relevantes</li>
                    <li>• Seja específico sobre resultados</li>
                    <li>• Inclua sua empresa quando relevante</li>
                    <li>• Mantenha dentro do limite de caracteres</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Examples */}
      <Card className="mt-8">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Exemplos de headlines que convertem
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>"Ajudo CTOs de SaaS a reduzirem churn em 40% | Founder @PrimeSDR"</strong>
              </p>
              <p className="text-xs text-gray-500 mt-1">Taxa de conversão: 24%</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>"Transformo LinkedIn em motor de receita para B2B | 112 reuniões/45 dias"</strong>
              </p>
              <p className="text-xs text-gray-500 mt-1">Taxa de conversão: 22%</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>"Consultor de Vendas que gera R$ 6,3M em pipeline via LinkedIn"</strong>
              </p>
              <p className="text-xs text-gray-500 mt-1">Taxa de conversão: 19%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
