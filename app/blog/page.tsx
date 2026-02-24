import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { listPosts, listCategories } from '@/lib/blog';
import { getSiteUrl } from '@/lib/getSiteUrl';
import { BlogHub } from '@/components/blog/BlogHub';

const PAGE_SIZE = 12;
const BASE_PATH = '/blog';

export const metadata: Metadata = {
  title: 'Blog | Prime SDR',
  description:
    'Conteúdo para times B2B: prospecção, SDR, LinkedIn e vendas. Artigos, guias e cases da Prime SDR.',
  alternates: {
    canonical: `${getSiteUrl()}/blog`,
  },
  openGraph: {
    title: 'Blog | Prime SDR',
    description:
      'Conteúdo para times B2B: prospecção, SDR, LinkedIn e vendas. Artigos, guias e cases da Prime SDR.',
    url: `${getSiteUrl()}/blog`,
    type: 'website',
    siteName: 'Prime SDR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Prime SDR',
    description:
      'Conteúdo para times B2B: prospecção, SDR, LinkedIn e vendas. Artigos, guias e cases da Prime SDR.',
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ after?: string }>;
}) {
  const { after } = await searchParams;
  const cursor = after && after !== '' ? decodeURIComponent(after) : null;

  let postsResult;
  try {
    postsResult = await listPosts({ first: PAGE_SIZE, after: cursor });
  } catch (e) {
    console.error('Blog list error:', e);
    notFound();
  }

  const { posts, pageInfo } = postsResult;
  let categories: Awaited<ReturnType<typeof listCategories>> = [];
  try {
    categories = await listCategories();
  } catch {
    // opcional: hub funciona sem categorias
  }

  const nextUrl =
    pageInfo.hasNextPage && pageInfo.endCursor
      ? `${BASE_PATH}?after=${encodeURIComponent(pageInfo.endCursor)}`
      : null;
  const prevUrl = cursor ? BASE_PATH : null;
  const isFirstPage = !cursor;

  return (
    <BlogHub
      posts={posts}
      nextUrl={nextUrl}
      prevUrl={prevUrl}
      isFirstPage={isFirstPage}
      categories={categories}
    />
  );
}
