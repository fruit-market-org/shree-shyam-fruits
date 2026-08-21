'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { NAV_ITEMS, SITE } from '@/constants';
import { cn } from '@/lib/cn';
import { WHATSAPP_LINK } from '@/lib/whatsapp';
import { BrandMark, CloseIcon, MenuIcon, WhatsAppIcon } from '@/components/ui';

/** Matches `/products` for `/products` and any nested route beneath it. */
function isActive(pathname: string, href: string): boolean {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever navigation happens.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/[0.92] backdrop-blur-[10px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-nowrap items-center gap-[18px] px-5 py-[14px] sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 sm:flex-none"
          aria-label={`${SITE.name} — home`}
        >
          <BrandMark gradientId="brand-mark-header" size={46} title={`${SITE.name} mark`} />
          <span className="flex min-w-0 flex-col leading-[1.05]">
            <span className="font-display text-[19px] tracking-[0.02em] text-forest">{SITE.name}</span>
            {/* Too wide to sit beside the mark until there is room for it. */}
            <span className="hidden text-[10.5px] tracking-[0.18em] text-gold-soft uppercase sm:block">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              className={cn(
                'rounded-full px-3 py-[9px] text-[14.5px] font-medium transition-colors duration-200 hover:bg-cream-hover',
                isActive(pathname, item.href)
                  ? 'text-gold-dark hover:text-gold-dark'
                  : 'text-ink-strong hover:text-ink-strong',
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1.5 flex items-center gap-2 rounded-full bg-forest px-[18px] py-[11px] text-[14px] font-semibold text-cream transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-forest-hover hover:text-cream"
          >
            <WhatsAppIcon size={15} />
            WhatsApp
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire on WhatsApp"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-forest text-cream transition-colors duration-200 hover:bg-forest-hover hover:text-cream min-[360px]:flex"
          >
            <WhatsAppIcon size={17} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-forest transition-colors duration-200 hover:bg-cream-hover"
          >
            {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <nav
        id="mobile-navigation"
        aria-label="Primary"
        hidden={!menuOpen}
        className="border-t border-line bg-cream px-5 pt-2 pb-4 sm:px-6 lg:hidden"
      >
        <ul className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                className={cn(
                  'block border-b border-line/70 py-3.5 text-[16px] font-medium transition-colors duration-200',
                  isActive(pathname, item.href)
                    ? 'text-gold-dark'
                    : 'text-ink-strong hover:text-gold-dark',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-full bg-forest px-[18px] py-3 text-[15px] font-semibold text-cream transition-colors duration-200 hover:bg-forest-hover hover:text-cream"
        >
          <WhatsAppIcon size={16} />
          WhatsApp {SITE.whatsappDisplay}
        </a>
      </nav>
    </header>
  );
}
