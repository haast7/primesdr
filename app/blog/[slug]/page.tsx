import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { ArticleContent } from '@/components/blog/ArticleContent';
import { getPostBySlug, getRecentPosts } from '@/lib/blog';
import { getSiteUrl } from '@/lib/getSiteUrl';
import { formatDateLongUtc, formatDateUtc } from '@/lib/blog/format';
import { Calendar, Folder, ChevronRight } from 'lucide-react';

const BASE = getSiteUrl();

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: 'Post não encontrado' };
  }
  const canonical = `${BASE}/blog/${post.slug}`;
  const description =
    post.excerpt?.replace(/<[^>]*>/g, '').slice(0, 160) ||
    `${post.title} | Blog Prime SDR`;
  const image = post.featuredImageUrl ?? undefined;
  return {
    title: post.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified ?? undefined,
      images: image ? [{ url: image, width: 1200, height: 630, alt: post.title }] : [],
      siteName: 'Prime SDR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const recentPosts = await getRecentPosts(3, slug);
  const breadcrumbItems = [
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt?.replace(/<[^>]*>/g, '').slice(0, 200),
    image: post.featuredImageUrl ?? undefined,
    datePublished: post.date,
    dateModified: post.modified ?? post.date,
    author: { '@type': 'Organization', name: 'Prime SDR' },
    publisher: {
      '@type': 'Organization',
      name: 'Prime SDR',
      logo: { '@type': 'ImageObject', url: `${BASE}/logoazul.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${post.slug}` },
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article>
        <Container className="py-8 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/blog" className="hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
              {breadcrumbItems.slice(0, -1).map((item) => (
                <li key={item.href} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <Link href={item.href} className="hover:text-primary-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-gray-900 font-medium">{post.title}</span>
              </li>
            </ol>
          </nav>

          <header className="mb-8">
            {post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/blog/categoria/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 text-primary-700 px-3 py-1.5 text-sm font-medium hover:bg-primary-100 transition-colors"
                  >
                    <Folder className="h-4 w-4" />
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="flex items-center gap-2 text-gray-500 text-sm"
            >
              <Calendar className="h-4 w-4" />
              {formatDateLongUtc(post.date)}
            </time>
          </header>

          {post.featuredImageUrl && (
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-md mb-10">
              <Image
                src={post.featuredImageUrl}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          )}

          <div className="max-w-3xl">
            <ArticleContent html={post.content} />
          </div>
        </Container>

        {recentPosts.length > 0 && (
          <section className="bg-gray-50 border-t border-gray-200">
            <Container className="py-12">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Leia também</h2>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentPosts.map((p) => (
                  <li key={p.id}>
                    <Link href={`/blog/${p.slug}`} className="block h-full group">
                      <Card hover className="h-full overflow-hidden p-0">
                        {p.featuredImageUrl ? (
                          <div className="relative aspect-video w-full overflow-hidden">
                            <Image
                              src={p.featuredImageUrl}
                              alt=""
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>
                        ) : (
                          <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
                            <Folder className="h-10 w-10 text-gray-400" />
                          </div>
                        )}
                        <CardContent className="p-4">
                          <p className="text-xs text-gray-500 mb-1">
                            {formatDateUtc(p.date)}
                          </p>
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {p.title}
                          </h3>
                        </CardContent>
                      </Card>
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        )}
      </article>
    </>
  );
}
