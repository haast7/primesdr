// Sistema de carregamento de imagens otimizado para Vercel
import { StaticImageData } from 'next/image';

// URLs base para diferentes ambientes
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://primesdr.vercel.app';
};

// Função para carregar imagens com fallback
export const loadImage = (src: string): string => {
  const baseUrl = getBaseUrl();
  
  // Se já é uma URL completa, retorna como está
  if (src.startsWith('http')) {
    return src;
  }
  
  // Remove barra inicial se existir
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  
  // Retorna URL completa
  return `${baseUrl}/${cleanSrc}`;
};

// Função para verificar se a imagem existe
export const checkImageExists = async (src: string): Promise<boolean> => {
  try {
    const response = await fetch(src, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Função para carregar imagem com fallback
export const loadImageWithFallback = async (src: string, fallback?: string): Promise<string> => {
  const imageUrl = loadImage(src);
  
  try {
    const exists = await checkImageExists(imageUrl);
    if (exists) {
      return imageUrl;
    }
  } catch {
    // Ignora erro de verificação
  }
  
  // Retorna fallback se fornecido
  if (fallback) {
    return loadImage(fallback);
  }
  
  // Retorna URL original se não há fallback
  return imageUrl;
};

// URLs das imagens principais com fallbacks
export const IMAGE_URLS = {
  logo: loadImage('logoazul.png'),
  logoWhite: loadImage('logocompletabranca.png'),
  logoBlack: loadImage('logocompletapreta.png'),
  favicon: loadImage('favicon.ico'),
  profile: loadImage('per.png'),
  whatsapp: loadImage('icons/whatsapp.png'),
  linkedin: loadImage('icons/linkedin.png'),
  instagram: loadImage('icons/instagram.png'),
  facebook: loadImage('icons/facebook.png'),
  twitter: loadImage('icons/twitter.png'),
  youtube: loadImage('icons/youtube.png'),
  tiktok: loadImage('icons/tik-tok.png'),
  email: loadImage('icons/e-mail.png'),
  call: loadImage('icons/call.png'),
} as const;
