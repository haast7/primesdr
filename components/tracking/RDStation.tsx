'use client';

import Script from 'next/script';
import { useEffect } from 'react';

/**
 * Componente de tracking do RD Station Marketing
 * 
 * Este componente carrega o script do RD Station que detecta automaticamente
 * formulários HTML na página e rastreia conversões.
 * 
 * Requisitos para o RD Station detectar formulários:
 * 1. Formulário deve estar dentro de tags <form></form>
 * 2. Campo de email deve ter type="email" ou name="email"
 * 3. Botão de submit deve ter type="submit"
 * 4. Formulário NÃO pode estar dentro de iframe
 */
export function RDStation() {
  useEffect(() => {
    // O script do RD Station será carregado via Script component abaixo
    // Este useEffect pode ser usado para inicializações adicionais se necessário
    
    if (typeof window !== 'undefined') {
      // Log para debug (remover em produção se necessário)
      console.log('RD Station tracking inicializado');
    }
  }, []);

  return (
    <>
      {/* RD Station Marketing Script - Tracking automático de formulários */}
      <Script
        id="rd-station-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var rdScript = document.createElement('script');
              rdScript.type = 'text/javascript';
              rdScript.async = true;
              rdScript.src = 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/4f200a9d-f5c6-447a-ae31-6893da4d4e04-loader.js';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(rdScript, s);
            })();
          `,
        }}
      />
    </>
  );
}
