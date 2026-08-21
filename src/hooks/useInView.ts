'use client';

import { useEffect, useRef, useState } from 'react';

interface Options {
  /** Fraction of the element that must be visible before it counts. */
  threshold?: number;
  rootMargin?: string;
  /** Reveal anyway after this many ms, in case the observer never fires. */
  failsafeMs?: number;
}

/**
 * Reports the first time an element scrolls into view, then stops observing.
 * Falls back to `true` where IntersectionObserver is unavailable.
 */
export function useInView<T extends HTMLElement>({
  threshold = 0.05,
  rootMargin = '0px 0px -8% 0px',
  failsafeMs = 2200,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    const failsafe = window.setTimeout(() => setInView(true), failsafeMs);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [threshold, rootMargin, failsafeMs]);

  return { ref, inView } as const;
}
