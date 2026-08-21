import type { Stat, ValueCard } from '@/types';

export const HERO = {
  eyebrow: 'Naroda Fruit Market · Ahmedabad',
  heading: 'Fresh fruit, sorted at dawn and moving by noon.',
  body: 'Shree Shyam Fruits supplies Mosambi, Watermelon, Muskmelon, Papaya and Orange in wholesale volumes — trading as a fruit merchant and commission agent from Shop No 101, Naroda Fruit Market since 2022.',
  primaryCta: 'Enquire on WhatsApp',
  secondaryCta: 'See our range',
  /** The three floating photographs in the hero collage. */
  collage: {
    stall: { photoId: 'photo-1488459716781-31db52582fe9', alt: 'Fruit market stall' },
    watermelon: { photoId: 'photo-1587049352846-4a222e784d38', alt: 'Watermelon' },
    muskmelon: { photoId: 'photo-1571575173700-afb9492e6a50', alt: 'Muskmelon' },
  },
} as const;

/** Counters in the band under the hero. `value` is the number they animate to. */
export const STATS: readonly Stat[] = [
  { value: 10000, label: 'Clients served', suffix: '+', localise: true },
  { value: 4, label: 'In the market', suffix: ' yrs' },
  { value: 5, label: 'Core fruits' },
  { value: 365, label: 'Days a year' },
];

export const PRODUCTS_PREVIEW = {
  eyebrow: 'Our range',
  heading: 'Five fruits, handled properly',
  link: 'All products →',
} as const;

export const VALUES: readonly ValueCard[] = [
  {
    title: 'Graded by hand',
    body: 'Every consignment is opened, checked and sorted before it is offered on.',
  },
  {
    title: 'Same-day dispatch',
    body: 'Buy in the morning, load by afternoon. Fruit does not wait in our shop.',
  },
  {
    title: 'Plain accounting',
    body: 'As commission agents we keep the numbers simple and settlement prompt.',
  },
  {
    title: 'One point of contact',
    body: 'Talk to the proprietor directly on WhatsApp. No call centre in between.',
  },
];

export const WHOLESALE = {
  eyebrow: 'Wholesale & export',
  heading: 'From the mandi floor to loading bay',
  body: 'We buy, grade and consign fruit for traders, retailers and exporters. Lots are sorted by size and ripeness, packed for the journey ahead, and dispatched the same day wherever the route allows.',
  image: { photoId: 'photo-1601584115197-04ecc0da31d7', alt: 'Transport' },
  points: [
    'Size and ripeness grading to buyer specification',
    'Packing suited to travel time and destination',
    'Commission agency for growers and suppliers',
    'Loads arranged for local, upcountry and export buyers',
  ],
} as const;
