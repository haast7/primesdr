'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export function ProblemSection() {
  const { t } = useLanguage();
  const { headline, body, result } = t.problemSection;

  return (
    <Section background="gray" padding="lg">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {headline}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {body}
          </p>
          <p className="text-lg font-semibold text-gray-800">
            {result}
          </p>
        </div>
      </Container>
    </Section>
  );
}
