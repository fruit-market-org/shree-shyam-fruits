import type { Metadata } from 'next';

import { ProductRow } from '@/components/sections/products/ProductRow';
import { Container, Eyebrow } from '@/components/ui';
import { PRODUCTS, PRODUCTS_INTRO as INTRO } from '@/constants';

export const metadata: Metadata = {
  title: 'Products',
  description: INTRO.body,
  alternates: { canonical: '/products' },
};

export default function ProductsPage() {
  return (
    <Container as="main" className="pt-[70px] pb-[100px]">
      <div className="max-w-[700px]">
        <Eyebrow>{INTRO.eyebrow}</Eyebrow>
        <h1 className="mt-3.5 font-display text-[clamp(30px,6.5vw,54px)] leading-[1.08] text-ink-heading">
          {INTRO.heading}
        </h1>
        <p className="mt-5 text-[17px] leading-[1.65] text-pretty text-ink-body sm:text-[18px]">
          {INTRO.body}
        </p>
      </div>

      <div className="mt-[52px] grid gap-[22px]">
        {PRODUCTS.map((product, index) => (
          <ProductRow key={product.slug} product={product} priority={index === 0} />
        ))}
      </div>
    </Container>
  );
}
