const UNSPLASH_BASE = 'https://images.unsplash.com';

/**
 * Builds a source URL for an Unsplash photo id.
 * `next/image` re-optimises the result, so `width` only bounds what we fetch.
 */
export function unsplashUrl(photoId: string, width = 1000, quality = 80): string {
  return `${UNSPLASH_BASE}/${photoId}?w=${width}&q=${quality}`;
}
