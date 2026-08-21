import Image from 'next/image';

import { Reveal } from '@/components/ui';
import { unsplashUrl } from '@/lib/images';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

/** Compact card used in the home-page range grid. */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <Reveal className="group overflow-hidden rounded-[20px] border border-line-card bg-cream-card">
      <div className="relative h-[210px] overflow-hidden">
        <Image
          src={unsplashUrl(product.photoId, 800)}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 280px"
          className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.07]"
        />
      </div>
      <div className="px-[22px] pt-[22px] pb-[26px]">
        <h3 className="font-display text-[24px] text-ink-heading">{product.name}</h3>
        <p className="mt-[9px] text-[14.5px] leading-[1.6] text-ink-soft">{product.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-cream-tag px-[11px] py-1.5 text-[11.5px] tracking-[0.1em] text-gold-muted uppercase">
            {product.season}
          </span>
        </div>
      </div>
    </Reveal>
  );
}
