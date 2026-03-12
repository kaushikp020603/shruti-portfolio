"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "cloud-migration",
    description: "Migrated monolith to microservices on AWS EKS. Reduced costs by 40%.",
    status: "deployed",
    tech: ["AWS", "Kubernetes", "Terraform"],
    timestamp: "2024-12-15T10:30:00Z",
  },
  {
    name: "ci-cd-platform",
    description: "Built internal CI/CD platform with GitHub Actions and ArgoCD for 50+ services.",
    status: "running",
    tech: ["GitHub Actions", "ArgoCD", "Docker"],
    timestamp: "2024-11-20T14:00:00Z",
  },
  {
    name: "monitoring-stack",
    description: "Deployed full observability stack with Prometheus, Grafana, and custom alerting.",
    status: "deployed",
    tech: ["Prometheus", "Grafana", "AlertManager"],
    timestamp: "2024-10-05T09:15:00Z",
  },
  {
    name: "infra-as-code",
    description: "Terraform modules for multi-account AWS infrastructure. Used by 10 teams.",
    status: "deployed",
    tech: ["Terraform", "AWS", "Python"],
    timestamp: "2024-08-12T16:45:00Z",
  },
];

const statusColors: Record<string, string> = {
  deployed: "text-green bg-green/10 border-green/30",
  running: "text-cyan bg-cyan/10 border-cyan/30",
  building: "text-amber bg-amber/10 border-amber/30",
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-text-muted text-sm mb-2">
            $ docker ps --format table
          </p>
          <h2 className="text-3xl font-bold">Deployments</h2>
        </motion.div>
        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="terminal-border p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-mono font-semibold text-cyan">
                      {project.name}
                    </h3>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full border ${statusColors[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-1 bg-surface rounded text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-mono text-xs text-text-muted whitespace-nowrap">
                  {new Date(project.timestamp).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
