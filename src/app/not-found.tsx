import Link from 'next/link';

import { Container, Eyebrow } from '@/components/ui';

export default function NotFound() {
  return (
    <Container as="main" className="flex flex-col items-start pt-[90px] pb-[120px]">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-3.5 font-display text-[clamp(30px,6.5vw,54px)] leading-[1.08] text-ink-heading">
        That page is not on the stall
      </h1>
      <p className="mt-5 max-w-[520px] text-[17px] leading-[1.65] text-ink-body">
        The link may be out of date. Head back to the front page, or browse the fruit we carry.
      </p>
      <div className="mt-8 flex flex-wrap gap-3.5">
        <Link
          href="/"
          className="rounded-full bg-forest px-7 py-4 text-[15.5px] font-semibold text-cream shadow-[0_10px_24px_rgba(15,58,43,0.18)] transition-transform duration-200 hover:-translate-y-[3px] hover:text-cream"
        >
          Back home
        </Link>
        <Link
          href="/products"
          className="rounded-full border border-line-strong px-7 py-4 text-[15.5px] font-semibold text-forest transition-colors duration-200 hover:border-gold-dark hover:bg-cream-hover-strong hover:text-forest"
        >
          See our range
        </Link>
      </div>
    </Container>
  );
}
