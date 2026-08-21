import { PRODUCTS } from '@/constants';

/** Two identical halves scrolled by -50%, giving a seamless marquee. */
const HALVES = [0, 1];

export function FruitTicker() {
  return (
    <section className="overflow-hidden pt-[72px] pb-3" aria-hidden>
      <div className="animate-marquee flex w-max">
        {HALVES.map((half) => (
          <div key={half} className="flex items-center gap-[34px] pr-[34px]">
            {PRODUCTS.map((product) => (
              <span
                key={product.slug}
                className="flex items-center gap-[34px] font-display text-[28px] whitespace-nowrap text-ticker sm:text-[38px]"
              >
                {product.name}
                <span className="inline-block h-[9px] w-[9px] rounded-full bg-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
