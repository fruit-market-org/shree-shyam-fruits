import type { Person } from '@/types';

/**
 * Company identity, contact details and default SEO copy.
 * Change anything here and it propagates across every page.
 */
export const SITE = {
  name: 'Shree Shyam Fruits',
  tagline: 'Fruit Merchant & Commission Agent',
  shortDescription:
    'Wholesale supplier of Mosambi, Watermelon, Muskmelon, Papaya and Orange from Naroda Fruit Market, Ahmedabad.',
  /** Absolute site URL — used for metadata, sitemap and Open Graph. */
  url: 'https://shreeshyamfruits.com',
  locale: 'en_IN',
  establishedOn: '16 September 2022',
  establishedYear: 2022,
  proprietor: {
    name: 'Rahul Agrawal',
    initials: 'RA',
  },
  address: {
    line1: 'Shop No 101, Naroda Fruit Market,',
    line2: 'Naroda Road, Ahmedabad',
    /** Single-line form used in the footer and structured data. */
    full: 'Shop No 101, Naroda Fruit Market, Naroda Road, Ahmedabad',
    locality: 'Ahmedabad',
    region: 'Gujarat',
    country: 'IN',
  },
  email: 'agrawal10rahul@gmail.com',
  /** Primary WhatsApp number in international dial format, no `+`. */
  whatsappNumber: '918460674707',
  /** Same number, formatted for display. */
  whatsappDisplay: '8460674707',
  hours: 'Open daily from early morning. Call ahead for same-day dispatch.',
  /** Short blurb under the logo in the footer. */
  footerBlurb:
    'Fruit merchant and commission agent. Shop No 101, Naroda Fruit Market, Naroda Road, Ahmedabad.',
} as const;

/** Everyone a buyer can call directly. Order is preserved on the contact page. */
export const PEOPLE: readonly Person[] = [
  { name: 'Rahul', phone: '8460674707', dial: '+918460674707' },
  { name: 'Raju Seth', phone: '9824040173', dial: '+919824040173' },
  { name: 'Shantilal Seth', phone: '9825850640', dial: '+919825850640' },
  { name: 'Babal', phone: '9714999831', dial: '+919714999831' },
];

export const COPYRIGHT_LINE = `© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.`;
export const ESTABLISHED_LINE = `Established ${SITE.establishedOn} · ${SITE.address.locality}, ${SITE.address.region}`;
