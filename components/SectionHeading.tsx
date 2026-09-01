"use client";

import type { CSSProperties } from "react";
import { useInViewOnce } from "@/lib/useInViewOnce";

export default function SectionHeading({
  command,
  title,
  gradient = false,
}: {
  command: string;
  title: string;
  gradient?: boolean;
}) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="mb-12">
      <p className="mb-2 font-mono text-sm text-text-muted">
        <span className="text-green">$</span>{" "}
        <span
          className={`typewriter ${inView ? "run" : ""}`}
          style={{ "--len": command.length } as CSSProperties}
        >
          {command}
        </span>
        <span className="type-caret" aria-hidden="true">
          &#9611;
        </span>
      </p>
      <h2
        className={`text-3xl font-bold sm:text-4xl ${
          gradient ? "gradient-text" : ""
        }`}
      >
        {title}
      </h2>
      <span className={`accent-bar ${inView ? "run" : ""}`} aria-hidden="true" />
    </div>
  );
}
