import type { MetadataRoute } from 'next';

import { NAV_ITEMS, SITE } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return NAV_ITEMS.map((item) => ({
    url: new URL(item.href, SITE.url).toString(),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: item.href === '/' ? 1 : 0.8,
  }));
}
