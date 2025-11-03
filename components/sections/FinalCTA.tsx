'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ContactButton } from '@/components/ui/ContactButton';
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle, 
  Eye, 
  MessageSquare, 
  BarChart3,
  Users,
  Zap,
  Sparkles,
  TrendingUp,
  Clock,
  Target,
  Star,
  Award,
  Shield
} from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import { useLanguage } from '@/lib/contexts/LanguageContext';

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

export function FinalCTA() {
  const { t } = useLanguage();
  const handleCTAClick = () => {
    trackEvent('cta_click', {
      cta_type: 'schedule_demo',
      cta_location: 'how_it_works_final',
      cta_text: t.finalCta.primaryButton
    });
  };

  const handleSecondaryCTAClick = () => {
    trackEvent('cta_click', {
      cta_type: 'view_cases',
      cta_location: 'how_it_works_final',
      cta_text: t.finalCta.secondaryButton
    });
  };

  const demoFeatures = t.finalCta.demoFeatures.map((feature, index) => {
    const icons = [Eye, MessageSquare, BarChart3, Users, Zap];
    return {
      icon: icons[index] || Eye,
      title: feature.title,
      description: feature.description,
      highlight: feature.highlight
    };
  });

  const finalStats = [
    { number: '2.000+', label: t.finalCta.stats.activeProfiles, icon: Users, color: 'from-blue-500 to-blue-600' },
    { number: '112', label: t.finalCta.stats.meetings45Days, icon: Calendar, color: 'from-green-500 to-green-600' },
    { number: '39%', label: t.finalCta.stats.acceptanceRate, icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
    { number: '0', label: t.finalCta.stats.bans, icon: Shield, color: 'from-orange-500 to-orange-600' }
  ];

  const guarantees = t.finalCta.guarantees.map((guarantee, index) => {
    const icons = [CheckCircle, Clock, Target, Award];
    return {
      icon: icons[index] || CheckCircle,
      text: guarantee.text,
      highlight: guarantee.highlight
    };
  });

  return (
    <Section background="gradient" padding="xl" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            variants={fadeInUp} 
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 mr-2" />
              {t.finalCta.badge}
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              {t.finalCta.headline}
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-5xl mx-auto">
              {t.finalCta.subtitle}
            </p>
          </motion.div>

          {/* Final Stats */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto"
          >
            {finalStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Demo Features */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
              {t.finalCta.demoTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demoFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white mb-3">
                      {feature.highlight}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {/* Primary CTA */}
              <ContactButton
                source="final-cta-primary"
                className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold text-xl px-20 py-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 group overflow-hidden"
              >
                {/* Efeito de brilho interno */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Conteúdo do botão */}
                <span className="relative flex items-center justify-center">
                  <span className="mr-3 text-2xl">🚀</span>
                  {t.finalCta.primaryButton}
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </ContactButton>

              {/* Secondary CTA */}
              <ContactButton
                source="final-cta-secondary"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-12 py-6 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-105"
              >
                <Star className="w-5 h-5 mr-2 inline" />
                {t.finalCta.secondaryButton}
              </ContactButton>
            </div>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
          >
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-4 text-white/90 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <guarantee.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{guarantee.text}</div>
                  <div className="text-sm text-white/70">{guarantee.highlight}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Message */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t.finalCta.finalMessage.title}</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              {t.finalCta.finalMessage.description}
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}