"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, inView]. Fails open: reveals on reduced-motion,
 * missing IntersectionObserver, or after a 1.2s safety timeout.
 */
export function useInViewOnce<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const timer = window.setTimeout(() => setInView(true), 1200);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
          window.clearTimeout(timer);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return [ref, inView] as const;
}
