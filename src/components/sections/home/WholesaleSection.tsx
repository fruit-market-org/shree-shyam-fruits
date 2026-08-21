import Image from 'next/image';

import { CheckIcon, Container, Eyebrow, Reveal } from '@/components/ui';
import { WHOLESALE } from '@/constants';
import { unsplashUrl } from '@/lib/images';

export function WholesaleSection() {
  return (
    <Container as="section" className="pt-[50px] pb-[100px]">
      {/* Two columns from 748px up — the width at which the original grid splits. */}
      <Reveal className="grid grid-cols-1 items-center gap-8 rounded-[26px] border border-line bg-cream-band p-4 min-[748px]:grid-cols-2 min-[748px]:gap-[52px]">
        <div className="relative h-[260px] overflow-hidden rounded-[20px] sm:h-[320px] min-[748px]:h-[400px]">
          <Image
            src={unsplashUrl(WHOLESALE.image.photoId, 1200)}
            alt={WHOLESALE.image.alt}
            fill
            sizes="(max-width: 748px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        <div className="px-2 pb-6 min-[748px]:py-[26px] min-[748px]:pr-[34px] min-[748px]:pl-1.5">
          <Eyebrow>{WHOLESALE.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-[30px] leading-[1.12] text-ink-heading sm:text-[38px]">
            {WHOLESALE.heading}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.65] text-ink-body sm:text-[16.5px]">
            {WHOLESALE.body}
          </p>
          <ul className="mt-[22px] grid list-none gap-3 p-0">
            {WHOLESALE.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] text-ink-strong">
                <span className="mt-0.5 flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full bg-gold-light text-forest">
                  <CheckIcon size={9} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Container>
  );
}
