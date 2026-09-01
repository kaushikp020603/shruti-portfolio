"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { label: "metrics", id: "metrics" },
  { label: "skills", id: "skills" },
  { label: "projects", id: "projects" },
  { label: "experience", id: "experience" },
  { label: "certs", id: "certifications" },
  { label: "contact", id: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-base/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 font-mono text-sm sm:px-6">
        <a href="#main" className="flex items-center gap-3">
          <span className="status-dot bg-green" />
          <span className="text-text-muted">
            <span className="text-green">shruti</span>
            <span className="text-text-muted">@</span>
            <span className="text-cyan">observability</span>
            <span className="text-text-muted">:~$</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <a
                key={section.label}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative transition-colors ${
                  isActive ? "text-cyan" : "text-text-muted hover:text-cyan"
                }`}
              >
                ./{section.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-cyan"
                  />
                )}
              </a>
            );
          })}
        </div>

        <span className="hidden text-xs text-text-muted md:block">
          uptime 99.9%
        </span>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="text-text-muted transition-colors hover:text-cyan md:hidden"
        >
          {open ? "[ esc ]" : "[ menu ]"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-base/95 md:hidden"
          >
            <div className="flex flex-col gap-3 px-5 py-4 font-mono text-sm sm:px-6">
              {sections.map((section) => (
                <a
                  key={section.label}
                  href={`#${section.id}`}
                  onClick={() => setOpen(false)}
                  className={`transition-colors ${
                    active === section.id
                      ? "text-cyan"
                      : "text-text-muted hover:text-cyan"
                  }`}
                >
                  ./{section.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
