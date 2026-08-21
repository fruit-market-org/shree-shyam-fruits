import type { Metadata } from 'next';
import Image from 'next/image';

import { Container, Eyebrow, Reveal } from '@/components/ui';
import { ABOUT, FACTS, SITE } from '@/constants';
import { unsplashUrl } from '@/lib/images';

export const metadata: Metadata = {
  title: 'About',
  description: ABOUT.intro,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <Container as="main" className="pt-[70px] pb-[100px]">
      <div className="max-w-[760px]">
        <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
        <h1 className="mt-3.5 font-display text-[clamp(30px,6.5vw,54px)] leading-[1.08] text-balance text-ink-heading">
          {ABOUT.heading}
        </h1>
        <p className="mt-[22px] text-[17px] leading-[1.65] text-pretty text-ink-body sm:text-[18.5px]">
          {ABOUT.intro}
        </p>
      </div>

      <div className="mt-[60px] grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-11">
        <div className="relative h-[300px] overflow-hidden rounded-[24px] shadow-[0_24px_50px_rgba(30,46,28,0.14)] sm:h-[430px]">
          <Image
            src={unsplashUrl(ABOUT.image.photoId, 1300)}
            alt={ABOUT.image.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-[28px] text-ink-heading sm:text-[32px]">
            {ABOUT.howWeWork.heading}
          </h2>
          {ABOUT.howWeWork.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3.5 text-[16px] leading-[1.7] text-ink-body">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-[26px] border-t border-line pt-[46px]">
        {FACTS.map((fact) => (
          <Reveal key={fact.label}>
            <div className="text-[11.5px] tracking-[0.18em] text-gold-muted uppercase">
              {fact.label}
            </div>
            <div className="mt-2 font-display text-[26px] text-ink-heading">{fact.value}</div>
          </Reveal>
        ))}
      </div>

      <div className="mt-[70px] grid grid-cols-1 items-center gap-8 rounded-[26px] bg-forest p-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-[38px] sm:p-[52px]">
        <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full border border-gold bg-forest-mid font-display text-[34px] text-gold-light">
          {SITE.proprietor.initials}
        </div>
        <div>
          <div className="text-[11.5px] tracking-[0.2em] text-mist-dark uppercase">
            {ABOUT.proprietor.eyebrow}
          </div>
          <h3 className="mt-2.5 font-display text-[28px] text-cream sm:text-[32px]">
            {SITE.proprietor.name}
          </h3>
          <p className="mt-2.5 max-w-[560px] text-[16px] leading-[1.6] text-mist">
            {ABOUT.proprietor.body}
          </p>
        </div>
      </div>
    </Container>
  );
}
