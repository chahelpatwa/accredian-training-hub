import { useEffect, useState } from "react";

/**
 * Tracks the currently visible section id as the user scrolls.
 * Uses IntersectionObserver — picks whichever section has the
 * largest intersection ratio in the viewport.
 */
export function useActiveSection(ids: string[], offset = 100): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          visibility.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        });
        let topId = ids[0];
        let topRatio = 0;
        visibility.forEach((ratio, id) => {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        });
        if (topRatio > 0) setActive(topId);
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offset]);

  return active;
}
