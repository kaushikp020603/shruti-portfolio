"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Signal({ active }: { active: boolean }) {
  const bars = active ? 4 : 2;
  return (
    <span
      className={`sig ${active ? "text-green" : "text-amber"}`}
      aria-hidden="true"
    >
      {[0, 1, 2, 3].map((n) => (
        <i key={n} className={n < bars ? "on" : ""} />
      ))}
    </span>
  );
}

const skillGroups = [
  {
    category: "Observability & Visualization",
    items: [
      { name: "Grafana", status: "active" },
      { name: "Plutono", status: "active" },
      { name: "VictoriaMetrics", status: "active" },
      { name: "Prometheus", status: "active" },
      { name: "Geomaps / Time Series", status: "active" },
    ],
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "PostgreSQL", status: "active" },
      { name: "TimescaleDB", status: "active" },
      { name: "MongoDB", status: "active" },
      { name: "Redis", status: "standby" },
      { name: "MySQL", status: "standby" },
    ],
  },
  {
    category: "Data Engineering & IoT",
    items: [
      { name: "Real-Time Telemetry Ingestion", status: "active" },
      { name: "MTConnect (CNC)", status: "active" },
      { name: "FastAPI", status: "active" },
      { name: "Node.js / Express", status: "active" },
      { name: "QGIS (Spatial Vectors)", status: "standby" },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "RAG Pipeline Optimization", status: "active" },
      { name: "LLMs / GPT-4", status: "active" },
      { name: "Anomaly Detection", status: "active" },
      { name: "NLP", status: "standby" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      { name: "Docker (Multi-Stage)", status: "active" },
      { name: "Git / GitHub", status: "active" },
      { name: "CI/CD Workflows", status: "active" },
      { name: "Linux System Admin", status: "active" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Python", status: "active" },
      { name: "SQL / PromQL", status: "active" },
      { name: "C", status: "standby" },
      { name: "Java (Core)", status: "standby" },
      { name: "JavaScript", status: "standby" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="promtool query instant 'up'"
          title="Infrastructure Stack"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.category}
              delay={0.06 * i}
              className="terminal-border p-5"
            >
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-muted">
                {group.category}
              </p>
              <div className="space-y-2.5">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-3 font-mono text-sm"
                  >
                    <span className="text-text-muted transition-colors group-hover:text-text">
                      {item.name}
                    </span>
                    <Signal active={item.status === "active"} />
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
