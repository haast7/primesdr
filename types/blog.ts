/**
 * Tipos para o blog (WordPress headless via WPGraphQL).
 * Alinhados ao retorno das queries em lib/queries.ts.
 */

export interface BlogCategory {
  slug: string;
  name: string;
  count?: number;
  description?: string | null;
}

export interface BlogPostListItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modified?: string;
  featuredImageUrl: string | null;
  categories: BlogCategory[];
}

export interface BlogPost extends BlogPostListItem {
  content: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string | null;
}

export interface ListPostsResponse {
  posts: BlogPostListItem[];
  pageInfo: PageInfo;
}

export interface ListCategoriesResponse {
  categories: BlogCategory[];
}

/** Categoria com seus primeiros N posts (para Content Hub). */
export interface BlogCategoryWithPosts extends BlogCategory {
  posts: BlogPostListItem[];
}
