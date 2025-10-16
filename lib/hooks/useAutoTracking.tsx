'use client';

import { useEffect } from 'react';
import { useCookieTracking } from './useCookieTracking';

export function useAutoTracking() {
  const {
    trackPageView,
    trackScroll,
    trackTimeOnPage,
    trackExternalLink,
    trackDownload
  } = useCookieTracking();

  // Rastreamento automático de page view
  useEffect(() => {
    const pageName = document.title || 'Página sem título';
    const pageCategory = getPageCategory();
    
    trackPageView(pageName, pageCategory);
  }, [trackPageView]);

  // Rastreamento automático de scroll
  useEffect(() => {
    const scrollEvents = new Set<number>();
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Rastrear marcos de scroll (25%, 50%, 75%, 100%)
      const milestones = [25, 50, 75, 100];
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollEvents.has(milestone)) {
          scrollEvents.add(milestone);
          trackScroll(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScroll]);

  // Rastreamento automático de tempo na página
  useEffect(() => {
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) { // Só rastrear se ficou mais de 5 segundos
        trackTimeOnPage(timeSpent);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent > 5) {
          trackTimeOnPage(timeSpent);
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [trackTimeOnPage]);

  // Rastreamento automático de links externos
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link) {
        const href = link.getAttribute('href');
        const linkText = link.textContent?.trim() || 'Link sem texto';
        
        if (href && isExternalLink(href)) {
          trackExternalLink(href, linkText);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [trackExternalLink]);

  // Rastreamento automático de downloads
  useEffect(() => {
    const handleDownloadClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link) {
        const href = link.getAttribute('href');
        
        if (href && isDownloadLink(href)) {
          const fileName = getFileNameFromUrl(href);
          const fileType = getFileTypeFromUrl(href);
          trackDownload(fileName, fileType);
        }
      }
    };

    document.addEventListener('click', handleDownloadClick);
    return () => document.removeEventListener('click', handleDownloadClick);
  }, [trackDownload]);

  return null;
}

// Funções auxiliares
function getPageCategory(): string {
  const path = window.location.pathname;
  
  if (path === '/') return 'Home';
  if (path.startsWith('/como-funciona')) return 'Como Funciona';
  if (path.startsWith('/precos')) return 'Preços';
  if (path.startsWith('/recursos')) return 'Recursos';
  if (path.startsWith('/sobre')) return 'Sobre';
  if (path.startsWith('/contato')) return 'Contato';
  if (path.startsWith('/privacidade')) return 'Privacidade';
  if (path.startsWith('/termos')) return 'Termos';
  if (path.startsWith('/cookies')) return 'Cookies';
  
  return 'Outras';
}

function isExternalLink(href: string): boolean {
  try {
    const url = new URL(href, window.location.origin);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

function isDownloadLink(href: string): boolean {
  const downloadExtensions = [
    '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
    '.zip', '.rar', '.7z', '.tar', '.gz',
    '.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp',
    '.mp4', '.avi', '.mov', '.wmv', '.flv',
    '.mp3', '.wav', '.flac', '.aac',
    '.exe', '.msi', '.dmg', '.pkg'
  ];
  
  return downloadExtensions.some(ext => href.toLowerCase().includes(ext));
}

function getFileNameFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const fileName = pathname.split('/').pop() || 'arquivo';
    return fileName;
  } catch {
    return 'arquivo';
  }
}

function getFileTypeFromUrl(url: string): string {
  const extension = url.split('.').pop()?.toLowerCase() || 'unknown';
  
  const typeMap: { [key: string]: string } = {
    'pdf': 'PDF',
    'doc': 'Word',
    'docx': 'Word',
    'xls': 'Excel',
    'xlsx': 'Excel',
    'ppt': 'PowerPoint',
    'pptx': 'PowerPoint',
    'zip': 'Arquivo',
    'rar': 'Arquivo',
    'jpg': 'Imagem',
    'jpeg': 'Imagem',
    'png': 'Imagem',
    'gif': 'Imagem',
    'mp4': 'Vídeo',
    'mp3': 'Áudio'
  };
  
  return typeMap[extension] || extension.toUpperCase();
}

