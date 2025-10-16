'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Shield, Mail, Phone, MapPin, Clock, FileText, Users, Lock, Eye, Database, Globe, AlertCircle, BarChart3, Target, Settings } from 'lucide-react';

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

export function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'introducao',
      title: '1. INTRODUÇÃO',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>
            A <strong>Prime SDR</strong> ("nós", "nosso" ou "empresa"), inscrita sob o CNPJ 60.782.822/0001-01, está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários, clientes e visitantes do site.
          </p>
          <p>
            Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos suas informações pessoais em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> e demais legislações aplicáveis.
          </p>
          <p>
            Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política.
          </p>
        </div>
      )
    },
    {
      id: 'definicoes',
      title: '2. DEFINIÇÕES',
      icon: Database,
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Dados Pessoais:</strong> Qualquer informação relacionada a pessoa natural identificada ou identificável.
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Tratamento:</strong> Toda operação realizada com dados pessoais (coleta, armazenamento, processamento, compartilhamento, exclusão).
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Titular:</strong> Pessoa natural a quem se referem os dados pessoais.
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Controlador:</strong> Prime SDR, responsável pelas decisões sobre o tratamento de dados pessoais.
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Operador:</strong> Terceiros que realizam tratamento de dados em nome da Prime SDR.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dados-coletados',
      title: '3. DADOS QUE COLETAMOS',
      icon: Eye,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3.1. Dados fornecidos diretamente por você:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Dados cadastrais:</strong> Nome completo, email profissional, telefone, cargo, empresa, CNPJ.</li>
              <li><strong>Perfil LinkedIn:</strong> URL do perfil LinkedIn (quando fornecido voluntariamente).</li>
              <li><strong>Dados de pagamento:</strong> Informações de cartão de crédito, boleto ou Pix (processadas por operadores de pagamento homologados).</li>
              <li><strong>Comunicação:</strong> Mensagens enviadas via formulários de contato, chat, email ou telefone.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3.2. Dados coletados automaticamente:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Dados de navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo de permanência, origem do tráfego.</li>
              <li><strong>Cookies e tecnologias similares:</strong> Dados coletados por meio de cookies, pixels e ferramentas de análise (Google Analytics, Meta Pixel, etc.).</li>
              <li><strong>Dados de uso da plataforma:</strong> Métricas de campanhas, taxas de aceitação, respostas, reuniões agendadas, perfis conectados.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3.3. Dados obtidos de terceiros:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Integração com LinkedIn:</strong> Dados de perfis públicos do LinkedIn utilizados na operação de prospecção (nome, cargo, empresa, localização).</li>
              <li><strong>Integrações com CRM:</strong> Dados sincronizados de plataformas como HubSpot, Pipedrive, RD Station (quando autorizado por você).</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'finalidades',
      title: '4. FINALIDADES DO TRATAMENTO DE DADOS',
      icon: Users,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4.1. Prestação de serviços:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Executar campanhas de prospecção no LinkedIn conforme contratado.</li>
              <li>Conectar perfis, enviar mensagens automatizadas e personalizar cadências.</li>
              <li>Qualificar leads, agendar reuniões e integrar informações no CRM do cliente.</li>
              <li>Gerar relatórios, dashboards e análises de performance.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4.2. Gestão comercial e financeira:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Processar pagamentos e emitir notas fiscais.</li>
              <li>Gerenciar assinaturas, renovações e cancelamentos.</li>
              <li>Realizar cobranças e controle financeiro.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4.3. Comunicação:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Enviar notificações sobre sua conta, atualizações de serviço e suporte técnico.</li>
              <li>Responder dúvidas, solicitações e reclamações.</li>
              <li>Enviar newsletters, materiais educativos e ofertas comerciais (com possibilidade de opt-out).</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4.4. Melhoria dos serviços:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Analisar uso da plataforma para otimizar funcionalidades.</li>
              <li>Realizar testes A/B e desenvolver novos recursos.</li>
              <li>Prevenir fraudes, abusos e violações de termos de uso.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4.5. Cumprimento de obrigações legais:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Atender solicitações de autoridades competentes.</li>
              <li>Cumprir obrigações fiscais, tributárias e regulatórias.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'tracking-cookies',
      title: '5. TRACKING, COOKIES E TECNOLOGIAS SIMILARES',
      icon: BarChart3,
      content: (
        <div className="space-y-6">
          <p>
            Utilizamos cookies, pixels de rastreamento e outras tecnologias similares para melhorar sua experiência, 
            analisar o uso do site e personalizar conteúdo e anúncios.
          </p>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.1. Cookies essenciais:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Funcionamento do site:</strong> Sessão de login, segurança, preferências básicas.</li>
              <li><strong>Base legal:</strong> Legítimo interesse (Art. 7º, IX da LGPD).</li>
              <li><strong>Retenção:</strong> Durante a sessão ou conforme necessário para funcionalidade.</li>
            </ul>
            <div className="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded">
              <p className="text-red-800">
                <strong>Estes cookies são obrigatórios e não podem ser desativados.</strong>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.2. Cookies de análise:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Google Analytics:</strong> Métricas de tráfego, comportamento de usuários, origem do tráfego.</li>
              <li><strong>Microsoft Clarity:</strong> Mapas de calor, gravações de sessão (anonimizadas).</li>
              <li><strong>Hotjar:</strong> Análise de comportamento e feedback de usuários.</li>
              <li><strong>Base legal:</strong> Consentimento (Art. 7º, I da LGPD).</li>
              <li><strong>Retenção:</strong> Até 2 anos ou conforme política do provedor.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.3. Cookies de marketing:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Meta Pixel (Facebook/Instagram):</strong> Rastreamento de conversões, remarketing.</li>
              <li><strong>Google Ads:</strong> Remarketing, medição de campanhas publicitárias.</li>
              <li><strong>LinkedIn Insight Tag:</strong> Análise de conversões B2B, remarketing.</li>
              <li><strong>TikTok Pixel:</strong> Rastreamento de conversões em campanhas.</li>
              <li><strong>Base legal:</strong> Consentimento (Art. 7º, I da LGPD).</li>
              <li><strong>Retenção:</strong> Até 13 meses ou conforme política do provedor.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.4. Cookies funcionais:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Chat de suporte:</strong> Intercom, Crisp (lembrar conversas anteriores).</li>
              <li><strong>Preferências:</strong> Configurações de conta, preferências de visualização.</li>
              <li><strong>Base legal:</strong> Consentimento (Art. 7º, I da LGPD).</li>
              <li><strong>Retenção:</strong> Até 6 meses ou conforme necessário.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.5. Dados coletados via tracking:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-900 mb-2">Dados técnicos:</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Endereço IP (anonimizado)</li>
                  <li>• User Agent (navegador/dispositivo)</li>
                  <li>• Páginas visitadas</li>
                  <li>• Tempo de permanência</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">Dados comportamentais:</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Cliques e interações</li>
                  <li>• Scroll e movimento do mouse</li>
                  <li>• Formulários preenchidos</li>
                  <li>• Downloads realizados</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.6. Gerenciamento de consentimento:</h4>
            <p className="mb-3">Você pode gerenciar suas preferências de cookies:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Banner de consentimento:</strong> Aparece na primeira visita ao site.</li>
              <li><strong>Configurações granulares:</strong> Escolha quais categorias aceitar.</li>
              <li><strong>Alteração posterior:</strong> Acesse nossa <a href="/cookies" className="text-primary-600 hover:text-primary-700 underline">Política de Cookies</a>.</li>
              <li><strong>Navegador:</strong> Configure diretamente nas configurações do seu navegador.</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-yellow-800">
              <strong>Importante:</strong> Desativar cookies não essenciais pode afetar algumas funcionalidades do site. 
              Cookies essenciais são sempre necessários para o funcionamento básico.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'base-legal',
      title: '6. BASE LEGAL PARA O TRATAMENTO',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>
            O tratamento de dados pessoais pela Prime SDR fundamenta-se nas seguintes bases legais (Art. 7º e 11 da LGPD):
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <strong>Execução de contrato:</strong> Prestação dos serviços contratados.
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <strong>Consentimento:</strong> Quando solicitado expressamente (ex: envio de newsletters).
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <strong>Legítimo interesse:</strong> Melhorias de serviço, prevenção de fraudes, segurança da plataforma.
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <strong>Cumprimento de obrigação legal:</strong> Atendimento a requisitos fiscais, tributários e regulatórios.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compartilhamento',
      title: '7. COMPARTILHAMENTO DE DADOS',
      icon: Globe,
      content: (
        <div className="space-y-6">
          <p>
            A Prime SDR <strong>não vende, aluga ou comercializa</strong> seus dados pessoais. Podemos compartilhar dados nas seguintes situações:
          </p>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">7.1. Com prestadores de serviço (operadores):</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Processadores de pagamento:</strong> Stripe, PayPal, PagSeguro, Mercado Pago.</li>
              <li><strong>Provedores de infraestrutura:</strong> AWS, Google Cloud, Vercel (hospedagem e armazenamento).</li>
              <li><strong>Ferramentas de análise:</strong> Google Analytics, Hotjar, Clarity.</li>
              <li><strong>Automação e CRM:</strong> HubSpot, Pipedrive, RD Station (quando integrado por você).</li>
              <li><strong>Comunicação:</strong> SendGrid, Twilio, Zendesk (email, SMS, suporte).</li>
            </ul>
            <p className="mt-3 text-gray-600">
              Todos os operadores são contratualmente obrigados a proteger seus dados e utilizá-los apenas para as finalidades determinadas pela Prime SDR.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">6.2. Com autoridades competentes:</h4>
            <p>Quando exigido por lei, ordem judicial ou requisição de autoridade pública.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">6.3. Em operações societárias:</h4>
            <p>Em caso de fusão, aquisição, venda de ativos ou reorganização societária, seus dados poderão ser transferidos ao adquirente, mantendo-se os compromissos desta política.</p>
          </div>
        </div>
      )
    },
    {
      id: 'seguranca',
      title: '8. ARMAZENAMENTO E SEGURANÇA DOS DADOS',
      icon: Lock,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">8.1. Localização dos dados:</h4>
            <p>Os dados são armazenados em servidores localizados no <strong>Brasil</strong> e/ou em países que ofereçam nível adequado de proteção de dados conforme a LGPD.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">8.2. Medidas de segurança:</h4>
            <p>Adotamos medidas técnicas e administrativas para proteger seus dados, incluindo:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
              <li>Criptografia de dados em trânsito (SSL/TLS) e em repouso.</li>
              <li>Controles de acesso restrito (autenticação multifator).</li>
              <li>Monitoramento contínuo de vulnerabilidades e incidentes.</li>
              <li>Backups regulares e planos de recuperação de desastres.</li>
              <li>Treinamento de equipe sobre boas práticas de segurança.</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="text-yellow-800">
                <strong>Importante:</strong> Nenhum sistema é 100% seguro. Embora utilizemos as melhores práticas do mercado, não podemos garantir segurança absoluta contra ataques ou vazamentos.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">8.3. Prazo de retenção:</h4>
            <p>Mantemos seus dados pelo período necessário para cumprir as finalidades descritas nesta política, incluindo:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
              <li><strong>Durante a vigência do contrato:</strong> Enquanto você for cliente ativo.</li>
              <li><strong>Após o cancelamento:</strong> Até 5 anos para fins de cumprimento de obrigações legais, fiscais e contratuais (prescrição de direitos).</li>
              <li><strong>Dados anonimizados:</strong> Podemos manter dados anonimizados indefinidamente para fins estatísticos.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'direitos',
      title: '9. DIREITOS DOS TITULARES DE DADOS',
      icon: Users,
      content: (
        <div className="space-y-6">
          <p>Conforme a LGPD, você tem os seguintes direitos sobre seus dados pessoais:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los.
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <strong>Correção:</strong> Solicitar correção de dados incompletos, inexatos ou desatualizados.
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <strong>Anonimização, bloqueio ou eliminação:</strong> Solicitar anonimização, bloqueio ou exclusão de dados desnecessários, excessivos ou tratados em desconformidade.
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <strong>Portabilidade:</strong> Solicitar a transferência de seus dados a outro fornecedor (quando aplicável).
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <strong>Eliminação de dados tratados com consentimento:</strong> Excluir dados quando o tratamento foi baseado em consentimento.
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <strong>Informação sobre compartilhamento:</strong> Saber com quem compartilhamos seus dados.
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <strong>Revogação do consentimento:</strong> Retirar consentimento a qualquer momento (quando aplicável).
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <strong>Oposição ao tratamento:</strong> Opor-se ao tratamento quando realizado com base em legítimo interesse.
            </div>
          </div>

          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
            <h4 className="text-lg font-semibold text-primary-900 mb-3">Como exercer seus direitos:</h4>
            <p className="text-primary-800 mb-4">Entre em contato conosco através dos canais:</p>
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
            <p className="text-primary-800 mt-4">
              Responderemos sua solicitação em até <strong>15 dias úteis</strong>, conforme previsto na LGPD.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'contato',
      title: '10. CONTATO',
      icon: Mail,
      content: (
        <div className="space-y-6">
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
              <strong>Ao utilizar os serviços da Prime SDR, você declara ter lido, compreendido e concordado com esta Política de Privacidade.</strong>
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
                <Shield className="w-5 h-5 mr-2" />
                Proteção de Dados
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Política de Privacidade
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
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









