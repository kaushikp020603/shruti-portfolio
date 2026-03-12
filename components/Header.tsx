"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-base/80 backdrop-blur-md"
    >
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between font-mono text-sm">
        <div className="flex items-center gap-3">
          <span className="status-dot bg-green" />
          <span className="text-text-muted">
            <span className="text-green">user</span>
            <span className="text-text-muted">@</span>
            <span className="text-cyan">portfolio</span>
            <span className="text-text-muted">:~$</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {["metrics", "skills", "projects", "experience", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-text-muted hover:text-cyan transition-colors"
              >
                ./{section}
              </a>
            )
          )}
        </div>
        <span className="text-text-muted text-xs">
          PID 1 | uptime 99.9%
        </span>
      </nav>
    </motion.header>
  );
}
