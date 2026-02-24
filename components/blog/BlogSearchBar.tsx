'use client';

import { useCallback } from 'react';
import { Search } from 'lucide-react';

interface BlogSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  /** Para acessibilidade e SEO: descreve o propósito da busca */
  'aria-label'?: string;
  className?: string;
}

export function BlogSearchBar({
  value,
  onChange,
  placeholder = 'Buscar artigos por título ou assunto...',
  'aria-label': ariaLabel = 'Buscar artigos do blog',
  className = '',
}: BlogSearchBarProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value.trimStart());
    },
    [onChange]
  );

  return (
    <div className={`relative ${className}`}>
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
        aria-hidden
      />
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors text-base"
        autoComplete="off"
      />
    </div>
  );
}
