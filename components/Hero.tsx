"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="terminal-border p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="status-dot bg-green" />
            <span className="font-mono text-green text-sm">
              SYSTEM STATUS: ONLINE
            </span>
          </div>
          <div className="font-mono">
            <p className="text-text-muted text-sm mb-2">
              $ cat /etc/hostname
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-cyan mb-4">
              Your Name
            </h1>
            <p className="text-text-muted text-sm mb-2">$ whoami</p>
            <p className="text-xl text-green mb-6">
              DevOps Engineer / Site Reliability Engineer
            </p>
            <p className="text-text-muted text-sm mb-2">$ cat /proc/uptime</p>
            <p className="text-amber tabular-nums">{formatUptime(uptime)}</p>
            <p className="text-text-muted mt-8 leading-relaxed font-sans">
              I build and maintain the infrastructure that keeps applications
              running at scale. Specializing in cloud architecture, CI/CD
              automation, container orchestration, and infrastructure as code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
