'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import type { BlogCategory } from '@/types/blog';

/** Pasta pública onde ficam as capas (slug.jpg ou slug.webp). */
export const BLOG_CATEGORY_COVERS_PATH = '/images/blog-categories';

function stripHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function getDescription(cat: BlogCategory): string {
  if (cat.description && stripHtml(cat.description).length > 0) {
    const text = stripHtml(cat.description);
    return text.length > 120 ? text.slice(0, 120).trim() + '…' : text;
  }
  return `Conteúdos sobre ${cat.name}.`;
}

/** Normaliza slug para o nome do arquivo (remove acentos/cedilha para bater com os .png). */
function slugToCoverFilename(slug: string): string {
  const map: Record<string, string> = {
    ç: 'c', á: 'a', à: 'a', ã: 'a', â: 'a', é: 'e', ê: 'e', í: 'i', ó: 'o', ô: 'o', õ: 'o', ú: 'u',
  };
  return slug
    .toLowerCase()
    .replace(/[çáàãâéêíóôõú]/g, (c) => map[c] ?? c);
}

function getCoverSrc(slug: string): string {
  const file = slugToCoverFilename(slug);
  return `${BLOG_CATEGORY_COVERS_PATH}/${file}.png`;
}

interface BlogCategoryCardProps {
  category: BlogCategory;
}

export function BlogCategoryCard({ category }: BlogCategoryCardProps) {
  const [coverError, setCoverError] = useState(false);
  const coverSrc = getCoverSrc(category.slug);

  return (
    <li>
      <Link
        href={`/blog/categoria/${category.slug}`}
        className="group block h-full rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-primary-200/80 transition-all duration-200"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200/80">
          {!coverError ? (
            <Image
              src={coverSrc}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setCoverError(true)}
            />
          ) : null}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
            {category.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
            {getDescription(category)}
          </p>
          {typeof category.count === 'number' && category.count > 0 && (
            <p className="text-xs text-gray-500 mb-3">
              {category.count} {category.count === 1 ? 'artigo' : 'artigos'}
            </p>
          )}
          <span className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
            Ver artigos
            <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </li>
  );
}
