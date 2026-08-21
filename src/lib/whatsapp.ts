import { SITE } from '@/constants/site';

const DEFAULT_MESSAGE = `Hello ${SITE.name}, I would like to enquire about your fruit supply.`;

/** WhatsApp deep link with a pre-filled message. */
export function whatsappLink(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Product-specific enquiry link used by the "Ask price" buttons. */
export function productEnquiryLink(productName: string): string {
  return whatsappLink(`Hello ${SITE.name}, I would like a price for ${productName}.`);
}

/** The generic enquiry link, pre-built for the many places that reuse it. */
export const WHATSAPP_LINK = whatsappLink();
