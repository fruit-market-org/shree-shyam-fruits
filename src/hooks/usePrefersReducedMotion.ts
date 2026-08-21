'use client';

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/** Tracks the viewer's reduced-motion preference. */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    setPrefersReducedMotion(media.matches);

    const onChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return prefersReducedMotion;
}
