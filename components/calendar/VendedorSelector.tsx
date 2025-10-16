'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, User, Clock, MapPin } from 'lucide-react';
import { Vendedor } from '@/lib/vendedores';

interface VendedorSelectorProps {
  vendedores: Vendedor[];
  selectedVendedor: Vendedor | null;
  onSelectVendedor: (vendedor: Vendedor) => void;
}

export function VendedorSelector({ 
  vendedores, 
  selectedVendedor, 
  onSelectVendedor 
}: VendedorSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const formatWorkingHours = (vendedor: Vendedor) => {
    return `${vendedor.workingHours.start} - ${vendedor.workingHours.end}`;
  };

  const formatWorkingDays = (vendedor: Vendedor) => {
    const daysMap: { [key: string]: string } = {
      monday: 'Seg',
      tuesday: 'Ter',
      wednesday: 'Qua',
      thursday: 'Qui',
      friday: 'Sex',
      saturday: 'Sáb',
      sunday: 'Dom'
    };
    
    return vendedor.workingHours.days
      .map(day => daysMap[day])
      .join(', ');
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Escolha seu vendedor *
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors bg-white text-left"
      >
        {selectedVendedor ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">
                  {selectedVendedor.name}
                </div>
                <div className="text-sm text-gray-500">
                  {formatWorkingHours(selectedVendedor)} • {formatWorkingDays(selectedVendedor)}
                </div>
              </div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Selecione um vendedor</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        )}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto"
        >
          {vendedores.map((vendedor) => (
            <button
              key={vendedor.id}
              type="button"
              onClick={() => {
                onSelectVendedor(vendedor);
                setIsOpen(false);
              }}
              className={`w-full p-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                selectedVendedor?.id === vendedor.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">
                    {vendedor.name}
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    {vendedor.email}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatWorkingHours(vendedor)}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {formatWorkingDays(vendedor)}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
