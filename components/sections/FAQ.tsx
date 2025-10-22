'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { ContactButton } from '@/components/ui/ContactButton';

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

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Isso viola as regras do LinkedIn?',
    answer: 'Não. Respeitamos todos os limites, variamos cadência e nunca disparamos spam. Operamos há anos sem um único ban.'
  },
  {
    question: 'Funciona pro meu nicho?',
    answer: 'Atendemos qualquer negócio que precise gerar reuniões qualificadas e previsíves. Única pergunta que você deve se fazer é: seu público alvo está no linkedin?'
  },
  {
    question: 'Quanto tempo até ver resultado?',
    answer: 'Respostas na 1ª semana. Reuniões a partir da 2ª–3ª semana. O payback vem no primeiro mês de operação.'
  },
  {
    question: 'E se não funcionar?',
    answer: '90 dias de teste. Sem ROI (Retorno sobre o Investimento)? Reembolso integral. Simples assim.'
  },
  {
    question: 'Preciso de Sales Navigator?',
    answer: 'Não. O Prime SDR vai além: além de encontrar os decisores, automatiza todo o processo, coletando respostas, qualificando e agendando reuniões para você.'
  },
  {
    question: 'Quantos perfis devo conectar?',
    answer: 'Mínimo 1, ideal 3–6 (depende do tamanho do time). Quanto mais perfis, mais escala.'
  },
  {
    question: 'Meu LinkedIn pode ser banido?',
    answer: 'Não. Respeitamos todos os limites (30–40 convites/dia, variação de cadência, aquecimento). Operamos há anos sem um único ban.'
  },
  {
    question: 'O que acontece se alguém reclamar de spam?',
    answer: 'Raramente acontece (taxa  de 0,1%), mas se acontecer, pausamos a campanha e ajustamos a abordagem. Além disso, sempre que alguém responde ainda que de forma negativa, a cadência é pausada automaticamente.'
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <Section background="gray" padding="lg">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </div>
            <h2 className="text-display font-bold text-gray-900 mb-6">
              Perguntas que todo mundo faz
            </h2>
            <p className="text-body text-gray-600 leading-relaxed">
              As respostas diretas para as dúvidas mais comuns sobre nossa operação
            </p>
          </motion.div>

          {/* FAQ Grid */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-md transition-all duration-200">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                            openItems.includes(index) ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: openItems.includes(index) ? 'auto' : 0,
                        opacity: openItems.includes(index) ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Help */}
          <motion.div variants={fadeInUp} className="text-center">
            
          </motion.div>
        </motion.div>
      </Container>
    </Section>

    {/* Duplicated CTA Section */}
    <Section background="gradient" padding="xl" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10"
        >
          <div className="text-center max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: 'easeOut' }} className="space-y-6">
              <h2 className="text-display font-bold text-white leading-tight">
                Saiba se o Prime SDR é para você
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                60 segundos pra saber se sua operação pode gerar 100+ reuniões por mês no LinkedIn.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ContactButton
                  source="faq-cta"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold text-lg px-12 py-4 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 group overflow-hidden"
                >
                  {/* Efeito de brilho interno */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Conteúdo do botão */}
                  <span className="relative flex items-center justify-center">
                    <span className="mr-3">🚀</span>
                    Começar agora
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </ContactButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
    </>
  );
}

