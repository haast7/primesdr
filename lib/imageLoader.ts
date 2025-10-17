// Sistema de carregamento de imagens otimizado para Vercel
import { StaticImageData } from 'next/image';

// Função para carregar imagens - usa paths relativos para melhor performance
export const loadImage = (src: string): string => {
  // Se já é uma URL completa, retorna como está
  if (src.startsWith('http')) {
    return src;
  }
  
  // Garante que o path comece com /
  return src.startsWith('/') ? src : `/${src}`;
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

// URLs das imagens principais - paths relativos para melhor performance
export const IMAGE_URLS = {
  logo: '/logoazul.png',
  logoWhite: '/logocompletabranca.png',
  logoBlack: '/logocompletapreta.png',
  favicon: '/favicon.ico',
  profile: '/per.png',
  whatsapp: '/icons/whatsapp.png',
  linkedin: '/icons/linkedin.png',
  instagram: '/icons/instagram.png',
  facebook: '/icons/facebook.png',
  twitter: '/icons/twitter.png',
  youtube: '/icons/youtube.png',
  tiktok: '/icons/tik-tok.png',
  email: '/icons/e-mail.png',
  call: '/icons/call.png',
} as const;
