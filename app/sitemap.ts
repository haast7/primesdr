import { MetadataRoute } from 'next';
import { routes } from '@/lib/routes';
import { getSiteUrl } from '@/lib/getSiteUrl';
import { getAllPostSlugsForSitemap, getAllCategorySlugsForSitemap } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl().replace(/\/$/, '');
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

  // Rotas estáticas para todos os idiomas
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

  // Blog: índice e posts/categorias (se WordPress disponível)
  try {
    sitemapEntries.push({
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    const postSlugs = await getAllPostSlugsForSitemap();
    postSlugs.forEach(({ slug, lastModified }) => {
      sitemapEntries.push({
        url: `${baseUrl}/blog/${slug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });

    const categorySlugs = await getAllCategorySlugsForSitemap();
    categorySlugs.forEach((slug) => {
      sitemapEntries.push({
        url: `${baseUrl}/blog/categoria/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  } catch (_e) {
    // Se WORDPRESS_GRAPHQL_URL não estiver configurado ou API falhar, apenas não inclui blog
  }

  return sitemapEntries;
}
