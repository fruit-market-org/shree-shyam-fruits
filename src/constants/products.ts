import type { Product } from '@/types';

/** Header copy for the products page. */
export const PRODUCTS_INTRO = {
  eyebrow: 'Products',
  heading: 'The complete range',
  body: 'Mosambi, Watermelon, Muskmelon, Papaya and Orange — graded, packed and available in wholesale lots.',
  labels: {
    season: 'Peak season',
    packing: 'Packing',
    cta: 'Ask price',
  },
} as const;

/**
 * The full product range. Adding an entry automatically extends the
 * home-page grid, the products page and the fruit ticker.
 */
export const PRODUCTS: readonly Product[] = [
  {
    slug: 'mosambi',
    name: 'Mosambi',
    photoId: 'photo-1590502593747-42a996133562',
    blurb: 'Sweet lime with thin skin and heavy juice yield.',
    long: 'Sweet lime graded for juice houses and retail counters. Thin-skinned, heavy for its size, and selected for even colour across the lot.',
    season: 'Aug – Mar',
    packing: 'Loose crates, 20–25 kg',
  },
  {
    slug: 'watermelon',
    name: 'Watermelon',
    photoId: 'photo-1587049352846-4a222e784d38',
    blurb: 'Field-fresh, thumped and checked before it leaves.',
    long: 'Whole watermelon sorted by weight band so buyers get a consistent count per load. Every lot is tapped and checked for hollowness before dispatch.',
    season: 'Feb – Jun',
    packing: 'Bulk load, size-graded',
  },
  {
    slug: 'muskmelon',
    name: 'Muskmelon',
    photoId: 'photo-1571575173700-afb9492e6a50',
    blurb: 'Netted rind, aromatic, picked at eating ripeness.',
    long: 'Netted muskmelon selected on aroma and rind pattern. We hold back under-ripe fruit rather than pass it forward, so arrival condition stays predictable.',
    season: 'Mar – Jul',
    packing: 'Trays or crates, 9–12 pc',
  },
  {
    slug: 'papaya',
    name: 'Papaya',
    photoId: 'photo-1526318472351-c75fcf070305',
    blurb: 'Firm shoulders, clean skin, staged for travel time.',
    long: 'Papaya staged by colour break to match your travel time — greener for distance, more advanced for local counters. Handled in single layers to avoid pressure marks.',
    season: 'Year round',
    packing: 'Single-layer crates',
  },
  {
    slug: 'orange',
    name: 'Orange',
    photoId: 'photo-1580052614034-c55d20bfee3b',
    blurb: 'Bright, firm citrus in table and juice grades.',
    long: 'Table and juice grades kept separate. Fruit is wiped, size-sorted and packed the same day it is bought so the shelf life sits with the buyer, not with us.',
    season: 'Nov – Mar',
    packing: 'Crates, 15–20 kg',
  },
];
