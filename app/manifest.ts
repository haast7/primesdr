import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const faviconUrl = process.env.NEXT_PUBLIC_FAVICON_URL || 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/favicon.ico.png?alt=media&token=9a716efd-67d9-4aa1-9688-abad42c347dd';

  return {
    name: 'Prime SDR',
    short_name: 'Prime SDR',
    description: 'Sistema de Prospecção Inteligente para Vendas',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: faviconUrl,
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: faviconUrl,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: faviconUrl,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
