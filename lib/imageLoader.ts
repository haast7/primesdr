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

// URLs das imagens principais - Firebase Storage para garantir carregamento
export const IMAGE_URLS = {
  logo: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/so%20logo%20azul.png?alt=media&token=98e81c21-5aff-4f1a-abc5-014a581cfcaa',
  logoWhite: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/logo_light.png?alt=media&token=4a6699f4-f27c-422e-a7dd-38056b04e128',
  logoBlack: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/logo_full_light.png?alt=media&token=a1e5fb66-e3d2-4a6c-ae9f-f3750c38353d',
  favicon: '/favicon.ico', // Mantém local
  profile: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/per.png?alt=media&token=0b386c22-6c2e-4dc3-8e06-8cf5350910b5',
  whatsapp: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/whatsapp.png?alt=media&token=d6aafa59-870f-4613-981a-6c91c4e3a7a6',
  linkedin: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/linkedin.png?alt=media&token=d88c4827-58a6-412e-ac0b-1517d2416125',
  instagram: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/instagram.png?alt=media&token=0ad1489b-2ff2-48da-8570-cc4405dc4846',
  facebook: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/facebook.png?alt=media&token=94c4f6d6-ab16-47c7-86d0-e0e2da1ba06e',
  twitter: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/twitter.png?alt=media&token=083d87a2-273f-41bb-9174-f08054da9049',
  youtube: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/youtube.png?alt=media&token=d9f5e8bc-ff9c-49e5-9315-3be8055d549c',
  tiktok: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/tik-tok.png?alt=media&token=82f42b35-0b5f-4203-833c-5e793765a432',
  email: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/e-mail.png?alt=media&token=2107d4d9-e511-48bc-af5c-789d7e53bd13',
  call: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/call.png?alt=media&token=a659ed57-0bd4-4c45-8143-63d286c0f067',
} as const;
