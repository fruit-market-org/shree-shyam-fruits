interface BrandMarkProps {
  /** Rendered width and height in px. */
  size?: number;
  /** Fill of the inner disc — deep green in the header, darker in the footer. */
  discFill?: string;
  /** The small leaf flourish only appears on the header mark. */
  showLeaf?: boolean;
  /** Unique suffix so multiple marks on a page keep distinct gradient ids. */
  gradientId: string;
  title?: string;
}

/** The Shree Shyam Fruits roundel: gold-gradient fruit on a deep green disc. */
export function BrandMark({
  size = 46,
  discFill = 'var(--color-forest)',
  showLeaf = true,
  gradientId,
  title,
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className="shrink-0"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F3DC93" />
          <stop offset="0.5" stopColor="#C9A227" />
          <stop offset="1" stopColor="#8C6D1F" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={discFill} />
      <circle cx="50" cy="50" r="43" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.6" />
      <ellipse
        cx="50"
        cy="50"
        rx="26"
        ry="19"
        fill={`url(#${gradientId})`}
        transform="rotate(-18 50 50)"
      />
      {showLeaf ? <path d="M63 33 C67 26 72 24 76 24 C74 30 70 34 64 35 Z" fill="#2E7D45" /> : null}
      <text
        x="50"
        y="57"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="19"
        fill="#0F3A2B"
        letterSpacing="1"
      >
        RR
      </text>
    </svg>
  );
}
