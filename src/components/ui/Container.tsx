import type { ElementType, ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** The 1200px content column shared by every section on the site. */
export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return <Tag className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-7', className)}>{children}</Tag>;
}
