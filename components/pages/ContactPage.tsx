'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Users, 
  Zap, 
  Shield,
  ArrowRight,
  Headphones
} from 'lucide-react';
import Image from 'next/image';
import { trackEvent } from '@/components/Analytics';

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

export function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    trackEvent('form_submit', {
      form_type: 'contact',
      form_location: 'contact_page'
    });

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: '/icons/e-mail.png',
      title: t.contactPage.methods.email.title,
      description: t.contactPage.methods.email.description,
      action: t.contactPage.methods.email.action,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100'
    },
    {
      icon: '/icons/whatsapp.png',
      title: t.contactPage.methods.whatsapp.title,
      description: t.contactPage.methods.whatsapp.description,
      action: t.contactPage.methods.whatsapp.action,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100'
    },
    {
      icon: '/icons/call.png',
      title: t.contactPage.methods.call.title,
      description: t.contactPage.methods.call.description,
      action: t.contactPage.methods.call.action,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: t.contactPage.benefits.specialists.title,
      description: t.contactPage.benefits.specialists.description
    },
    {
      icon: Zap,
      title: t.contactPage.benefits.fast.title,
      description: t.contactPage.benefits.fast.description
    },
    {
      icon: Shield,
      title: t.contactPage.benefits.noCommitment.title,
      description: t.contactPage.benefits.noCommitment.description
    }
  ];

  if (isSubmitted) {
    return (
      <Section background="white" padding="xl" className="min-h-screen flex items-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {t.contactPage.success.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t.contactPage.success.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                {t.contactPage.success.primaryButton}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                {t.contactPage.success.secondaryButton}
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600" />
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
                <Headphones className="w-5 h-5 mr-2" />
                {t.contactPage.hero.badge}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {t.contactPage.hero.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                {t.contactPage.hero.subtitle}
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section background="white" padding="lg">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-16"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t.contactPage.methods.title}
              </h2>
              <p className="text-xl text-gray-600">
                {t.contactPage.methods.subtitle}
              </p>
            </motion.div>

            {/* Contact Methods Grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className={`${method.bgColor} border-0 hover:shadow-xl transition-all duration-300 h-full`}>
                     <div className="p-8 text-center">
                       <div className={`w-16 h-16 ${method.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                         <Image
                           src={method.icon}
                           alt={`${method.title} icon`}
                           width={32}
                           height={32}
                           className="w-8 h-8 object-contain"
                         />
                       </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {method.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {method.description}
                      </p>
                      
                      <Button 
                        className={`bg-gradient-to-r ${method.color} hover:opacity-90 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 group-hover:scale-105`}
                        onClick={() => trackEvent('contact_method_click', { method: method.title })}
                      >
                        {method.action}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div variants={fadeInUp}>
                <Card className="p-8">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {t.contactPage.form.title}
                    </h3>
                    <p className="text-gray-600">
                      {t.contactPage.form.subtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t.contactPage.form.fields.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t.contactPage.form.fields.email}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t.contactPage.form.fields.phone}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t.contactPage.form.fields.company}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t.contactPage.form.fields.role}
                        </label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        >
                          <option value="">{t.contactPage.form.roleOptions.select}</option>
                          <option value="ceo">{t.contactPage.form.roleOptions.ceo}</option>
                          <option value="cmo">{t.contactPage.form.roleOptions.cmo}</option>
                          <option value="vendas">{t.contactPage.form.roleOptions.sales}</option>
                          <option value="marketing">{t.contactPage.form.roleOptions.marketing}</option>
                          <option value="comercial">{t.contactPage.form.roleOptions.commercial}</option>
                          <option value="outro">{t.contactPage.form.roleOptions.other}</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t.contactPage.form.fields.budget}
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        >
                          <option value="">{t.contactPage.form.budgetOptions.select}</option>
                          <option value="5k-10k">{t.contactPage.form.budgetOptions.range1}</option>
                          <option value="5k-10k">{t.contactPage.form.budgetOptions.range2}</option>
                          <option value="10k-20k">{t.contactPage.form.budgetOptions.range3}</option>
                          <option value="20k-50k">{t.contactPage.form.budgetOptions.range4}</option>
                          <option value="50k+">{t.contactPage.form.budgetOptions.range5}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.contactPage.form.fields.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                        placeholder={t.contactPage.form.messagePlaceholder}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          {t.contactPage.form.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {t.contactPage.form.submit}
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Benefits & Info */}
              <motion.div variants={fadeInUp} className="space-y-8">
                {/* Benefits */}
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t.contactPage.benefits.title}
                  </h3>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={benefit.title} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Contact Info */}
                <Card className="p-8 bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t.contactPage.contactInfo.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">{t.contactPage.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">{t.contactPage.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">{t.contactPage.contactInfo.address}</span>
                    </div>
                     <div className="flex items-center space-x-3">
                       <Clock className="w-5 h-5 text-primary-600" />
                       <span className="text-gray-700">{t.contactPage.contactInfo.schedule}</span>
                     </div>
                     
                     {/* Social Media Icons */}
                     <div className="pt-4 border-t border-gray-200">
                       <p className="text-sm font-semibold text-gray-700 mb-3">{t.contactPage.contactInfo.socialMedia}</p>
                       <div className="flex space-x-3">
                         <a 
                           href="https://linkedin.com/company/primesdr" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                           onClick={() => trackEvent('social_click', { platform: 'linkedin' })}
                         >
                           <Image
                             src="/icons/linkedin.png"
                            unoptimized
                             alt="LinkedIn"
                             width={32}
                             height={32}
                             className="w-8 h-8 object-contain"
                           />
                         </a>
                         <a 
                           href="https://instagram.com/primesdr" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                           onClick={() => trackEvent('social_click', { platform: 'instagram' })}
                         >
                           <Image
                            src="/icons/instagram.png"
                            alt="Instagram"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                            unoptimized
                           />
                         </a>
                         <a 
                           href="https://facebook.com/primesdr" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                           onClick={() => trackEvent('social_click', { platform: 'facebook' })}
                         >
                           <Image
                            src="/icons/facebook.png"
                            alt="Facebook"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                            unoptimized
                           />
                         </a>
                         <a 
                           href="https://twitter.com/primesdr" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                           onClick={() => trackEvent('social_click', { platform: 'twitter' })}
                         >
                           <Image
                            src="/icons/twitter.png"
                            alt="Twitter"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                            unoptimized
                           />
                         </a>
                         <a 
                           href="https://youtube.com/@primesdr" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                           onClick={() => trackEvent('social_click', { platform: 'youtube' })}
                         >
                           <Image
                            src="/icons/youtube.png"
                            alt="YouTube"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                            unoptimized
                           />
                         </a>
                         <a 
                           href="https://tiktok.com/@primesdr" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                           onClick={() => trackEvent('social_click', { platform: 'tiktok' })}
                         >
                           <Image
                            src="/icons/tik-tok.png"
                            alt="TikTok"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                            unoptimized
                           />
                         </a>
                       </div>
                     </div>
                   </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
