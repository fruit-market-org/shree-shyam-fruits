'use client';

import { useEffect, useState } from 'react';

import { usePrefersReducedMotion } from './usePrefersReducedMotion';

const DURATION_MS = 1400;

/** Cubic ease-out, matching the original design's counter easing. */
const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

/**
 * Counts from zero to each target once `active` turns true.
 * Returns the targets immediately when motion is reduced.
 */
export function useCountUp(targets: readonly number[], active: boolean): number[] {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [values, setValues] = useState<number[]>(() => targets.map(() => 0));

  useEffect(() => {
    if (!active) return;

    if (prefersReducedMotion) {
      setValues([...targets]);
      return;
    }

    let frame = 0;
    const start = Date.now();

    const tick = () => {
      const progress = Math.min(1, (Date.now() - start) / DURATION_MS);
      const eased = easeOut(progress);
      setValues(targets.map((target) => Math.round(target * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    // If rAF is throttled — a background tab, a headless render — land on the
    // real numbers anyway rather than freezing part-way.
    const failsafe = window.setTimeout(() => {
      cancelAnimationFrame(frame);
      setValues([...targets]);
    }, DURATION_MS + 400);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(failsafe);
    };
    // `targets` is a module-level constant array; join keeps the dep stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, prefersReducedMotion, targets.join(',')]);

  return values;
}
