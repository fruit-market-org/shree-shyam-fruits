import Link from 'next/link';

import { COPYRIGHT_LINE, ESTABLISHED_LINE, NAV_ITEMS, SITE } from '@/constants';
import { WHATSAPP_LINK } from '@/lib/whatsapp';
import { BrandMark } from '@/components/ui';

const footerLink =
  'text-[15px] text-footer-link transition-colors duration-200 hover:text-gold-light';

export function Footer() {
  return (
    <footer className="bg-forest-deep px-5 pt-16 pb-[34px] text-footer-text sm:px-7">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-11">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark
              gradientId="brand-mark-footer"
              size={42}
              discFill="var(--color-ink-heading)"
              showLeaf={false}
            />
            <span className="font-display text-[20px] text-cream">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-[340px] text-[14.5px] leading-[1.65]">
            {SITE.footerBlurb}
          </p>
        </div>

        <div>
          <div className="text-[11.5px] tracking-[0.2em] text-footer-label uppercase">Pages</div>
          <div className="mt-4 grid gap-2.5">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className={footerLink}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11.5px] tracking-[0.2em] text-footer-label uppercase">Reach us</div>
          <div className="mt-4 grid gap-2.5">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={footerLink}>
              WhatsApp {SITE.whatsappDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className={footerLink}>
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-11 flex w-full max-w-[1200px] flex-wrap justify-between gap-5 border-t border-forest-line pt-[22px] text-[13px] text-footer-meta">
        <span>{COPYRIGHT_LINE}</span>
        <span>{ESTABLISHED_LINE}</span>
      </div>
    </footer>
  );
}
