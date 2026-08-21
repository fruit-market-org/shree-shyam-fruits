import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/ui';
import { HERO } from '@/constants';
import { unsplashUrl } from '@/lib/images';
import { WHATSAPP_LINK } from '@/lib/whatsapp';

const { collage } = HERO;

export function Hero() {
  return (
    <Container
      as="section"
      className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] items-center gap-14 pt-[70px] pb-10"
    >
      <div>
        <div className="animate-rise-in inline-flex items-center gap-2.5 rounded-full border border-line-badge bg-cream-badge px-3.5 py-[7px] text-[12px] tracking-[0.14em] text-gold-muted uppercase">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-leaf" />
          {HERO.eyebrow}
        </div>

        <h1 className="animate-rise-in-1 mt-[22px] font-display text-[clamp(34px,7vw,62px)] leading-[1.04] tracking-[-0.01em] text-balance text-ink-heading">
          {HERO.heading}
        </h1>

        <p className="animate-rise-in-2 mt-[22px] max-w-[520px] text-[17px] leading-[1.6] text-pretty text-ink-body sm:text-[18.5px]">
          {HERO.body}
        </p>

        <div className="animate-rise-in-3 mt-[34px] flex flex-wrap gap-3.5">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-7 py-4 text-[15.5px] font-semibold text-cream shadow-[0_10px_24px_rgba(15,58,43,0.18)] transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:text-cream hover:shadow-[0_16px_32px_rgba(15,58,43,0.24)]"
          >
            {HERO.primaryCta}
          </a>
          <Link
            href="/products"
            className="rounded-full border border-line-strong px-7 py-4 text-[15.5px] font-semibold text-forest transition-[background-color,border-color] duration-200 hover:border-gold-dark hover:bg-cream-hover-strong hover:text-forest"
          >
            {HERO.secondaryCta}
          </Link>
        </div>
      </div>

      {/* Floating photo collage. Sizes step up to the full design at lg. */}
      <div
        className="relative h-[380px] sm:h-[460px] lg:h-[520px]"
        aria-label="Photographs of fruit at the market"
        role="group"
      >
        <div className="animate-spin-slow absolute inset-x-5 inset-y-[34px] rounded-full border border-dashed border-line-dashed" />

        <div className="animate-floaty absolute top-[18px] left-[8%] h-[210px] w-[60%] overflow-hidden rounded-[22px] shadow-[0_26px_60px_rgba(30,46,28,0.2)] sm:h-[255px] lg:h-[290px]">
          <Image
            src={unsplashUrl(collage.stall.photoId, 1100)}
            alt={collage.stall.alt}
            fill
            priority
            sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 360px"
            className="object-cover"
          />
        </div>

        <div className="animate-floaty-alt absolute right-[4%] bottom-6 h-[180px] w-[52%] overflow-hidden rounded-[22px] border-[6px] border-cream shadow-[0_26px_60px_rgba(30,46,28,0.2)] sm:h-[215px] lg:h-[250px]">
          <Image
            src={unsplashUrl(collage.watermelon.photoId, 1000)}
            alt={collage.watermelon.alt}
            fill
            sizes="(max-width: 640px) 52vw, (max-width: 1024px) 26vw, 310px"
            className="object-cover"
          />
        </div>

        <div className="animate-floaty-slow absolute top-[150px] left-0 h-[120px] w-[120px] overflow-hidden rounded-full border-[6px] border-cream shadow-[0_18px_40px_rgba(30,46,28,0.18)] sm:top-[185px] sm:h-[145px] sm:w-[145px] lg:top-[210px] lg:h-[170px] lg:w-[170px]">
          <Image
            src={unsplashUrl(collage.muskmelon.photoId, 700)}
            alt={collage.muskmelon.alt}
            fill
            sizes="170px"
            className="object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
