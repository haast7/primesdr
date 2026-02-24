import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { formatDateUtc, excerptAsPlainText } from '@/lib/blog/format';
import { Calendar, Folder } from 'lucide-react';
import type { BlogPostListItem } from '@/types/blog';

interface BlogPostCardProps {
  post: BlogPostListItem;
  /** Aspect ratio da imagem: default 16/10. Use 'featured' para 16/9. */
  imageAspect?: '16/10' | '16/9';
  /** Tamanho do título: default lg. */
  titleSize?: 'lg' | 'xl';
}

export function BlogPostCard({
  post,
  imageAspect = '16/10',
  titleSize = 'lg',
}: BlogPostCardProps) {
  const aspectClass = imageAspect === '16/9' ? 'aspect-video' : 'aspect-[16/10]';

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full group">
      <Card
        hover
        className="h-full flex flex-col overflow-hidden p-0 border-gray-200/80 bg-white shadow-sm hover:shadow-lg hover:border-primary-200/80 transition-all duration-300"
      >
        {post.featuredImageUrl ? (
          <div
            className={`relative w-full overflow-hidden rounded-t-xl ${aspectClass}`}
          >
            <Image
              src={post.featuredImageUrl}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div
            className={`w-full bg-gray-100 rounded-t-xl flex items-center justify-center ${aspectClass}`}
          >
            <Folder className="h-10 w-10 text-gray-300" />
          </div>
        )}
        <CardContent className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              {formatDateUtc(post.date)}
            </span>
            {post.categories.length > 0 && (
              <span className="flex items-center gap-1">
                <Folder className="h-4 w-4 flex-shrink-0" />
                {post.categories[0].name}
              </span>
            )}
          </div>
          <h2
            className={
              titleSize === 'xl'
                ? 'text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2'
                : 'text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2'
            }
          >
            {post.title}
          </h2>
          <p className="text-sm text-gray-600 line-clamp-3 mt-auto">
            {excerptAsPlainText(post.excerpt)}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
