import Image from 'next/image';

import { Reveal } from '@/components/ui';
import { GALLERY } from '@/constants';
import { unsplashUrl } from '@/lib/images';

/**
 * CSS multi-column masonry — the browser balances the columns, and each tile
 * keeps its natural aspect ratio.
 */
export function GalleryGrid() {
  return (
    <div className="mt-12 gap-[18px] [column-width:280px] max-[620px]:[column-count:1] sm:[column-count:3]">
      {GALLERY.map((image, index) => (
        <Reveal
          key={image.photoId}
          className="mb-[18px] overflow-hidden rounded-2xl bg-cream-muted break-inside-avoid"
        >
          <Image
            src={unsplashUrl(image.photoId, 900)}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={index < 3}
            sizes="(max-width: 620px) 100vw, (max-width: 1024px) 45vw, 380px"
            className="block w-full saturate-[1.02] transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:scale-[1.05]"
          />
        </Reveal>
      ))}
    </div>
  );
}
