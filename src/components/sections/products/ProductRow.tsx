import Image from 'next/image';

import { Reveal } from '@/components/ui';
import { PRODUCTS_INTRO } from '@/constants';
import { unsplashUrl } from '@/lib/images';
import { productEnquiryLink } from '@/lib/whatsapp';
import type { Product } from '@/types';

interface ProductRowProps {
  product: Product;
  /** The first row is above the fold, so its image is fetched eagerly. */
  priority?: boolean;
}

/** Wide image-and-detail row used on the products page. */
export function ProductRow({ product, priority = false }: ProductRowProps) {
  return (
    <Reveal
      as="article"
      className="group grid grid-cols-1 overflow-hidden rounded-[22px] border border-line-card bg-cream-card min-[696px]:grid-cols-2"
    >
      <div className="relative h-[230px] overflow-hidden sm:h-[280px]">
        <Image
          src={unsplashUrl(product.photoId, 1000)}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 696px) 100vw, 50vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.06]"
        />
      </div>

      <div className="flex flex-col justify-center px-6 py-8 sm:px-[42px] sm:py-[38px]">
        <h2 className="font-display text-[28px] text-ink-heading sm:text-[32px]">{product.name}</h2>
        <p className="mt-3 max-w-[620px] text-[16px] leading-[1.65] text-ink-body sm:text-[16.5px]">
          {product.long}
        </p>

        <div className="mt-[22px] flex flex-wrap items-center gap-[26px]">
          <div>
            <div className="text-[11px] tracking-[0.16em] text-gold-muted uppercase">
              {PRODUCTS_INTRO.labels.season}
            </div>
            <div className="mt-[5px] text-[15.5px] text-ink-heading">{product.season}</div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.16em] text-gold-muted uppercase">
              {PRODUCTS_INTRO.labels.packing}
            </div>
            <div className="mt-[5px] text-[15.5px] text-ink-heading">{product.packing}</div>
          </div>
          <a
            href={productEnquiryLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="self-center rounded-full bg-forest px-[22px] py-[13px] text-[14.5px] font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5 hover:text-cream sm:ml-auto"
          >
            {PRODUCTS_INTRO.labels.cta}
          </a>
        </div>
      </div>
    </Reveal>
  );
}
