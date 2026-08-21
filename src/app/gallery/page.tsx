import type { Metadata } from 'next';

import { GalleryGrid } from '@/components/sections/gallery/GalleryGrid';
import { Container, Eyebrow } from '@/components/ui';
import { GALLERY_INTRO } from '@/constants';

export const metadata: Metadata = {
  title: 'Gallery',
  description: GALLERY_INTRO.body,
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <Container as="main" className="pt-[70px] pb-[100px]">
      <div className="max-w-[700px]">
        <Eyebrow>{GALLERY_INTRO.eyebrow}</Eyebrow>
        <h1 className="mt-3.5 font-display text-[clamp(30px,6.5vw,54px)] leading-[1.08] text-ink-heading">
          {GALLERY_INTRO.heading}
        </h1>
        <p className="mt-[18px] text-[16px] leading-[1.6] text-pretty text-ink-body sm:text-[16.5px]">
          {GALLERY_INTRO.body}
        </p>
      </div>

      <GalleryGrid />
    </Container>
  );
}
