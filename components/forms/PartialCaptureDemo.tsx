'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { usePartialFormCapture } from '@/lib/hooks/usePartialFormCapture';

interface PartialCaptureDemoProps {
  className?: string;
}

export function PartialCaptureDemo({ className = '' }: PartialCaptureDemoProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [capturedData, setCapturedData] = useState<any[]>([]);

  const { updateFormData, markFormSubmitted } = usePartialFormCapture({
    formId: 'demo-form',
    debounceMs: 1000,
    minFieldsToCapture: 1,
    onPartialData: (data) => {
      setCapturedData(prev => [...prev, { ...data, type: 'partial' }]);
      console.log('📊 Dados parciais capturados:', data);
    },
    onFormAbandon: (data) => {
      setCapturedData(prev => [...prev, { ...data, type: 'abandoned' }]);
      console.log('🚨 Formulário abandonado:', data);
    }
  });

  const handleInputChange = (field: string, value: string) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    updateFormData(newFormData);
  };

  const handleSubmit = () => {
    markFormSubmitted();
    setCapturedData(prev => [...prev, { ...formData, type: 'completed' }]);
    console.log('✅ Formulário completado:', formData);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Demo: Captura de Dados Parciais</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu nome"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Empresa
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua empresa"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu telefone"
            />
          </div>
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Enviar Formulário
        </button>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Dados Capturados em Tempo Real</h3>
        
        {capturedData.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Comece a digitar nos campos acima para ver a captura em tempo real...
          </p>
        ) : (
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {capturedData.map((data, index) => (
              <div
                key={index}
                className={`p-3 rounded-md text-sm ${
                  data.type === 'abandoned' 
                    ? 'bg-red-50 border border-red-200' 
                    : data.type === 'completed'
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-blue-50 border border-blue-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">
                    {data.type === 'abandoned' && '🚨 Abandono'}
                    {data.type === 'completed' && '✅ Completado'}
                    {data.type === 'partial' && '📊 Dados Parciais'}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(data.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                
                <div className="text-xs text-gray-600">
                  <div>Campos preenchidos: {data.fieldsCompleted}</div>
                  <div>Tempo no formulário: {Math.round(data.timeOnForm / 1000)}s</div>
                  
                  {Object.entries(data).map(([key, value]) => {
                    if (['formId', 'timestamp', 'type', 'fieldsCompleted', 'timeOnForm', 'isPartial', 'isAbandoned'].includes(key)) {
                      return null;
                    }
                    return (
                      <div key={key} className="truncate">
                        <strong>{key}:</strong> {String(value)}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
