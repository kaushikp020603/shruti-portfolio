"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas "matrix rain" backdrop for the hero.
 * Bright leading glyph + fading trail. Draws a dense static
 * field when the visitor prefers reduced motion.
 */
export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const glyphs =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ0123456789=+-<>/*{}[]$#@%".split(
        ""
      );
    const fontSize = 16;
    let cols = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || window.innerHeight || 800;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / fontSize);
      drops = Array.from({ length: cols }, () =>
        Math.floor((Math.random() * height) / fontSize)
      );
      speeds = Array.from({ length: cols }, () => 0.5 + Math.random() * 0.9);
    };
    resize();

    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, width, height);

    const step = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.06)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < cols; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = "#e8fff1";
        ctx.fillText(glyphs[(Math.random() * glyphs.length) | 0], x, y);
        ctx.fillStyle = "#22c55e";
        ctx.fillText(
          glyphs[(Math.random() * glyphs.length) | 0],
          x,
          y - fontSize
        );
        ctx.fillStyle = "rgba(34,197,94,0.55)";
        ctx.fillText(
          glyphs[(Math.random() * glyphs.length) | 0],
          x,
          y - fontSize * 2
        );

        drops[i] += speeds[i];
        if (y > height && Math.random() > 0.94) {
          drops[i] = 0;
          speeds[i] = 0.5 + Math.random() * 0.9;
        }
      }
    };

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      // dense static field
      ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`;
      ctx.textBaseline = "top";
      for (let i = 0; i < cols; i++) {
        const runTop = Math.floor((Math.random() * height) / fontSize);
        const runLen = 6 + ((Math.random() * 14) | 0);
        for (let k = 0; k < runLen; k++) {
          const y = (runTop + k) * fontSize;
          if (y > height) break;
          ctx.fillStyle =
            k === runLen - 1
              ? "#e8fff1"
              : `rgba(34,197,94,${0.15 + (k / runLen) * 0.5})`;
          ctx.fillText(
            glyphs[(Math.random() * glyphs.length) | 0],
            i * fontSize,
            y
          );
        }
      }
      const onResize = () => resize();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    let raf = 0;
    let last = 0;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (t - last < 45) return;
      last = t;
      step();
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40 [mix-blend-mode:screen]"
    />
  );
}
