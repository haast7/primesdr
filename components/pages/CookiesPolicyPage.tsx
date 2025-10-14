'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  BarChart3, 
  Target, 
  Globe, 
  Smartphone, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ExternalLink,
  Info,
  Lock,
  Users,
  Database
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

export function CookiesPolicyPage() {
  const sections = [
    {
      id: 'introducao',
      title: '1. INTRODUÇÃO',
      icon: Cookie,
      content: (
        <div className="space-y-4">
          <p>
            A <strong>Prime SDR</strong> ("nós", "nosso" ou "site"), inscrita sob o CNPJ 60.782.822/0001-01, utiliza cookies e tecnologias similares para melhorar sua experiência de navegação, analisar o uso do site, personalizar conteúdo e exibir anúncios relevantes.
          </p>
          <p>
            Esta Política de Cookies explica o que são cookies, como os utilizamos, quais tipos empregamos e como você pode gerenciá-los.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-800">
              <strong>Ao continuar navegando em nosso site, você concorda com o uso de cookies conforme descrito nesta política.</strong>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'o-que-sao-cookies',
      title: '2. O QUE SÃO COOKIES?',
      icon: Info,
      content: (
        <div className="space-y-4">
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu navegador (computador, tablet ou celular) quando você visita um site. Eles permitem que o site "lembre" de suas ações e preferências ao longo do tempo.
          </p>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">2.1. Tecnologias similares:</h4>
            <p className="mb-3">Além de cookies, também utilizamos:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Pixels (web beacons):</strong> Pequenas imagens invisíveis que rastreiam interações (ex: abertura de email).</li>
              <li><strong>Local Storage:</strong> Armazenamento local no navegador para salvar preferências.</li>
              <li><strong>Session Storage:</strong> Dados temporários armazenados durante a sessão de navegação.</li>
              <li><strong>SDKs de terceiros:</strong> Ferramentas de análise e publicidade (Google Analytics, Meta Pixel, etc.).</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'para-que-usamos',
      title: '3. PARA QUE USAMOS COOKIES?',
      icon: Settings,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3.1. Cookies essenciais (necessários):</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Funcionamento básico do site:</strong> Login, sessão de usuário, segurança.</li>
              <li><strong>Preferências:</strong> Idioma, região, configurações de consentimento.</li>
              <li><strong>Segurança:</strong> Prevenção de fraudes, proteção contra ataques.</li>
            </ul>
            <div className="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded">
              <p className="text-red-800">
                <strong>Estes cookies não podem ser desativados, pois são necessários para o funcionamento do site.</strong>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3.2. Cookies de desempenho e análise:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Google Analytics:</strong> Analisa como visitantes usam o site (páginas visitadas, tempo de permanência, origem do tráfego).</li>
              <li><strong>Microsoft Clarity:</strong> Mapas de calor e gravações de sessão (anonimizadas).</li>
              <li><strong>Hotjar:</strong> Análise de comportamento e feedback de usuários.</li>
            </ul>
            <p className="mt-3 text-gray-600">
              <strong>Finalidade:</strong> Melhorar a experiência do usuário, identificar problemas técnicos e otimizar conteúdo.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3.3. Cookies de funcionalidade:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Lembrar preferências:</strong> Configurações de conta, preferências de visualização.</li>
              <li><strong>Chat e suporte:</strong> Intercom, Zendesk, Crisp (lembrar conversas anteriores).</li>
            </ul>
            <p className="mt-3 text-gray-600">
              <strong>Finalidade:</strong> Tornar a navegação mais conveniente e personalizada.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3.4. Cookies de publicidade e marketing:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Meta Pixel (Facebook/Instagram):</strong> Rastreia conversões e exibe anúncios personalizados.</li>
              <li><strong>Google Ads:</strong> Remarketing e medição de campanhas publicitárias.</li>
              <li><strong>LinkedIn Insight Tag:</strong> Análise de conversões e anúncios no LinkedIn.</li>
              <li><strong>TikTok Pixel:</strong> Rastreamento de conversões em campanhas no TikTok.</li>
            </ul>
            <p className="mt-3 text-gray-600">
              <strong>Finalidade:</strong> Exibir anúncios relevantes, medir eficácia de campanhas e realizar remarketing.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'tipos-cookies',
      title: '4. TIPOS DE COOKIES QUE UTILIZAMOS',
      icon: Database,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4.1. Classificação por duração:</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Tipo</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Descrição</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b"><strong>Cookies de sessão</strong></td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Expiram quando você fecha o navegador</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Temporários</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700"><strong>Cookies persistentes</strong></td>
                    <td className="px-4 py-3 text-sm text-gray-700">Permanecem no dispositivo por período determinado</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Até 2 anos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4.2. Classificação por origem:</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Tipo</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b"><strong>Cookies próprios (first-party)</strong></td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Criados e gerenciados pela Prime SDR</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700"><strong>Cookies de terceiros (third-party)</strong></td>
                    <td className="px-4 py-3 text-sm text-gray-700">Criados por parceiros (Google, Meta, Microsoft)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'lista-cookies',
      title: '5. LISTA DETALHADA DE COOKIES',
      icon: BarChart3,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.1. Cookies essenciais:</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-red-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Nome</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Provedor</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Finalidade</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-mono">primesdr_session</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Prime SDR</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Mantém sessão de login</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Sessão</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-mono">csrf_token</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Prime SDR</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Proteção contra ataques CSRF</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Sessão</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 font-mono">cookie_consent</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Prime SDR</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Armazena consentimento de cookies</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1 ano</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.2. Cookies de análise:</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Nome</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Provedor</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Finalidade</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-mono">_ga</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Google Analytics</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Distingue usuários únicos</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">2 anos</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-mono">_gid</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Google Analytics</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Distingue usuários únicos</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">24 horas</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-mono">_gat</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Google Analytics</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Limita taxa de requisições</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">1 minuto</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-mono">_clck</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Microsoft Clarity</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Armazena ID de sessão</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">1 ano</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 font-mono">_clsk</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Microsoft Clarity</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Conecta múltiplas sessões</td>
                    <td className="px-4 py-3 text-sm text-gray-700">1 dia</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.3. Cookies de publicidade:</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Nome</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Provedor</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Finalidade</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-mono">_fbp</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Meta (Facebook)</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Rastreamento de conversões</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">3 meses</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-mono">fr</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Meta (Facebook)</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Exibição de anúncios personalizados</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">3 meses</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-mono">IDE</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Google Ads</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Remarketing e segmentação</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">1 ano</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-mono">li_sugr</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">LinkedIn</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Rastreamento de conversões</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">3 meses</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 font-mono">_ttp</td>
                    <td className="px-4 py-3 text-sm text-gray-700">TikTok</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Medição de campanhas</td>
                    <td className="px-4 py-3 text-sm text-gray-700">13 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.4. Cookies de funcionalidade:</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Nome</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Provedor</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Finalidade</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b font-mono">intercom-session</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Intercom</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">Chat de suporte</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b">7 dias</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 font-mono">crisp-client</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Crisp</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Widget de chat</td>
                    <td className="px-4 py-3 text-sm text-gray-700">6 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cookies-terceiros',
      title: '6. COOKIES DE TERCEIROS',
      icon: Globe,
      content: (
        <div className="space-y-6">
          <p>Alguns cookies são definidos por serviços de terceiros que utilizamos para melhorar a experiência do usuário:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Google Analytics</h4>
              <ul className="space-y-2 text-blue-800">
                <li><strong>Provedor:</strong> Google LLC</li>
                <li><strong>Finalidade:</strong> Análise de tráfego e comportamento</li>
                <li><strong>Política:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">https://policies.google.com/privacy</a></li>
                <li><strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">https://tools.google.com/dlpage/gaoptout</a></li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Meta Pixel (Facebook)</h4>
              <ul className="space-y-2 text-blue-800">
                <li><strong>Provedor:</strong> Meta Platforms, Inc.</li>
                <li><strong>Finalidade:</strong> Remarketing e medição de anúncios</li>
                <li><strong>Política:</strong> <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">https://www.facebook.com/privacy/policy</a></li>
                <li><strong>Gerenciar:</strong> <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">https://www.facebook.com/settings?tab=ads</a></li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Microsoft Clarity</h4>
              <ul className="space-y-2 text-blue-800">
                <li><strong>Provedor:</strong> Microsoft Corporation</li>
                <li><strong>Finalidade:</strong> Mapas de calor e análise de comportamento</li>
                <li><strong>Política:</strong> <a href="https://privacy.microsoft.com/pt-br/privacystatement" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">https://privacy.microsoft.com/pt-br/privacystatement</a></li>
                <li><strong>Opt-out:</strong> Gerenciador de cookies do navegador</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">LinkedIn Insight Tag</h4>
              <ul className="space-y-2 text-blue-800">
                <li><strong>Provedor:</strong> LinkedIn Corporation</li>
                <li><strong>Finalidade:</strong> Conversões e remarketing B2B</li>
                <li><strong>Política:</strong> <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">https://www.linkedin.com/legal/privacy-policy</a></li>
                <li><strong>Gerenciar:</strong> <a href="https://www.linkedin.com/psettings/guest-controls" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">https://www.linkedin.com/psettings/guest-controls</a></li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Google Ads</h4>
              <ul className="space-y-2 text-blue-800">
                <li><strong>Provedor:</strong> Google LLC</li>
                <li><strong>Finalidade:</strong> Remarketing e anúncios personalizados</li>
                <li><strong>Política:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">https://policies.google.com/privacy</a></li>
                <li><strong>Opt-out:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">https://adssettings.google.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gerenciar-cookies',
      title: '7. COMO GERENCIAR COOKIES',
      icon: Settings,
      content: (
        <div className="space-y-6">
          <p>Você tem controle total sobre os cookies armazenados no seu dispositivo:</p>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">7.1. Banner de consentimento:</h4>
            <p className="mb-3">Ao acessar nosso site pela primeira vez, exibimos um <strong>banner de consentimento</strong> onde você pode:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Aceitar todos os cookies</strong></li>
              <li><strong>Rejeitar cookies não essenciais</strong></li>
              <li><strong>Personalizar preferências</strong> (escolher quais categorias aceitar)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">7.2. Configurações do navegador:</h4>
            <p className="mb-3">Você pode bloquear, deletar ou gerenciar cookies diretamente no seu navegador:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Google Chrome:</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                  <li>Configurações {'>'} Privacidade e segurança {'>'} Cookies e outros dados do site</li>
                  <li>Escolha "Bloquear cookies de terceiros" ou "Bloquear todos os cookies"</li>
                </ol>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Mozilla Firefox:</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                  <li>Configurações > Privacidade e Segurança > Cookies e dados de sites</li>
                  <li>Escolha o nível de bloqueio desejado</li>
                </ol>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Safari (Mac/iOS):</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                  <li>Preferências > Privacidade</li>
                  <li>Marque "Bloquear todos os cookies"</li>
                </ol>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Microsoft Edge:</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                  <li>Configurações > Cookies e permissões do site</li>
                  <li>Escolha "Bloquear cookies de terceiros"</li>
                </ol>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">7.3. Ferramentas de opt-out:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">https://tools.google.com/dlpage/gaoptout</a></li>
              <li><strong>Your Online Choices:</strong> <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">https://www.youronlinechoices.com</a> (desativa cookies de publicidade de múltiplos parceiros)</li>
              <li><strong>Network Advertising Initiative:</strong> <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">https://optout.networkadvertising.org</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">7.4. Navegação privada:</h4>
            <p>Use o modo de navegação anônima/privada do seu navegador para não armazenar cookies após o fechamento da janela.</p>
          </div>
        </div>
      )
    },
    {
      id: 'consequencias',
      title: '8. CONSEQUÊNCIAS DE DESATIVAR COOKIES',
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <p>Ao desativar cookies, especialmente os essenciais, você pode enfrentar:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <strong>Impossibilidade de login:</strong> Não conseguirá acessar sua conta.
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <strong>Perda de preferências:</strong> Configurações não serão salvas.
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <strong>Experiência limitada:</strong> Algumas funcionalidades podem não funcionar corretamente.
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <strong>Anúncios genéricos:</strong> Verá anúncios menos relevantes (se navegar em outros sites).
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-yellow-800">
              <strong>Cookies não essenciais podem ser desativados sem afetar funcionalidades básicas.</strong>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'dados-pessoais',
      title: '9. COOKIES E DADOS PESSOAIS',
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">9.1. Relação com a LGPD:</h4>
            <p>Alguns cookies coletam <strong>dados pessoais</strong> (endereço IP, identificadores únicos, comportamento de navegação). Nesses casos:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
              <li>O tratamento é regido pela <strong>LGPD (Lei nº 13.709/2018)</strong>.</li>
              <li>Solicitamos seu <strong>consentimento explícito</strong> via banner de cookies.</li>
              <li>Você pode <strong>revogar consentimento</strong> a qualquer momento.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">9.2. Base legal:</h4>
            <p>O uso de cookies é fundamentado em:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <strong>Consentimento:</strong> Para cookies de publicidade e análise (Art. 7º, I da LGPD).
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <strong>Legítimo interesse:</strong> Para cookies essenciais e de desempenho (Art. 7º, IX da LGPD).
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">9.3. Transferência internacional:</h4>
            <p>Alguns cookies de terceiros (Google, Meta, Microsoft) podem transferir dados para fora do Brasil. Garantimos que essas empresas:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
              <li>Cumprem a LGPD.</li>
              <li>Oferecem nível adequado de proteção de dados.</li>
              <li>Possuem cláusulas contratuais de proteção (Standard Contractual Clauses).</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'direitos-usuarios',
      title: '12. DIREITOS DOS USUÁRIOS',
      icon: Users,
      content: (
        <div className="space-y-6">
          <p>Conforme a LGPD, você tem direito a:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <strong>Confirmar</strong> quais cookies coletam seus dados pessoais.
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <strong>Acessar</strong> dados coletados por cookies.
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <strong>Corrigir</strong> dados incorretos.
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <strong>Excluir</strong> cookies e dados associados.
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <strong>Revogar consentimento</strong> a qualquer momento.
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <strong>Opor-se</strong> ao tratamento de dados por cookies não essenciais.
            </div>
          </div>

          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h4 className="text-lg font-semibold text-primary-900 mb-3">Para exercer seus direitos:</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-600" />
                <span className="text-primary-800">contato@primesdr.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <span className="text-primary-800">+55 11 94502-2847</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contato',
      title: '15. CONTATO',
      icon: Mail,
      content: (
        <div className="space-y-6">
          <p>Dúvidas sobre nossa Política de Cookies?</p>
          
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl border border-primary-200">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Informações de Contato</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Prime SDR</p>
                    <p className="text-gray-600">CNPJ: 60.782.822/0001-01</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">contato@primesdr.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">+55 11 94502-2847</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">https://primesdr.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">São Paulo, SP - Brasil</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Seg - Sex: 9h às 18h</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <p className="text-yellow-800">
              <strong>Ao continuar navegando em nosso site, você concorda com o uso de cookies conforme descrito nesta Política de Cookies.</strong>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="white" padding="lg" className="border-b border-gray-200">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm mb-6">
                <Cookie className="w-5 h-5 mr-2" />
                Política de Cookies
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Política de Cookies
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Saiba como utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação.
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Cookie className="w-4 h-4" />
                  <span>Última atualização: 13 de outubro de 2025</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Content */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    {section.content}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}





