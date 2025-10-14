import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'primary' | 'gradient';
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, padding = 'lg', background = 'white', ...props }, ref) => {
    const paddings = {
      sm: 'py-12 sm:py-16',
      md: 'py-16 sm:py-20',
      lg: 'py-20 sm:py-24 lg:py-28',
      xl: 'py-24 sm:py-28 lg:py-32',
    };

    const backgrounds = {
      white: 'bg-white',
      gray: 'bg-gray-50',
      primary: 'bg-primary-600',
      gradient: 'bg-gradient-to-br from-primary-50 via-white to-accent-50',
    };

    return (
      <section
        ref={ref}
        className={cn(
          paddings[padding],
          backgrounds[background],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };





