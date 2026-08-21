import type { Metadata, Viewport } from 'next';
import { Karla, Marcellus } from 'next/font/google';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SITE } from '@/constants';
import { JsonLd } from '@/components/layout/JsonLd';

import './globals.css';

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marcellus',
});

const karla = Karla({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.shortDescription,
  keywords: [
    'fruit merchant Ahmedabad',
    'commission agent Naroda Fruit Market',
    'wholesale mosambi',
    'wholesale watermelon',
    'wholesale muskmelon',
    'wholesale papaya',
    'wholesale orange',
    SITE.name,
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.shortDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.shortDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FBFAF4',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${marcellus.variable} ${karla.variable}`}>
      <head>
        {/* Without JavaScript the scroll-reveal never fires, so pin content visible. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body className="bg-cream font-sans text-ink">
        <Header />
        {children}
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
