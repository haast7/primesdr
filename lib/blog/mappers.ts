/**
 * Mapeia respostas brutas do WPGraphQL para tipos do domínio (types/blog.ts).
 */

import type { BlogCategory, BlogPostListItem, BlogPost, PageInfo, BlogCategoryWithPosts } from '@/types/blog';

interface WpCategory {
  slug: string;
  name: string;
  count?: number;
  description?: string | null;
}

interface WpImageNode {
  sourceUrl: string;
  altText?: string | null;
}

interface WpPostNode {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modified?: string | null;
  featuredImage?: { node: WpImageNode } | null;
  categories?: { nodes: WpCategory[] } | null;
  content?: string;
}

function mapCategories(nodes: WpCategory[] | undefined): BlogCategory[] {
  if (!nodes || !Array.isArray(nodes)) return [];
  return nodes.map((n) => ({ slug: n.slug, name: n.name, count: n.count, description: n.description ?? undefined }));
}

function mapPostNode(node: WpPostNode, includeContent = false): BlogPostListItem | BlogPost {
  const categories = mapCategories(node.categories?.nodes);
  const featuredImageUrl = node.featuredImage?.node?.sourceUrl ?? null;
  const base = {
    id: node.id,
    slug: node.slug,
    title: node.title ?? '',
    excerpt: node.excerpt ?? '',
    date: node.date ?? '',
    modified: node.modified ?? undefined,
    featuredImageUrl,
    categories,
  };
  if (includeContent && 'content' in node && node.content !== undefined) {
    return { ...base, content: node.content ?? '' };
  }
  return base;
}

export function mapPostsList(data: {
  posts?: {
    pageInfo?: { hasNextPage?: boolean; endCursor?: string | null };
    nodes?: WpPostNode[];
  } | null;
}): { posts: BlogPostListItem[]; pageInfo: PageInfo } {
  const posts = data?.posts;
  const nodes = posts?.nodes ?? [];
  return {
    posts: nodes.map((n) => mapPostNode(n) as BlogPostListItem),
    pageInfo: {
      hasNextPage: posts?.pageInfo?.hasNextPage ?? false,
      endCursor: posts?.pageInfo?.endCursor ?? null,
    },
  };
}

export function mapPostBySlug(data: { post?: WpPostNode | null }): BlogPost | null {
  const node = data?.post;
  if (!node) return null;
  return mapPostNode({ ...node, content: node.content ?? '' }, true) as BlogPost;
}

export function mapCategoriesList(data: {
  categories?: { nodes?: WpCategory[] } | null;
}): BlogCategory[] {
  const nodes = data?.categories?.nodes ?? [];
  return nodes.map((n) => ({ slug: n.slug, name: n.name, count: n.count, description: n.description ?? undefined }));
}

export function mapPostsByCategory(data: {
  category?: {
    posts?: {
      pageInfo?: { hasNextPage?: boolean; endCursor?: string | null };
      nodes?: WpPostNode[];
    } | null;
  } | null;
}): { posts: BlogPostListItem[]; pageInfo: PageInfo } {
  const posts = data?.category?.posts;
  const nodes = posts?.nodes ?? [];
  return {
    posts: nodes.map((n) => mapPostNode(n) as BlogPostListItem),
    pageInfo: {
      hasNextPage: posts?.pageInfo?.hasNextPage ?? false,
      endCursor: posts?.pageInfo?.endCursor ?? null,
    },
  };
}

export function mapRecentPosts(data: { posts?: { nodes?: WpPostNode[] } | null }): BlogPostListItem[] {
  const nodes = data?.posts?.nodes ?? [];
  return nodes.map((n) => mapPostNode(n) as BlogPostListItem);
}

interface WpCategoryWithPostsNode {
  slug: string;
  name: string;
  count?: number;
  posts?: { nodes?: WpPostNode[] } | null;
}

export function mapCategoriesWithPosts(data: {
  categories?: { nodes?: WpCategoryWithPostsNode[] } | null;
}): BlogCategoryWithPosts[] {
  const nodes = data?.categories?.nodes ?? [];
  return nodes
    .filter((c) => (c.posts?.nodes?.length ?? 0) > 0)
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      count: c.count,
      posts: (c.posts?.nodes ?? []).map((n) => mapPostNode(n) as BlogPostListItem),
    }));
}
