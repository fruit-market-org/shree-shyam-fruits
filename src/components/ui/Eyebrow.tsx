import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Small uppercase label that sits above a section heading. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn('text-[12px] tracking-[0.2em] text-gold-dark uppercase', className)}>
      {children}
    </div>
  );
}
