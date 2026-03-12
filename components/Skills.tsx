"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Cloud",
    items: [
      { name: "AWS", status: "active" },
      { name: "GCP", status: "active" },
      { name: "Azure", status: "standby" },
    ],
  },
  {
    category: "Containers",
    items: [
      { name: "Docker", status: "active" },
      { name: "Kubernetes", status: "active" },
      { name: "Helm", status: "active" },
    ],
  },
  {
    category: "IaC",
    items: [
      { name: "Terraform", status: "active" },
      { name: "Ansible", status: "active" },
      { name: "Pulumi", status: "standby" },
    ],
  },
  {
    category: "CI/CD",
    items: [
      { name: "GitHub Actions", status: "active" },
      { name: "Jenkins", status: "active" },
      { name: "ArgoCD", status: "active" },
    ],
  },
  {
    category: "Monitoring",
    items: [
      { name: "Prometheus", status: "active" },
      { name: "Grafana", status: "active" },
      { name: "Datadog", status: "standby" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Python", status: "active" },
      { name: "Go", status: "active" },
      { name: "Bash", status: "active" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-text-muted text-sm mb-2">
            $ kubectl get services
          </p>
          <h2 className="text-3xl font-bold">Infrastructure Stack</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="terminal-border p-5"
            >
              <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4">
                {group.category}
              </p>
              <div className="space-y-2">
                {group.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between font-mono text-sm">
                    <span>{item.name}</span>
                    <span className="flex items-center gap-2">
                      <span
                        className={`status-dot ${
                          item.status === "active" ? "bg-green" : "bg-amber"
                        }`}
                      />
                      <span className={`text-xs ${
                        item.status === "active" ? "text-green" : "text-amber"
                      }`}>
                        {item.status}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
