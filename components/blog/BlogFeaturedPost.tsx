import Link from 'next/link';
import Image from 'next/image';
import { formatDateUtc, excerptAsPlainText } from '@/lib/blog/format';
import { Calendar, Folder, ArrowRight } from 'lucide-react';
import type { BlogPostListItem } from '@/types/blog';

interface BlogFeaturedPostProps {
  post: BlogPostListItem;
}

export function BlogFeaturedPost({ post }: BlogFeaturedPostProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px] overflow-hidden bg-gray-100">
            {post.featuredImageUrl ? (
              <Image
                src={post.featuredImageUrl}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Folder className="h-16 w-16 text-gray-300" />
              </div>
            )}
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
              {post.categories.length > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 text-primary-700 px-3 py-1 font-medium">
                  <Folder className="h-4 w-4" />
                  {post.categories[0].name}
                </span>
              )}
              <span className="flex items-center gap-1.5 text-gray-500">
                <Calendar className="h-4 w-4" />
                {formatDateUtc(post.date)}
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-4 line-clamp-2">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6">
              {excerptAsPlainText(post.excerpt, 200)}
            </p>
            <span className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
              Ler artigo
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
