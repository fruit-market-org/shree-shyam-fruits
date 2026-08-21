interface IconProps {
  size?: number;
  className?: string;
}

/** WhatsApp glyph. Colour is inherited via `fill="currentColor"`. */
export function WhatsAppIcon({ size = 15, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4.5-3.1 8.4 8.4 0 0 1-1.8-3c-.2-.6 0-1.2.3-1.5l.6-.6c.2-.2.5-.2.7.1l.9 1.6c.1.3.1.5-.1.7l-.4.5c-.1.2-.2.4 0 .7.4.7 1 1.4 1.7 1.9.6.4 1 .6 1.3.7.2.1.4 0 .6-.2l.5-.6c.2-.2.4-.2.7-.1l1.6.9c.3.2.3.6.3.9Z" />
    </svg>
  );
}

/** Tick used in the wholesale bullet list. */
export function CheckIcon({ size = 9, className }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" width={size} height={size} aria-hidden className={className}>
      <path
        d="M2 6.2 4.6 8.8 10 3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Three-line menu glyph for the mobile header. */
export function MenuIcon({ size = 20, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden className={className}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Close glyph for the mobile header. */
export function CloseIcon({ size = 20, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden className={className}>
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
