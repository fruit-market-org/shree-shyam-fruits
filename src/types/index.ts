/**
 * Shared domain types for the Shree Shyam Fruits marketing site.
 * Every shape here is consumed by the editable data in `src/constants`.
 */

export type Route = '/' | '/about' | '/products' | '/gallery' | '/contact';

export interface NavItem {
  /** Visible label in the header and footer. */
  label: string;
  /** Next.js route this item links to. */
  href: Route;
}

export interface Product {
  /** URL-safe identifier, also used as the React key. */
  slug: string;
  name: string;
  /** Unsplash photo id — resolved to a URL by `unsplashUrl()`. */
  photoId: string;
  /** Short line shown on the home page card. */
  blurb: string;
  /** Full description shown on the products page. */
  long: string;
  season: string;
  packing: string;
}

export interface Stat {
  /** Numeric target the counter animates towards. */
  value: number;
  label: string;
  /** Appended after the animated number, e.g. `+` or ` yrs`. */
  suffix?: string;
  /** Format the running value with Indian digit grouping. */
  localise?: boolean;
}

export interface ValueCard {
  title: string;
  body: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Person {
  name: string;
  /** Display form, e.g. `8460674707`. */
  phone: string;
  /** Dial form used in the `tel:` href, e.g. `+918460674707`. */
  dial: string;
}

export interface GalleryImage {
  photoId: string;
  alt: string;
  width: number;
  height: number;
}
