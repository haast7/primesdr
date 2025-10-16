'use client';

import React from 'react';
import { TypeformButton } from '@/components/ui/TypeformButton';
import { Container } from '@/components/ui/Container';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen flex items-center">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
          Leads qualificados do LinkedIn na sua agenda.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ou seu dinheiro de volta.
            </span>
          </h1>
          
          <div className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            <p className="mb-6">
              112 reuniões qualificadas em 45 dias no seu comercial.
            </p>
            
            {/* Desktop: tópicos lado a lado */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 text-lg">
              <div className="flex items-start justify-center">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span className="text-left">Sem contratar SDR.</span>
              </div>
              <div className="flex items-start justify-center">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span className="text-left">Sem cadências manuais.</span>
              </div>
              <div className="flex items-start justify-center">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span className="text-left">Sem queimar budget em ads.</span>
              </div>
            </div>
            
            {/* Mobile: tópicos empilhados */}
            <ul className="md:hidden text-left space-y-2 text-lg max-w-sm mx-auto">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Sem contratar SDR ou inflar a equipe.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Sem perder tempo com cadências manuais.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Sem gastar com mídia paga que queima seu budget.
              </li>
            </ul>
          </div>
          <TypeformButton
            source="hero-main"
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            Quero 100+ reuniões em 45 dias
          </TypeformButton>
        </div>
      </Container>
    </section>
  );
}