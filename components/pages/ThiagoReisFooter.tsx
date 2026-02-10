'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';
import { IMAGE_URLS } from '@/lib/imageLoader';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/primesdr/',
    icon: '/icons/linkedin.png'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@primesdr',
    icon: '/icons/youtube.png'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/primesdr',
    icon: '/icons/instagram.png'
  },
  {
    name: 'Facebook',
    href: 'https://www.instagram.com/primesdr',
    icon: '/icons/facebook.png'
  }
];

export function ThiagoReisFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Saiba Mais Sobre Nós
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Conecte-se conosco nas redes sociais e descubra mais sobre como podemos ajudar sua empresa
            </p>
          </motion.div>

          {/* Logo */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <ImageWithFallback
                src={IMAGE_URLS.logoWhite}
                alt="Prime SDR"
                width={120}
                height={40}
                className="h-10 w-auto transition-opacity group-hover:opacity-80"
                fallback="/logocompletabranca.png"
              />
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Homepage Link */}
          <motion.div variants={fadeInUp} className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Voltar para Homepage
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
}
