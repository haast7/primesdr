'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, Building, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface CalendlyWidgetProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    role: string;
    mainPain: string;
    teamSize: string;
    meetingGoal: string;
  };
  onSchedule: (timeSlot: string) => void;
}

const timeSlots = [
  { time: '09:00', date: 'Hoje', available: true },
  { time: '10:30', date: 'Hoje', available: true },
  { time: '14:00', date: 'Hoje', available: false },
  { time: '15:30', date: 'Hoje', available: true },
  { time: '09:00', date: 'Amanhã', available: true },
  { time: '11:00', date: 'Amanhã', available: true },
  { time: '14:30', date: 'Amanhã', available: true },
  { time: '16:00', date: 'Amanhã', available: false },
];

export function CalendlyWidget({ formData, onSchedule }: CalendlyWidgetProps) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleSchedule = async () => {
    if (!selectedSlot) return;
    
    setIsConfirming(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    onSchedule(selectedSlot);
    setIsConfirming(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 border-2 border-blue-200"
    >
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Escolha um horário para sua demo
        </h3>
        <p className="text-gray-600">
          Demonstração personalizada de 15 minutos com base no seu perfil
        </p>
      </div>

      {/* Lead Info Summary */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <User className="w-4 h-4 mr-2" />
          Resumo do seu perfil
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-gray-700">{formData.email}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-gray-700">{formData.phone}</span>
          </div>
          <div className="flex items-center">
            <Building className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-gray-700">{formData.company}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-gray-700">{formData.role}</span>
          </div>
        </div>
      </div>

      {/* Time Slots */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          Horários disponíveis
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {timeSlots.map((slot, index) => (
            <motion.button
              key={index}
              onClick={() => slot.available && setSelectedSlot(`${slot.date} - ${slot.time}`)}
              disabled={!slot.available}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                selectedSlot === `${slot.date} - ${slot.time}`
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : slot.available
                  ? 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
              whileHover={slot.available ? { scale: 1.02 } : {}}
              whileTap={slot.available ? { scale: 0.98 } : {}}
            >
              <div className="text-sm font-medium">{slot.time}</div>
              <div className="text-xs text-gray-500">{slot.date}</div>
              {!slot.available && (
                <div className="text-xs text-red-500 mt-1">Indisponível</div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Demo Details */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-blue-900 mb-3">
          O que vamos mostrar na demo:
        </h4>
        <ul className="text-sm text-blue-800 space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Como resolver: <strong>{getPainLabel(formData.mainPain)}</strong>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Plano para gerar: <strong>{getMeetingGoalLabel(formData.meetingGoal)} reuniões/mês</strong>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            ROI esperado com seu time de <strong>{getTeamSizeLabel(formData.teamSize)} pessoas</strong>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Cases reais de clientes similares ao seu perfil
          </li>
        </ul>
      </div>

      {/* Schedule Button */}
      <Button
        onClick={handleSchedule}
        disabled={!selectedSlot || isConfirming}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
      >
        {isConfirming ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Agendando...
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5 mr-2" />
            Confirmar agendamento
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center mt-3">
        Você receberá um email de confirmação com o link do Google Meet
      </p>
    </motion.div>
  );
}

function getPainLabel(pain: string) {
  const labels: { [key: string]: string } = {
    'leads-desqualificados': 'Leads desqualificados',
    'nao-acesso-decisores': 'Não acessar decisores',
    'time-sem-tempo': 'Time sem tempo',
    'dependencia-midia-paga': 'Dependência de mídia paga'
  };
  return labels[pain] || pain;
}

function getMeetingGoalLabel(goal: string) {
  const labels: { [key: string]: string } = {
    '20-50': '20-50',
    '50-100': '50-100',
    '100-200': '100-200',
    '200+': '200+'
  };
  return labels[goal] || goal;
}

function getTeamSizeLabel(size: string) {
  const labels: { [key: string]: string } = {
    '1-3': '1-3',
    '4-10': '4-10',
    '11-25': '11-25',
    '26+': '26+'
  };
  return labels[size] || size;
}










