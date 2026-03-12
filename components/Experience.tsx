"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    hash: "a3f8c1d",
    role: "Senior DevOps Engineer",
    company: "Company Name",
    period: "2023 - Present",
    description: "Leading cloud infrastructure strategy. Managing 200+ microservices across multi-region Kubernetes clusters.",
  },
  {
    hash: "b7e2f09",
    role: "DevOps Engineer",
    company: "Company Name",
    period: "2021 - 2023",
    description: "Built CI/CD pipelines and automated infrastructure provisioning. Achieved 99.95% uptime SLA.",
  },
  {
    hash: "c4d9a52",
    role: "Systems Administrator",
    company: "Company Name",
    period: "2019 - 2021",
    description: "Managed on-premise and cloud infrastructure. Led migration from bare metal to containerized workloads.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-text-muted text-sm mb-2">
            $ git log --oneline
          </p>
          <h2 className="text-3xl font-bold">Deployment History</h2>
        </motion.div>
        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.hash}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 * i }}
              className="terminal-border p-6"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-amber text-sm mt-1 shrink-0">
                  {job.hash}
                </span>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <h3 className="font-semibold text-cyan">{job.role}</h3>
                    <span className="text-text-muted text-sm">at {job.company}</span>
                  </div>
                  <p className="font-mono text-xs text-text-muted mb-2">
                    {job.period}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
