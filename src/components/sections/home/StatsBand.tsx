'use client';

import { useMemo } from 'react';

import { Container } from '@/components/ui';
import { STATS } from '@/constants';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';

const formatter = new Intl.NumberFormat('en-IN');

export function StatsBand() {
  const targets = useMemo(() => STATS.map((stat) => stat.value), []);
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, rootMargin: '0px' });
  const counts = useCountUp(targets, inView);

  return (
    <section ref={ref} className="border-y border-line bg-cream-band">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(160px,100%),1fr))] gap-6 py-[38px]">
        {STATS.map((stat, index) => {
          const current = counts[index] ?? 0;
          const shown = stat.localise ? formatter.format(current) : String(current);

          return (
            <div key={stat.label} className="text-center">
              <div className="font-display text-[36px] leading-none text-forest sm:text-[42px]">
                <span className="tabular-nums">{shown}</span>
                {stat.suffix}
              </div>
              <div className="mt-2 text-[12.5px] tracking-[0.16em] text-gold-muted uppercase">
                {stat.label}
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
