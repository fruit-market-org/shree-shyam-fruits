# Shree Shyam Fruits — Marketing Website

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 implementation of the
Claude Design prototype in `shree-shyam-fruits-website/`.

Five statically generated pages: Home, About, Products, Gallery, Contact.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script              | Does                                        |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Dev server with hot reload                  |
| `npm run build`     | Production build (all routes prerendered)   |
| `npm run start`     | Serve the production build                  |
| `npm run lint`      | ESLint (`next/core-web-vitals`)             |
| `npm run typecheck` | `tsc --noEmit`                              |
| `npm run format`    | Prettier over `src/`                        |

## Changing the content

**All copy, data and contact details live in `src/constants/`.** Nothing that a
non-developer might want to change is hard-coded in a component.

| File                          | Holds                                                        |
| ----------------------------- | ------------------------------------------------------------ |
| `constants/site.ts`           | Company name, tagline, address, email, WhatsApp number, proprietor, people to call |
| `constants/navigation.ts`     | Header and footer links                                       |
| `constants/products.ts`       | The five fruits + the products-page intro                     |
| `constants/home.ts`           | Hero, stat counters, value cards, wholesale section           |
| `constants/about.ts`          | About copy and the facts strip                                |
| `constants/gallery.ts`        | Gallery images and intro                                      |
| `constants/contact.ts`        | Contact page copy                                             |

Common edits:

- **New phone number** → `PEOPLE` in `constants/site.ts` (contact page) and
  `SITE.whatsappNumber` / `SITE.whatsappDisplay` (every WhatsApp button).
- **New product** → append to `PRODUCTS` in `constants/products.ts`. It appears
  on the home grid, the products page and the scrolling fruit ticker
  automatically.
- **Swap a photograph** → replace the `photoId`. Images come from Unsplash via
  `lib/images.ts`; to use your own files, drop them in `public/` and pass the
  path instead of calling `unsplashUrl()`.
- **Change a colour** → `@theme` in `src/app/globals.css`. Every component reads
  these tokens, so one edit repaints the site.

## Structure

```
src/
  app/                 Routes, metadata, sitemap, robots, global CSS
  components/
    layout/            Header, Footer, structured data
    sections/          Page sections, grouped by the page they belong to
    ui/                Reusable primitives (brand mark, icons, Reveal, Container)
  constants/           All editable content — see the table above
  hooks/               useInView, useCountUp, usePrefersReducedMotion
  lib/                 Image URLs, WhatsApp deep links, class-name helper
  types/               Shared domain types
```

## Notes

- **Responsive**: verified free of horizontal overflow from 320px to 1440px on
  every page. The design's desktop layout is reproduced exactly; below `lg` the
  header collapses into a menu button, and section padding and type step down.
- **Motion**: scroll reveals, the fruit marquee and the stat counters all
  respect `prefers-reduced-motion`, and content stays visible without JavaScript.
- **Images**: `next/image` with AVIF/WebP. Remote hosts are allowlisted in
  `next.config.ts`.
- **SEO**: per-page metadata, canonical URLs, `sitemap.xml`, `robots.txt` and
  `LocalBusiness` JSON-LD. Set the real domain in `SITE.url` before deploying.

## The original design

`shree-shyam-fruits-website/` is the untouched Claude Design handoff bundle,
kept for reference. It is excluded from the build, TypeScript and ESLint.
