'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { HowItWorksHero } from '@/components/sections/HowItWorksHero';
import { ProcessOverview } from '@/components/sections/ProcessOverview';
import { ConfigurationStep } from '@/components/sections/ConfigurationStep';
import { ActivationStep } from '@/components/sections/ActivationStep';
import { ExecutionStep } from '@/components/sections/ExecutionStep';
import { OptimizationStep } from '@/components/sections/OptimizationStep';
import { SecuritySection } from '@/components/sections/SecuritySection';
import { DashboardSection } from '@/components/sections/DashboardSection';
import { TechnicalFAQ } from '@/components/sections/TechnicalFAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <ProcessOverview />
      <ConfigurationStep />
      <ActivationStep />
      <ExecutionStep />
      <OptimizationStep />
      <SecuritySection />
      <DashboardSection />
      <TechnicalFAQ />
      <FinalCTA />
    </>
  );
}









