'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const clientLogos = [
  { name: 'Cliente 1', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/1.png?alt=media&token=e5ff13f9-d2ad-422f-94db-d6d80b297caa' },
  { name: 'Cliente 2', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/2.png?alt=media&token=78d45119-6f39-4ddc-b90e-3d3d8a2426a9' },
  { name: 'Cliente 3', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/3.png?alt=media&token=68721a73-d1b8-4af2-865a-29e376b98b89' },
  { name: 'Cliente 4', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/4.png.webp?alt=media&token=e0bc679b-d2bb-4336-b719-7f12a2e461a8' },
  { name: 'Cliente 5', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/5.png?alt=media&token=2521dce8-2667-4cf6-9c85-0ff3369aa809' },
  { name: 'Cliente 6', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/6.jpg?alt=media&token=6974823e-c6ca-4120-b5e3-0e32893c9b47' },
  { name: 'Cliente 7', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/7.jpg?alt=media&token=1ffd07c1-c5a2-4190-9ae8-8744a5c1631e' },
  { name: 'Cliente 8', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/8.png?alt=media&token=4bfe0d81-bd3b-48ad-a112-49de2cccde40' },
  { name: 'Cliente 9', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/9.png?alt=media&token=b26d6c7b-67f7-4b1f-9f35-3da7aef0e637' },
  { name: 'Cliente 10', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/10.png?alt=media&token=65e6a3a5-7fde-4a04-bfc7-4929ae99f825' },
  { name: 'Cliente 11', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/11.png?alt=media&token=1cd560df-07eb-4f0b-9f64-96f1812848d1' },
  { name: 'Cliente 12', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/12.png?alt=media&token=90c1af78-4935-4abb-b67a-cde62a0d350d' },
  { name: 'Cliente 13', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/13.png?alt=media&token=aabb4da4-e105-40d9-b7c6-e1358d1bc53f' },
  { name: 'Cliente 14', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/14.png?alt=media&token=8b017220-8ff8-4770-99ff-eec9b40c6c2d' },
  { name: 'Cliente 15', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/15.png?alt=media&token=96f100f9-051e-468e-8fcb-7fe670d0515f' },
];

export function ThiagoReisCases() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Empresas Que <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Confiam</span> no Prime SDR
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Centenas de empresas já transformaram seu LinkedIn em fonte de receita previsível
            </p>
          </motion.div>

          {/* Logos Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
          >
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-2xl"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={80}
                  className="h-12 w-auto md:h-16 object-contain"
                  quality={90}
                  unoptimized={false}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Message */}
          <motion.div
            variants={fadeInUp}
            className="text-center pt-8"
          >
            <p className="text-lg text-gray-600 font-medium">
              Junte-se a empresas que estão gerando resultados reais com prospecção no LinkedIn
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
