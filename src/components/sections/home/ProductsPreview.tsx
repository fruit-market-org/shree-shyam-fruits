import Link from 'next/link';

import { ProductCard } from '@/components/sections/products/ProductCard';
import { Container, Eyebrow, Reveal } from '@/components/ui';
import { PRODUCTS, PRODUCTS_PREVIEW } from '@/constants';

export function ProductsPreview() {
  return (
    <Container as="section" className="pt-[86px] pb-5">
      <Reveal className="flex flex-wrap items-end justify-between gap-[30px]">
        <div>
          <Eyebrow>{PRODUCTS_PREVIEW.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-[32px] text-ink-heading sm:text-[40px]">
            {PRODUCTS_PREVIEW.heading}
          </h2>
        </div>
        <Link
          href="/products"
          className="border-b border-gold pb-[3px] font-semibold text-forest hover:text-gold-dark"
        >
          {PRODUCTS_PREVIEW.link}
        </Link>
      </Reveal>

      <div className="mt-[38px] grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-[22px]">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </Container>
  );
}
