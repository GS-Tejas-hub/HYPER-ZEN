import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
}

export function Section({ children, className, title, subtitle, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-12 md:py-20 lg:py-24', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-10 md:mb-12 text-center">
            {subtitle && <p className="text-base font-semibold text-primary uppercase tracking-wider mb-2">{subtitle}</p>}
            {title && <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
