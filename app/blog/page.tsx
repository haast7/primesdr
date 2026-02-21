import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { listPosts, listCategories } from '@/lib/blog';
import { getSiteUrl } from '@/lib/getSiteUrl';
import { formatDateUtc, excerptAsPlainText } from '@/lib/blog/format';
import { ChevronLeft, ChevronRight, Calendar, Folder } from 'lucide-react';

const PAGE_SIZE = 12;
const BASE_PATH = '/blog';

export const metadata: Metadata = {
  title: 'Blog | Prime SDR',
  description:
    'Artigos sobre prospecção B2B, LinkedIn, SDR e vendas. Dicas e cases da Prime SDR.',
  alternates: {
    canonical: `${getSiteUrl()}/blog`,
  },
  openGraph: {
    title: 'Blog | Prime SDR',
    description:
      'Artigos sobre prospecção B2B, LinkedIn, SDR e vendas. Dicas e cases da Prime SDR.',
    url: `${getSiteUrl()}/blog`,
    type: 'website',
    siteName: 'Prime SDR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Prime SDR',
    description:
      'Artigos sobre prospecção B2B, LinkedIn, SDR e vendas. Dicas e cases da Prime SDR.',
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
    // optional
  }

  const nextUrl =
    pageInfo.hasNextPage && pageInfo.endCursor
      ? `${BASE_PATH}?after=${encodeURIComponent(pageInfo.endCursor)}`
      : null;
  const prevUrl = cursor ? BASE_PATH : null;

  return (
    <>
      <section className="bg-gradient-to-b from-primary-50/50 to-white border-b border-gray-200">
        <Container className="py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Blog Prime SDR
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Prospecção B2B, LinkedIn, SDR e vendas. Dicas, cases e novidades.
          </p>
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full bg-primary-600 text-white px-4 py-2 text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                Todos
              </Link>
              {categories.slice(0, 10).map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/categoria/${cat.slug}`}
                  className="inline-flex items-center rounded-full bg-white border border-gray-200 text-gray-700 px-4 py-2 text-sm font-medium hover:border-primary-300 hover:text-primary-600 transition-colors"
                >
                  <Folder className="h-4 w-4 mr-1.5 text-primary-500" />
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>

      <Container className="py-12">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-16">Nenhum post encontrado.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.slug}`} className="block h-full group">
                  <Card hover className="h-full flex flex-col overflow-hidden p-0">
                    {post.featuredImageUrl ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl">
                        <Image
                          src={post.featuredImageUrl}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] w-full bg-gray-100 rounded-t-xl flex items-center justify-center">
                        <Folder className="h-12 w-12 text-gray-300" />
                      </div>
                    )}
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDateUtc(post.date)}
                        </span>
                        {post.categories.length > 0 && (
                          <span className="flex items-center gap-1">
                            <Folder className="h-4 w-4" />
                            {post.categories[0].name}
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-gray-600 line-clamp-3 mt-auto">
                        {excerptAsPlainText(post.excerpt)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {(prevUrl || nextUrl) && (
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
      </Container>
    </>
  );
}
