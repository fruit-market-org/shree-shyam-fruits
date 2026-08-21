import type { GalleryImage } from '@/types';

export const GALLERY_INTRO = {
  eyebrow: 'Gallery',
  heading: 'Fruit, market and dispatch',
  body: 'Reference imagery for now — send us your own shop, stock and stall photographs and we will drop them straight in.',
} as const;

/**
 * Masonry gallery. `width`/`height` are the intrinsic ratios of each source
 * image; they keep the column layout stable while the picture loads.
 */
export const GALLERY: readonly GalleryImage[] = [
  { photoId: 'photo-1488459716781-31db52582fe9', alt: 'Fruit market stall', width: 1200, height: 800 },
  { photoId: 'photo-1563114773-84221bd62daa', alt: 'Crates of fresh fruit', width: 1200, height: 800 },
  { photoId: 'photo-1571575173700-afb9492e6a50', alt: 'Muskmelon', width: 1200, height: 1600 },
  { photoId: 'photo-1526318472351-c75fcf070305', alt: 'Papaya', width: 1200, height: 1800 },
  { photoId: 'photo-1577234286642-fc512a5f8f11', alt: 'Citrus close up', width: 1200, height: 1600 },
  { photoId: 'photo-1590502593747-42a996133562', alt: 'Mosambi sweet lime', width: 1200, height: 1600 },
  { photoId: 'photo-1610832958506-aa56368176cf', alt: 'Assorted fruit', width: 1200, height: 800 },
  { photoId: 'photo-1601584115197-04ecc0da31d7', alt: 'Loading and transport', width: 1200, height: 800 },
  { photoId: 'photo-1578575437130-527eed3abbec', alt: 'Fruit stacked at the market', width: 1200, height: 800 },
  { photoId: 'photo-1580052614034-c55d20bfee3b', alt: 'Oranges', width: 1200, height: 1800 },
  { photoId: 'photo-1560493676-04071c5f467b', alt: 'Fresh produce display', width: 1200, height: 900 },
  { photoId: 'photo-1587049352846-4a222e784d38', alt: 'Watermelon', width: 1200, height: 1200 },
];
