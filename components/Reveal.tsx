"use client";

import { type ElementType, type ReactNode } from "react";
import { useInViewOnce } from "@/lib/useInViewOnce";

/**
 * Scroll-triggered entrance animation that fails open:
 * if IntersectionObserver is unavailable, errors, or the element
 * never intersects, the content still becomes visible.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  as: Tag = "div" as ElementType,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: ElementType;
  className?: string;
}) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : `translateY(${y}px)`,
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
