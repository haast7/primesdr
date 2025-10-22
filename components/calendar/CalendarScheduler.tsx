'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Vendedor } from '@/lib/vendedores';
import { VendedorSelector } from './VendedorSelector';
import { getAllVendedores } from '@/lib/vendedores';

interface CalendarSchedulerProps {
  formData: any;
  onSchedule: (eventData: any) => void;
  onClose: () => void;
}

interface AvailableSlot {
  start: string;
  end: string;
  formatted: string;
}

export function CalendarScheduler({ formData, onSchedule, onClose }: CalendarSchedulerProps) {
  const [vendedores] = useState<Vendedor[]>(getAllVendedores());
  const [selectedVendedor, setSelectedVendedor] = useState<Vendedor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [availableSlots, setAvailableSlots] = useState<AvailableSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  // Definir data mínima (hoje)
  const today = new Date().toISOString().split('T')[0];

  // Buscar disponibilidade quando vendedor e data forem selecionados
  useEffect(() => {
    if (selectedVendedor && selectedDate) {
      fetchAvailability();
    }
  }, [selectedVendedor, selectedDate, fetchAvailability]);

  const fetchAvailability = useCallback(async () => {
    if (!selectedVendedor || !selectedDate) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/calendar/availability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vendedorId: selectedVendedor.id,
          date: selectedDate,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao buscar disponibilidade');
      }

      // Formatar slots disponíveis
      const formattedSlots = data.availableSlots.map((slot: string) => {
        const start = new Date(slot);
        const end = new Date(start);
        end.setMinutes(end.getMinutes() + selectedVendedor.meetingDuration);

        return {
          start: slot,
          end: end.toISOString(),
          formatted: start.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          }),
        };
      });

      setAvailableSlots(formattedSlots);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      setAvailableSlots([]);
    } finally {
      setLoading(false);
    }
  }, [selectedVendedor, selectedDate]);

  const handleSchedule = async () => {
    if (!selectedVendedor || !selectedSlot) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/calendar/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vendedorId: selectedVendedor.id,
          startTime: selectedSlot,
          clientName: formData.name,
          clientEmail: formData.email,
          clientPhone: `${formData.phoneCountry} ${formData.phoneNumber}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao agendar reunião');
      }

      // Chamar callback de sucesso
      onSchedule(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Agende sua reunião
        </h3>
        <p className="text-gray-600">
          Escolha um vendedor e horário disponível
        </p>
      </div>

      {/* Seleção de vendedor */}
      <VendedorSelector
        vendedores={vendedores}
        selectedVendedor={selectedVendedor}
        onSelectVendedor={setSelectedVendedor}
      />

      {/* Seleção de data */}
      {selectedVendedor && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Escolha a data *
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={today}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      )}

      {/* Horários disponíveis */}
      {selectedDate && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Horários disponíveis para {formatDate(selectedDate)}
          </label>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-gray-600">Buscando horários...</span>
            </div>
          ) : error ? (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="text-red-600">{error}</span>
            </div>
          ) : availableSlots.length === 0 ? (
            <div className="flex items-center gap-2 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-600">
                Nenhum horário disponível para esta data
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto">
              {availableSlots.map((slot) => (
                <button
                  key={slot.start}
                  type="button"
                  onClick={() => setSelectedSlot(slot.start)}
                  className={`p-3 text-center rounded-lg border-2 transition-colors ${
                    selectedSlot === slot.start
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Clock className="w-4 h-4 mx-auto mb-1" />
                  <div className="text-sm font-medium">{slot.formatted}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Botões de ação */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>
        
        <button
          type="button"
          onClick={handleSchedule}
          disabled={!selectedVendedor || !selectedSlot || loading}
          className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Agendando...
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4" />
              Agendar Reunião
            </>
          )}
        </button>
      </div>
    </div>
  );
}
