"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { label: "Projects Deployed", value: 150, suffix: "+", color: "text-green" },
  { label: "Uptime SLA", value: 99.9, suffix: "%", color: "text-cyan" },
  { label: "Containers Running", value: 500, suffix: "+", color: "text-amber" },
  { label: "Pipelines Built", value: 80, suffix: "+", color: "text-green" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, inView]);

  return <span>{Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}{suffix}</span>;
}

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metrics" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="terminal-border p-6"
            >
              <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-2">
                {metric.label}
              </p>
              <p className={`text-3xl font-bold font-mono tabular-nums ${metric.color}`}>
                <AnimatedCounter target={metric.value} suffix={metric.suffix} inView={inView} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
