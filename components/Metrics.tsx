"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useInViewOnce } from "@/lib/useInViewOnce";

const metrics = [
  { label: "Tier-1 Industrial Clients", value: 5, suffix: "+", color: "text-green" },
  { label: "Observability Dashboards", value: 25, suffix: "+", color: "text-cyan" },
  { label: "Ingestion Pipelines Built", value: 15, suffix: "+", color: "text-amber" },
  { label: "Production Platforms", value: 4, suffix: "+", color: "text-green" },
];

function Stat({
  target,
  suffix,
  run,
}: {
  target: number;
  suffix: string;
  run: boolean;
}) {
  const [count, setCount] = useState(0);
  const [popped, setPopped] = useState(false);
  const numRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!run) return;
    const duration = 1600;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        setPopped(true);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, run]);

  return (
    <>
      <p
        ref={numRef}
        className={`stat-num font-mono text-4xl font-bold tabular-nums ${
          popped ? "pop" : ""
        }`}
      >
        {Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}
        {suffix}
      </p>
      <div className="stat-track">
        <span className={`stat-fill ${run ? "run" : ""}`} />
      </div>
    </>
  );
}

export default function Metrics() {
  const [ref, inView] = useInViewOnce<HTMLDivElement>();

  return (
    <section id="metrics" className="scroll-mt-20 px-5 py-16 sm:px-6 sm:py-24">
      <div ref={ref} className="mx-auto max-w-6xl">
        <SectionHeading command="curl -s /api/metrics" title="By The Numbers" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={0.08 * i}
              className={`terminal-border p-6 ${metric.color}`}
            >
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-text-muted">
                {metric.label}
              </p>
              <Stat target={metric.value} suffix={metric.suffix} run={inView} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
