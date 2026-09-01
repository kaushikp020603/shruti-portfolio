"use client";

import { useEffect, useState } from "react";
import MatrixRain from "./MatrixRain";

const NAME = "Shruti Mandavkar";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [typed, setTyped] = useState("");
  const [uptime, setUptime] = useState(0);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setTyped(NAME);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(NAME.slice(0, i));
      if (i >= NAME.length) clearInterval(id);
    }, 85);
    return () => clearInterval(id);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const start = Date.now();
    const id = setInterval(
      () => setUptime(Math.floor((Date.now() - start) / 1000)),
      1000
    );
    return () => clearInterval(id);
  }, [mounted]);

  const fmt = (s: number) =>
    [s / 3600, (s % 3600) / 60, s % 60]
      .map((n) => Math.floor(n).toString().padStart(2, "0"))
      .join(":");

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-20 pb-16 sm:px-6">
      {mounted && <MatrixRain />}
      <div className="pointer-events-none absolute inset-0 bg-base/20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_48%_42%_at_50%_44%,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0.6)_45%,transparent_75%)]" />
      {mounted && <span className="scanline" />}

      <div className="relative z-10 w-full max-w-3xl text-center">
        <div className="reveal reveal-1 mb-6 flex items-center justify-center gap-3 font-mono text-xs sm:text-sm">
          <span className="status-dot bg-green" />
          <span className="text-green">SYSTEM STATUS: ONLINE</span>
        </div>

        <p className="reveal reveal-2 mb-2 font-mono text-xs text-text-muted sm:text-sm">
          <span className="text-cyan">const</span>{" "}
          <span className="text-amber">engineer</span> ={" "}
          <span className="text-green">&quot;</span>
        </p>

        <h1
          className="reveal reveal-3 mb-2 break-words text-[1.9rem] font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
          aria-label={NAME}
        >
          <span className="gradient-text text-glow">
            {mounted ? typed : ""}
          </span>
          <span className="animate-blink text-cyan" aria-hidden="true">
            |
          </span>
          <span className="sr-only">{NAME}</span>
        </h1>

        <p className="reveal reveal-4 mb-8 font-mono text-xs text-text-muted sm:text-sm">
          <span className="text-green">&quot;</span>;
        </p>

        <p className="reveal reveal-5 mx-auto mb-10 max-w-2xl font-mono text-[0.8rem] leading-relaxed text-text-muted sm:text-[0.95rem]">
          <span className="text-green">// </span>
          Data &amp; Observability Engineer &middot; real-time telemetry
          pipelines, time-series stacks, GenAI / RAG systems
        </p>

        <div className="reveal reveal-6 mb-10 flex flex-col items-stretch justify-center gap-3 font-mono text-sm sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="rounded border border-green px-5 py-2.5 text-green transition-all hover:-translate-y-0.5 hover:bg-green/10"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="shine rounded bg-green px-5 py-2.5 font-semibold text-[#0f172a] transition-all hover:-translate-y-0.5 hover:bg-green/90"
          >
            Get in Touch
          </a>
          <a
            href="/Shruti_Mandavkar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-white/15 px-5 py-2.5 text-text-muted transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:text-cyan"
          >
            cat resume.pdf
          </a>
        </div>

        <div className="reveal reveal-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-mono text-[0.7rem] text-text-muted sm:text-xs">
          <span>
            <span className="text-text-muted">loc:</span> Mumbai, India
          </span>
          <span>
            <span className="text-text-muted">edu:</span> B.E. IT, APSIT (2026)
          </span>
          <span className="tabular-nums" suppressHydrationWarning>
            <span className="text-text-muted">uptime:</span>{" "}
            <span className="text-amber">
              {mounted ? fmt(uptime) : "00:00:00"}
            </span>
          </span>
        </div>

        <div
          className="reveal reveal-8 mt-14 flex justify-center"
          aria-hidden="true"
        >
          <span className="animate-float font-mono text-xs text-text-muted">
            &#8595; scroll
          </span>
        </div>
      </div>
    </section>
  );
}
