import type { Metadata } from 'next';

import {
  FruitTicker,
  Hero,
  ProductsPreview,
  StatsBand,
  ValuesGrid,
  WholesaleSection,
} from '@/components/sections/home';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBand />
      <ProductsPreview />
      <FruitTicker />
      <ValuesGrid />
      <WholesaleSection />
    </main>
  );
}
