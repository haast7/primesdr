import type { BlogCategory } from '@/types/blog';
import { BlogCategoryCard } from './BlogCategoryCard';

interface BlogExploreCategoriesProps {
  categories: BlogCategory[];
}

export function BlogExploreCategories({ categories }: BlogExploreCategoriesProps) {
  if (categories.length === 0) return null;

  return (
    <section aria-labelledby="explore-categories-heading">
      <h2
        id="explore-categories-heading"
        className="text-2xl font-bold text-gray-900 mb-8"
      >
        Explore por categoria
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <BlogCategoryCard key={cat.slug} category={cat} />
        ))}
      </ul>
    </section>
  );
}
