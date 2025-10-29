import { useEffect, useRef, useCallback } from 'react';

interface PartialFormData {
  [key: string]: string | number | boolean;
}

interface EnrichedFormData extends PartialFormData {
  formId: string;
  timestamp: string;
  timeOnForm: number;
  fieldsCompleted: number;
  isPartial?: boolean;
  isAbandoned?: boolean;
}

interface UsePartialFormCaptureOptions {
  formId: string;
  debounceMs?: number;
  onPartialData?: (data: EnrichedFormData) => void | Promise<void>;
  onFormAbandon?: (data: EnrichedFormData) => void | Promise<void>;
  minFieldsToCapture?: number;
}

export function usePartialFormCapture({
  formId,
  debounceMs = 2000,
  onPartialData,
  onFormAbandon,
  minFieldsToCapture = 2
}: UsePartialFormCaptureOptions) {
  const debounceTimeoutRef = useRef<NodeJS.Timeout>();
  const lastCapturedDataRef = useRef<PartialFormData>({});
  const formStartTimeRef = useRef<number>(Date.now());
  const isFormSubmittedRef = useRef<boolean>(false);

  // Função para capturar dados parciais
  const capturePartialData = useCallback((formData: PartialFormData) => {
    // Filtra apenas campos que têm valor
    const filledFields = Object.entries(formData).filter(([_, value]) => 
      value && value.trim() !== ''
    );

    // Só captura se tiver pelo menos o mínimo de campos preenchidos
    if (filledFields.length < minFieldsToCapture) {
      return;
    }

    const partialData = Object.fromEntries(filledFields);
    
    // Só envia se os dados mudaram
    if (JSON.stringify(partialData) !== JSON.stringify(lastCapturedDataRef.current)) {
      lastCapturedDataRef.current = partialData;
      
      // Adiciona metadados
      const enrichedData = {
        ...partialData,
        formId,
        timestamp: new Date().toISOString(),
        timeOnForm: Date.now() - formStartTimeRef.current,
        fieldsCompleted: filledFields.length,
        isPartial: true
      };

      onPartialData?.(enrichedData);
    }
  }, [formId, minFieldsToCapture, onPartialData]);

  // Função para capturar abandono do formulário
  const captureFormAbandon = useCallback(() => {
    if (!isFormSubmittedRef.current && Object.keys(lastCapturedDataRef.current).length >= minFieldsToCapture) {
      const abandonData = {
        ...lastCapturedDataRef.current,
        formId,
        timestamp: new Date().toISOString(),
        timeOnForm: Date.now() - formStartTimeRef.current,
        fieldsCompleted: Object.keys(lastCapturedDataRef.current).length,
        isAbandoned: true
      };

      onFormAbandon?.(abandonData);
    }
  }, [formId, minFieldsToCapture, onFormAbandon]);

  // Função para atualizar dados do formulário
  const updateFormData = useCallback((formData: PartialFormData) => {
    // Limpa timeout anterior
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Define novo timeout
    debounceTimeoutRef.current = setTimeout(() => {
      capturePartialData(formData);
    }, debounceMs);
  }, [capturePartialData, debounceMs]);

  // Função para marcar formulário como submetido
  const markFormSubmitted = useCallback(() => {
    isFormSubmittedRef.current = true;
  }, []);

  // Cleanup e detecção de abandono
  useEffect(() => {
    const handleBeforeUnload = () => {
      captureFormAbandon();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        captureFormAbandon();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [captureFormAbandon]);

  return {
    updateFormData,
    markFormSubmitted,
    capturePartialData
  };
}
