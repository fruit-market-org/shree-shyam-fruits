import type { Metadata } from 'next';
import Image from 'next/image';

import { Container, Eyebrow, WhatsAppIcon } from '@/components/ui';
import { CONTACT, PEOPLE, SITE } from '@/constants';
import { unsplashUrl } from '@/lib/images';
import { WHATSAPP_LINK } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Reach ${SITE.name} on WhatsApp at ${SITE.whatsappDisplay} for pricing and availability. ${SITE.address.full}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <Container as="main" className="pt-[70px] pb-[100px]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(330px,100%),1fr))] items-start gap-14">
        <div>
          <Eyebrow>{CONTACT.eyebrow}</Eyebrow>
          <h1 className="mt-3.5 font-display text-[clamp(30px,6.5vw,54px)] leading-[1.08] text-balance text-ink-heading">
            {CONTACT.heading}
          </h1>
          <p className="mt-5 max-w-[520px] text-[17px] leading-[1.65] text-pretty text-ink-body sm:text-[18px]">
            {CONTACT.body}
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-whatsapp px-7 py-[19px] text-[15.5px] font-bold text-whatsapp-ink shadow-[0_14px_30px_rgba(37,211,102,0.28)] transition-transform duration-200 hover:-translate-y-[3px] hover:text-whatsapp-ink sm:px-8 sm:text-[17px]"
          >
            <WhatsAppIcon size={21} />
            WhatsApp us — {SITE.whatsappDisplay}
          </a>

          <ul className="mt-[52px] grid list-none gap-0.5 border-t border-line p-0">
            {PEOPLE.map((person) => (
              <li
                key={person.dial}
                className="flex items-center justify-between gap-5 border-b border-line px-0.5 py-[18px]"
              >
                <span className="text-[16.5px] font-medium text-ink-heading">{person.name}</span>
                <a
                  href={`tel:${person.dial}`}
                  className="text-[16.5px] tracking-[0.02em] text-ink-body transition-colors duration-200 hover:text-gold-dark"
                >
                  {person.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="rounded-[24px] bg-forest p-7 text-cream-muted sm:p-[38px]">
            <div className="text-[11.5px] tracking-[0.2em] text-mist-dark uppercase">
              {CONTACT.labels.shop}
            </div>
            <p className="mt-3 font-display text-[22px] leading-[1.35] text-cream sm:text-[25px]">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </p>

            <div className="my-7 h-px bg-forest-rule" />

            <div className="text-[11.5px] tracking-[0.2em] text-mist-dark uppercase">
              {CONTACT.labels.email}
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2.5 inline-block text-[16px] break-all text-gold-light hover:text-gold-pale sm:text-[17px]"
            >
              {SITE.email}
            </a>

            <div className="my-7 h-px bg-forest-rule" />

            <div className="text-[11.5px] tracking-[0.2em] text-mist-dark uppercase">
              {CONTACT.labels.hours}
            </div>
            <p className="mt-2.5 text-[16px] leading-[1.6] text-mist">{SITE.hours}</p>
          </div>

          <div className="relative mt-[18px] h-[230px] overflow-hidden rounded-[24px]">
            <Image
              src={unsplashUrl(CONTACT.image.photoId, 1000)}
              alt={CONTACT.image.alt}
              fill
              sizes="(max-width: 772px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
