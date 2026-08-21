'use client';

import type { ElementType, ReactNode } from 'react';

import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Element to render. Defaults to a plain `div`. */
  as?: ElementType;
  /** Stagger in ms, applied as a transition delay. */
  delay?: number;
}

/**
 * Fades and lifts its children the first time they scroll into view.
 * Without JavaScript the `noscript` rule in the layout keeps content visible.
 */
export function Reveal({ children, className, as: Tag = 'div', delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-reveal
      className={cn('reveal', inView && 'reveal-in', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
