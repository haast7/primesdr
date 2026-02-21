import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { listPostsByCategory, getCategoryBySlug } from '@/lib/blog';
import { getSiteUrl } from '@/lib/getSiteUrl';
import { formatDateUtc, excerptAsPlainText } from '@/lib/blog/format';
import { ChevronLeft, ChevronRight, Calendar, Folder } from 'lucide-react';

const PAGE_SIZE = 12;
const BASE = getSiteUrl();

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ after?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) {
    return { title: 'Categoria não encontrada' };
  }
  const canonical = `${BASE}/blog/categoria/${slug}`;
  const title = `Categoria: ${category.name} | Blog Prime SDR`;
  const description = `Artigos da categoria ${category.name} no blog da Prime SDR.`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      siteName: 'Prime SDR',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function BlogCategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { after } = await searchParams;
  const cursor = after && after !== '' ? decodeURIComponent(after) : null;

  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  let result;
  try {
    result = await listPostsByCategory(slug, { first: PAGE_SIZE, after: cursor });
  } catch (e) {
    console.error('Blog category list error:', e);
    notFound();
  }

  const { posts, pageInfo } = result;
  const basePath = `/blog/categoria/${slug}`;
  const nextUrl =
    pageInfo.hasNextPage && pageInfo.endCursor
      ? `${basePath}?after=${encodeURIComponent(pageInfo.endCursor)}`
      : null;
  const prevUrl = cursor ? basePath : null;

  const breadcrumbItems = [
    { name: 'Blog', href: '/blog' },
    { name: category.name, href: `/blog/categoria/${slug}` },
  ];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.href.startsWith('http') ? item.href : `${BASE}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-gradient-to-b from-primary-50/50 to-white border-b border-gray-200">
        <Container className="py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/blog" className="hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-gray-900 font-medium">{category.name}</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {category.name}
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Artigos na categoria {category.name}.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-16">
            Nenhum post nesta categoria.
          </p>
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
            aria-label="Paginação"
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
