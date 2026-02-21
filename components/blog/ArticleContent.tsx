/**
 * Conteúdo do artigo do blog (HTML do WordPress) estilizado com Tailwind.
 * Mantém identidade visual Prime SDR e boa legibilidade.
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface ArticleContentProps {
  html: string;
  className?: string;
}

export function ArticleContent({ html, className }: ArticleContentProps) {
  return (
    <div
      suppressHydrationWarning
      className={cn(
        'article-content text-gray-700 leading-relaxed',
        ' [&_.wp-block-image]:my-6 [&_.wp-block-image_img]:rounded-lg [&_.wp-block-image_img]:shadow-sm',
        ' [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg',
        ' [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mt-8 [&_h1]:mb-4',
        ' [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-3',
        ' [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-2',
        ' [&_p]:mb-4 [&_p]:text-[1.0625rem]',
        ' [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1',
        ' [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1',
        ' [&_a]:text-primary-600 [&_a]:hover:text-primary-700 [&_a]:underline [&_a]:underline-offset-2',
        ' [&_blockquote]:border-l-4 [&_blockquote]:border-primary-200 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-4',
        ' [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm',
        ' [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-4',
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
