import type { Fact } from '@/types';

export const ABOUT = {
  eyebrow: 'About us',
  heading: 'A fruit house built on the daily rhythm of Naroda Market',
  intro:
    'Shree Shyam Fruits opened on 16 September 2022 at Shop No 101, Naroda Fruit Market, Ahmedabad. Four years on, we have served more than 10,000 clients as a fruit merchant and commission agent.',
  image: { photoId: 'photo-1610832958506-aa56368176cf', alt: 'Assorted fruit' },
  howWeWork: {
    heading: 'How we work',
    paragraphs: [
      'Buying starts early. Consignments are inspected on arrival, graded by size and ripeness, and matched to the buyers who need them that day. As a commission agent we also sell on behalf of growers and suppliers, keeping the accounting plain and the settlement quick.',
      'Volumes range from a single crate to a full load. The five fruits we carry — Mosambi, Watermelon, Muskmelon, Papaya and Orange — are the ones we know best, so quality calls are made by people who handle them every morning.',
    ],
  },
  proprietor: {
    eyebrow: 'Proprietor',
    body: 'Shop No 101, Naroda Fruit Market, Naroda Road, Ahmedabad. Reachable directly on 8460674707 for pricing, availability and consignment enquiries.',
  },
} as const;

/** The key-value strip on the about page. */
export const FACTS: readonly Fact[] = [
  { label: 'Established', value: '16 September 2022' },
  { label: 'Experience', value: '4 years in fruit trade' },
  { label: 'Clients served', value: '10,000+' },
  { label: 'Trading as', value: 'Fruit Merchant & Commission Agent' },
  { label: 'Location', value: 'Naroda Fruit Market, Ahmedabad' },
  { label: 'Proprietor', value: 'Rahul Agrawal' },
];
