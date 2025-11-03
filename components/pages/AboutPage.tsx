'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ContactButton } from '@/components/ui/ContactButton';
import { 
  Target, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Shield, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  Star,
  Award,
  Zap,
  Heart,
  Eye,
  Scale,
  UserPlus,
  Rocket,
  BarChart3,
  Calendar,
  DollarSign,
  UserCheck,
  Building2,
  Briefcase,
  GraduationCap,
  Gavel,
  Wrench
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

export function AboutPage() {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Target,
      title: t.aboutPage.mission.values.results.title,
      description: t.aboutPage.mission.values.results.description,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100'
    },
    {
      icon: Eye,
      title: t.aboutPage.mission.values.transparency.title,
      description: t.aboutPage.mission.values.transparency.description,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100'
    },
    {
      icon: Scale,
      title: t.aboutPage.mission.values.ethics.title,
      description: t.aboutPage.mission.values.ethics.description,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100'
    },
    {
      icon: UserPlus,
      title: t.aboutPage.mission.values.partnership.title,
      description: t.aboutPage.mission.values.partnership.description,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100'
    },
    {
      icon: Rocket,
      title: t.aboutPage.mission.values.innovation.title,
      description: t.aboutPage.mission.values.innovation.description,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100'
    }
  ];


  const stats = [
    { number: '+2.000', label: t.aboutPage.stats.stats.profiles, icon: Users },
    { number: '112', label: t.aboutPage.stats.stats.meetings, icon: Calendar },
    { number: '39%', label: t.aboutPage.stats.stats.acceptanceRate, icon: TrendingUp },
    { number: '22%', label: t.aboutPage.stats.stats.responseRate, icon: Mail },
    { number: '95%', label: t.aboutPage.stats.stats.roi, icon: DollarSign },
    { number: '0', label: t.aboutPage.stats.stats.bans, icon: Shield }
  ];

  const segments = [
    { icon: Building2, title: t.aboutPage.segments.segments.saas.title, description: t.aboutPage.segments.segments.saas.description },
    { icon: Briefcase, title: t.aboutPage.segments.segments.consulting.title, description: t.aboutPage.segments.segments.consulting.description },
    { icon: Zap, title: t.aboutPage.segments.segments.agencies.title, description: t.aboutPage.segments.segments.agencies.description },
    { icon: Wrench, title: t.aboutPage.segments.segments.industry.title, description: t.aboutPage.segments.segments.industry.description },
    { icon: GraduationCap, title: t.aboutPage.segments.segments.education.title, description: t.aboutPage.segments.segments.education.description },
    { icon: Gavel, title: t.aboutPage.segments.segments.services.title, description: t.aboutPage.segments.segments.services.description }
  ];

  const commitments = [
    { icon: Eye, title: t.aboutPage.commitments.commitments.transparency.title, description: t.aboutPage.commitments.commitments.transparency.description },
    { icon: Shield, title: t.aboutPage.commitments.commitments.lgpd.title, description: t.aboutPage.commitments.commitments.lgpd.description },
    { icon: CheckCircle, title: t.aboutPage.commitments.commitments.security.title, description: t.aboutPage.commitments.commitments.security.description },
    { icon: Phone, title: t.aboutPage.commitments.commitments.support.title, description: t.aboutPage.commitments.commitments.support.description },
    { icon: Award, title: t.aboutPage.commitments.commitments.guarantee.title, description: t.aboutPage.commitments.commitments.guarantee.description }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative z-10 text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-white font-semibold text-sm mb-6">
                <Heart className="w-5 h-5 mr-2" />
                {t.aboutPage.hero.badge}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {t.aboutPage.hero.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                {t.aboutPage.hero.subtitle}
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Nossa História */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {t.aboutPage.story.title}
                    </h2>
                  </div>
                </div>
                
                <div className="prose prose-gray max-w-none space-y-6">
                  <p>
                    {t.aboutPage.story.content.paragraph1}
                  </p>
                  
                  <p>{t.aboutPage.story.content.paragraph2}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {t.aboutPage.story.content.list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  
                  <p>
                    {t.aboutPage.story.content.paragraph3}
                  </p>
                  
                  <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                    <p className="text-primary-800 font-semibold text-lg">
                      {t.aboutPage.story.content.highlight1}
                    </p>
                  </div>
                  
                  <p>
                    {t.aboutPage.story.content.paragraph4}
                  </p>
                  
                  <p>
                    {t.aboutPage.story.content.paragraph5}
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <p className="text-green-800">
                      {t.aboutPage.story.content.highlight2}
                    </p>
                  </div>
                  
                  <p>
                    {t.aboutPage.story.content.paragraph6}
                  </p>
                  
                  <p className="text-lg font-semibold text-gray-900">
                    {t.aboutPage.story.content.paragraph7}
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Missão, Visão e Valores */}
      <Section background="white" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.aboutPage.mission.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeInUp}>
                <Card className="p-8 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{t.aboutPage.mission.missionTitle}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {t.aboutPage.mission.missionDescription}
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-8 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{t.aboutPage.mission.visionTitle}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {t.aboutPage.mission.visionDescription}
                  </p>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.aboutPage.mission.valuesTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`p-6 h-full ${value.bgColor} border-0`}>
                      <div className={`w-12 h-12 ${value.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                        <value.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Como somos diferentes */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.aboutPage.differentiators.title}
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">{t.aboutPage.differentiators.otherTools}</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-primary-600">{t.aboutPage.differentiators.primeSdr}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { other: t.aboutPage.differentiators.items.automation.other, prime: t.aboutPage.differentiators.items.automation.prime, icon: Target },
                        { other: t.aboutPage.differentiators.items.support.other, prime: t.aboutPage.differentiators.items.support.prime, icon: Users },
                        { other: t.aboutPage.differentiators.items.guarantee.other, prime: t.aboutPage.differentiators.items.guarantee.prime, icon: Shield },
                        { other: t.aboutPage.differentiators.items.dashboard.other, prime: t.aboutPage.differentiators.items.dashboard.prime, icon: BarChart3 },
                        { other: t.aboutPage.differentiators.items.supportGeneric.other, prime: t.aboutPage.differentiators.items.supportGeneric.prime, icon: Phone },
                        { other: t.aboutPage.differentiators.items.banRisk.other, prime: t.aboutPage.differentiators.items.banRisk.prime, icon: CheckCircle }
                      ].map((item, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-4 px-6 text-sm text-gray-600">
                            {item.other}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-900 font-medium">
                            <div className="flex items-center space-x-2">
                              <item.icon className="w-4 h-4 text-primary-600" />
                              <span>{item.prime}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Números que comprovam */}
      <Section background="white" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.aboutPage.stats.title}
              </h2>
              <p className="text-xl text-gray-600">
                {t.aboutPage.stats.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <stat.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {stat.label}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Para quem servimos */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.aboutPage.segments.title}
              </h2>
              <p className="text-xl text-gray-600">
                {t.aboutPage.segments.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {segments.map((segment, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <segment.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {segment.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {segment.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Nossos compromissos */}
      <Section background="white" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.aboutPage.commitments.title}
              </h2>
              <p className="text-xl text-gray-600">
                {t.aboutPage.commitments.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <commitment.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {commitment.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {commitment.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Onde estamos */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {t.aboutPage.location.title}
                    </h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Building2 className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{t.aboutPage.location.company}</p>
                        <p className="text-gray-600">{t.aboutPage.location.cnpj}</p>
                        <p className="text-gray-600">{t.aboutPage.location.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">{t.aboutPage.location.region}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">{t.aboutPage.location.schedule}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">{t.aboutPage.location.email}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">{t.aboutPage.location.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">{t.aboutPage.location.website}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section background="primary" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {t.aboutPage.cta.title}
              </h2>
              
              <p className="text-xl text-primary-100 leading-relaxed">
                {t.aboutPage.cta.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactButton 
                  source="about-cta-primary"
                  size="lg" 
                  className="bg-white text-primary-600 hover:bg-gray-100"
                >
                  {t.aboutPage.cta.primaryButton}
                </ContactButton>
                <ContactButton 
                  source="about-cta-secondary"
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  {t.aboutPage.cta.secondaryButton}
                </ContactButton>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
