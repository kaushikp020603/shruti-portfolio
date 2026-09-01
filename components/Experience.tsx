"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const experience = [
  {
    hash: "a3f8c1d",
    role: "Research Intern — Data & Observability Engineering",
    company: "IIT Bombay (Machine Intelligence Group / NCAIR)",
    period: "Jun 2025 - Present",
    description:
      "Architected production-grade real-time telemetry dashboards on Plutono & Grafana for Tier-1 industrial enterprises (Hitachi, BKT Tires, CST, Boldrocchi, Mitsuba). Built a campus-wide VictoriaMetrics + Grafana observability stack, automated PostgreSQL ingestion/cleaning pipelines, containerized MTConnect CNC ingestion engines in Docker with low-level C, and optimized TimescaleDB time-series queries. Eliminated bottlenecks in internal RAG pipelines to improve retrieval latency and accuracy.",
  },
  {
    hash: "b7e2f09",
    role: "Data Analyst Intern",
    company: "Genesys International Corporation Ltd.",
    period: "Dec 2024 - Apr 2025",
    description:
      "Built high-throughput RESTful spatial ingestion APIs in FastAPI for a live Crime Analytics Dashboard. Wrote complex PromQL/SQL over high-density geological datasets across Maharashtra & Karnataka, established centralized Prometheus + PostgreSQL + Grafana health dashboards, and handled QGIS spatial cleaning and vector transformations.",
  },
  {
    hash: "c4d9a52",
    role: "B.E. Information Technology",
    company: "A. P. Shah Institute of Technology (APSIT)",
    period: "2022 - 2026",
    description:
      "Core specialization in Data Science, Machine Learning, Data Engineering, Cloud Systems & Systems Observability. AWS Academy Data Analyst & Core Java certified; Silver Medalist — Technical Poster Presentation.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-5 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="git log --oneline --graph"
          title="Deployment History"
        />
        <div className="relative space-y-6 pl-8">
          <span className="git-rail" aria-hidden="true" />
          {experience.map((job, i) => (
            <Reveal
              key={job.hash}
              delay={0.08 * i}
              className="terminal-border p-6"
            >
              <span className="git-node" aria-hidden="true" />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="mt-0.5 shrink-0 font-mono text-sm text-amber">
                  {job.hash}
                </span>
                <div>
                  <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                    <h3 className="font-semibold text-cyan">{job.role}</h3>
                    <span className="text-sm text-text-muted">
                      at {job.company}
                    </span>
                  </div>
                  <p className="mb-2 font-mono text-xs text-text-muted">
                    {job.period}
                  </p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {job.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
