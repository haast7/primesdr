import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BlogPostCard } from './BlogPostCard';
import { ChevronRight } from 'lucide-react';
import type { BlogCategoryWithPosts } from '@/types/blog';

interface BlogCategoryBlockProps {
  category: BlogCategoryWithPosts;
}

export function BlogCategoryBlock({ category }: BlogCategoryBlockProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-xl font-bold text-gray-900">{category.name}</h2>
        <Link
          href={`/blog/categoria/${category.slug}`}
          className="inline-flex items-center gap-1.5 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm"
        >
          Ver todos
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.posts.map((post) => (
          <li key={post.id}>
            <BlogPostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
