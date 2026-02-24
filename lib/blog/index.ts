/**
 * API do blog: fetch de posts e categorias via WPGraphQL.
 * Usar em Server Components (app/blog/...).
 */

import { fetchGraphQL } from '@/lib/wpgraphql';
import {
  LIST_POSTS,
  POST_BY_SLUG,
  LIST_CATEGORIES,
  POSTS_BY_CATEGORY_SLUG,
  RECENT_POSTS,
  LIST_CATEGORIES_WITH_POSTS,
  ALL_POST_SLUGS_AND_DATES,
  ALL_CATEGORY_SLUGS,
} from './queries';
import {
  mapPostsList,
  mapPostBySlug,
  mapCategoriesList,
  mapPostsByCategory,
  mapRecentPosts,
  mapCategoriesWithPosts,
} from './mappers';
import type { BlogPost, BlogPostListItem, BlogCategory, BlogCategoryWithPosts } from '@/types/blog';
import type { PageInfo } from '@/types/blog';

const DEFAULT_PAGE_SIZE = 12;

export async function listPosts(options?: {
  first?: number;
  after?: string | null;
}): Promise<{ posts: BlogPostListItem[]; pageInfo: PageInfo }> {
  const first = options?.first ?? DEFAULT_PAGE_SIZE;
  const data = await fetchGraphQL<unknown>(LIST_POSTS, {
    first,
    after: options?.after ?? null,
  });
  return mapPostsList(data as Parameters<typeof mapPostsList>[0]);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await fetchGraphQL<unknown>(POST_BY_SLUG, { slug });
  return mapPostBySlug(data as Parameters<typeof mapPostBySlug>[0]);
}

export async function listCategories(): Promise<BlogCategory[]> {
  const data = await fetchGraphQL<unknown>(LIST_CATEGORIES);
  return mapCategoriesList(data as Parameters<typeof mapCategoriesList>[0]);
}

export async function getCategoryBySlug(slug: string): Promise<{ name: string; slug: string } | null> {
  const categories = await listCategories();
  const cat = categories.find((c) => c.slug === slug);
  return cat ? { name: cat.name, slug: cat.slug } : null;
}

export async function listPostsByCategory(
  categorySlug: string,
  options?: { first?: number; after?: string | null }
): Promise<{ posts: BlogPostListItem[]; pageInfo: PageInfo }> {
  const first = options?.first ?? DEFAULT_PAGE_SIZE;
  const data = await fetchGraphQL<unknown>(POSTS_BY_CATEGORY_SLUG, {
    slug: categorySlug,
    first,
    after: options?.after ?? null,
  });
  return mapPostsByCategory(data as Parameters<typeof mapPostsByCategory>[0]);
}

export async function getRecentPosts(count: number, excludeSlug?: string): Promise<BlogPostListItem[]> {
  const data = await fetchGraphQL<unknown>(RECENT_POSTS, { first: count + (excludeSlug ? 1 : 0) });
  let list = mapRecentPosts(data as Parameters<typeof mapRecentPosts>[0]);
  if (excludeSlug) {
    list = list.filter((p) => p.slug !== excludeSlug).slice(0, count);
  } else {
    list = list.slice(0, count);
  }
  return list;
}

const POSTS_PER_CATEGORY = 3;

/** Categorias com até 3 posts cada (para Content Hub). */
export async function listCategoriesWithPosts(): Promise<BlogCategoryWithPosts[]> {
  const data = await fetchGraphQL<unknown>(LIST_CATEGORIES_WITH_POSTS, {
    postsPerCategory: POSTS_PER_CATEGORY,
  });
  return mapCategoriesWithPosts(data as Parameters<typeof mapCategoriesWithPosts>[0]);
}

/** Tipo da resposta da query ALL_POST_SLUGS_AND_DATES (para sitemap). */
interface AllPostSlugsResponse {
  posts?: {
    pageInfo?: { hasNextPage?: boolean; endCursor?: string | null };
    nodes?: { slug: string; modified?: string | null; date?: string }[];
  };
}

/** Para sitemap: todos os slugs de posts com data de modificação. */
export async function getAllPostSlugsForSitemap(): Promise<
  { slug: string; lastModified: Date }[]
> {
  const results: { slug: string; lastModified: Date }[] = [];
  let after: string | null = null;
  const pageSize = 100;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const data: AllPostSlugsResponse = await fetchGraphQL<AllPostSlugsResponse>(
      ALL_POST_SLUGS_AND_DATES,
      { first: pageSize, after }
    );
    const nodes = data?.posts?.nodes ?? [];
    for (const n of nodes) {
      const d = n.modified || n.date;
      results.push({
        slug: n.slug,
        lastModified: d ? new Date(d) : new Date(),
      });
    }
    const hasNext = data?.posts?.pageInfo?.hasNextPage;
    const endCursor = data?.posts?.pageInfo?.endCursor;
    if (!hasNext || !endCursor) break;
    after = endCursor;
  }
  return results;
}

/** Para sitemap: todos os slugs de categorias. */
export async function getAllCategorySlugsForSitemap(): Promise<string[]> {
  const data = await fetchGraphQL<{
    categories?: { nodes?: { slug: string }[] };
  }>(ALL_CATEGORY_SLUGS);
  const nodes = data?.categories?.nodes ?? [];
  return nodes.map((n) => n.slug);
}
