'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BlogHero } from './BlogHero';
import { BlogFeaturedPost } from './BlogFeaturedPost';
import { BlogExploreCategories } from './BlogExploreCategories';
import { BlogPostCard } from './BlogPostCard';
import { BlogStrategicBlock } from './BlogStrategicBlock';
import { BlogCtaFinal } from './BlogCtaFinal';
import { excerptAsPlainText } from '@/lib/blog/format';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { BlogPostListItem } from '@/types/blog';
import type { BlogCategory } from '@/types/blog';

interface BlogHubProps {
  /** Posts da página atual (server-side pagination). */
  posts: BlogPostListItem[];
  /** URLs para paginação (null quando não há). */
  nextUrl: string | null;
  prevUrl: string | null;
  /** Se true, é a primeira página (mostra post em destaque). */
  isFirstPage: boolean;
  /** Categorias para a seção "Explore por categoria". */
  categories: BlogCategory[];
}

function filterPostsByQuery(
  posts: BlogPostListItem[],
  query: string
): BlogPostListItem[] {
  if (!query.trim()) return posts;
  const q = query.trim().toLowerCase();
  return posts.filter((p) => {
    const title = p.title.toLowerCase();
    const excerpt = excerptAsPlainText(p.excerpt, 500).toLowerCase();
    return title.includes(q) || excerpt.includes(q);
  });
}

export function BlogHub({
  posts,
  nextUrl,
  prevUrl,
  isFirstPage,
  categories,
}: BlogHubProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(
    () => filterPostsByQuery(posts, searchQuery),
    [posts, searchQuery]
  );

  const hasSearch = searchQuery.trim() !== '';
  const featuredPost = isFirstPage && !hasSearch ? posts[0] ?? null : null;
  const gridPosts = hasSearch
    ? filteredPosts
    : isFirstPage && posts.length > 1
      ? posts.slice(1)
      : posts;
  const showEmptyState = hasSearch && filteredPosts.length === 0;

  return (
    <>
      <BlogHero searchValue={searchQuery} onSearchChange={setSearchQuery} />

      <Container className="py-12 md:py-16 space-y-14 md:space-y-18">
        {showEmptyState && (
          <p className="text-center text-gray-500 py-12">
            Nenhum artigo encontrado para &quot;{searchQuery}&quot;. Tente outros
            termos.
          </p>
        )}

        {!showEmptyState && featuredPost && (
          <section aria-labelledby="featured-heading">
            <h2 id="featured-heading" className="sr-only">
              Artigo em destaque
            </h2>
            <BlogFeaturedPost post={featuredPost} />
          </section>
        )}

        {categories.length > 0 && !showEmptyState && (
          <BlogExploreCategories categories={categories} />
        )}

        {gridPosts.length > 0 && (
          <section aria-labelledby="recent-heading">
            <h2 id="recent-heading" className="text-2xl font-bold text-gray-900 mb-8">
              {hasSearch ? 'Resultados da busca' : 'Artigos recentes'}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <li key={post.id}>
                  <BlogPostCard post={post} />
                </li>
              ))}
            </ul>
            {!hasSearch && (nextUrl || prevUrl) && (
              <nav
                className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200"
                aria-label="Paginação do blog"
              >
                {prevUrl ? (
                  <Link
                    href={prevUrl}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    Anterior
                  </Link>
                ) : (
                  <span />
                )}
                {nextUrl ? (
                  <Link
                    href={nextUrl}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium ml-auto"
                  >
                    Próxima
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            )}
          </section>
        )}

        <BlogStrategicBlock />

        <BlogCtaFinal />
      </Container>
    </>
  );
}
