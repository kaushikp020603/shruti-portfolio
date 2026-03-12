"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="terminal-border p-8"
        >
          <p className="font-mono text-text-muted text-sm mb-6">
            $ ssh contact@portfolio
          </p>
          <h2 className="text-2xl font-bold mb-2">Establish Connection</h2>
          <p className="text-text-muted mb-8">
            Available for DevOps consulting, infrastructure architecture, and
            full-time roles.
          </p>
          <div className="space-y-4 font-mono text-sm">
            <div className="flex items-center gap-3">
              <span className="text-text-muted">email:</span>
              <a href="mailto:hello@example.com" className="text-cyan hover:underline">
                hello@example.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-text-muted">github:</span>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">
                github.com/username
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-text-muted">linkedin:</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">
                linkedin.com/in/username
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-mono text-green text-sm">
              Connection established. Ready for input._
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
