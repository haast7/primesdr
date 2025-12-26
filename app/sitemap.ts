import { MetadataRoute } from 'next';
import { routes } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.primesdr.com';
  const routesList = [
    { key: 'home', changeFrequency: 'daily' as const, priority: 1.0 },
    { key: 'sobre', changeFrequency: 'monthly' as const, priority: 0.9 },
    { key: 'como-funciona', changeFrequency: 'monthly' as const, priority: 0.9 },
    { key: 'precos', changeFrequency: 'monthly' as const, priority: 0.9 },
    { key: 'recursos', changeFrequency: 'weekly' as const, priority: 0.9 },
    { key: 'contato', changeFrequency: 'monthly' as const, priority: 0.5 },
    { key: 'termos', changeFrequency: 'yearly' as const, priority: 0.1 },
    { key: 'privacidade', changeFrequency: 'yearly' as const, priority: 0.1 },
    { key: 'cookies', changeFrequency: 'yearly' as const, priority: 0.1 },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Adicionar todas as rotas para todos os idiomas
  ['pt', 'en', 'es'].forEach((locale) => {
    routesList.forEach((route) => {
      const routePath = routes[locale as 'pt' | 'en' | 'es'][route.key];
      if (routePath) {
        sitemapEntries.push({
          url: `${baseUrl}${routePath}`,
          lastModified: new Date(),
          changeFrequency: route.changeFrequency,
          priority: route.priority,
        });
      }
    });
  });

  return sitemapEntries;
}





