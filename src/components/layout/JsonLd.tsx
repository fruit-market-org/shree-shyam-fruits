import { PEOPLE, SITE } from '@/constants';

/** Schema.org LocalBusiness data so search engines read the shop details. */
export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    description: SITE.shortDescription,
    url: SITE.url,
    email: SITE.email,
    telephone: `+${SITE.whatsappNumber}`,
    foundingDate: '2022-09-16',
    founder: { '@type': 'Person', name: SITE.proprietor.name },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.line1.replace(/,$/, ''),
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    contactPoint: PEOPLE.map((person) => ({
      '@type': 'ContactPoint',
      name: person.name,
      telephone: person.dial,
      contactType: 'sales',
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
