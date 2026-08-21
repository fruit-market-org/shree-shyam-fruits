import { Container, Reveal } from '@/components/ui';
import { VALUES } from '@/constants';

export function ValuesGrid() {
  return (
    <Container as="section" className="py-16">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-5">
        {VALUES.map((value, index) => (
          <Reveal
            key={value.title}
            className="rounded-[18px] bg-forest px-6 py-[30px] text-cream-muted"
          >
            <div className="font-display text-[15px] tracking-[0.2em] text-gold-light">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="mt-4 font-display text-[21px] text-cream">{value.title}</h3>
            <p className="mt-2.5 text-[14px] leading-[1.65] text-mist">{value.body}</p>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
