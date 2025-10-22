'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home, Construction, Wrench, Hammer, HardHat } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Construction Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.2 
          }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            {/* Construction Hat */}
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
            >
              <HardHat className="w-16 h-16 text-yellow-500" />
            </motion.div>
            
            {/* Construction Tools */}
            <motion.div
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-8 left-4"
            >
              <Hammer className="w-8 h-8 text-orange-500" />
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: [0, -15, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-6 right-4"
            >
              <Wrench className="w-8 h-8 text-blue-500" />
            </motion.div>
            
            {/* Construction Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-12 left-1/2 transform -translate-x-1/2"
            >
              <Construction className="w-12 h-12 text-gray-600" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-6xl font-bold text-gray-900 mb-4"
          >
            🚧
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Em Construção
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-xl text-gray-600 mb-8"
          >
            Estamos trabalhando duro para trazer algo incrível!
          </motion.p>

          {/* Animated Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center space-x-2 mb-8"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
                className="w-3 h-3 bg-blue-500 rounded-full"
              />
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="space-y-4"
          >
            <p className="text-gray-500 text-lg">
              Esta página está sendo construída com muito cuidado e atenção aos detalhes.
            </p>
            <p className="text-gray-400">
              Em breve estará pronta para você!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Link href="/">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Voltar ao Início</span>
              </Button>
            </Link>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Página Anterior</span>
            </Button>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-12"
          >
            <div className="text-sm text-gray-500 mb-2">Progresso da Construção</div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ 
                  duration: 2,
                  delay: 2,
                  ease: "easeOut"
                }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </div>
            <div className="text-xs text-gray-400 mt-2">75% concluído</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
