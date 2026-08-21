import type { NavItem } from '@/types';

/** Primary navigation, shared by the header and the footer. */
export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];
