import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "fieldwisdom",
    description:
      "Containerized full-stack industrial AI & observability platform for real-time knowledge and telemetry retrieval by field engineers. ML intelligence layer for anomaly detection and semantic audio/text processing; multi-stage Docker builds to cut container latency.",
    status: "running",
    tech: ["Node.js", "Express", "MongoDB", "Docker", "ML"],
    timestamp: "2025-06-01T10:30:00Z",
  },
  {
    name: "ai-resume-matcher",
    description:
      "GenAI extraction/parsing engine using NLP and GPT-4 / LLM APIs to match candidates against job descriptions. Resilient microservices behind reverse proxies with full-stack observability via Prometheus metrics and Grafana alerting.",
    status: "deployed",
    tech: ["GPT-4", "Docker", "Prometheus", "Grafana"],
    timestamp: "2025-03-20T14:00:00Z",
  },
  {
    name: "campus-camera-observability",
    description:
      "Campus-wide observability architecture for IIT Bombay camera-status data using VictoriaMetrics and Grafana — automated alerting, time-series visualizations, datagrids, and interactive Geomaps.",
    status: "deployed",
    tech: ["VictoriaMetrics", "Grafana", "Geomaps"],
    timestamp: "2025-08-05T09:15:00Z",
  },
  {
    name: "crime-analytics-dashboard",
    description:
      "High-throughput RESTful spatial ingestion APIs in FastAPI feeding a live Crime Analytics Dashboard. Complex PromQL/SQL over high-density geological datasets across Maharashtra & Karnataka, rendered in Grafana.",
    status: "deployed",
    tech: ["FastAPI", "PromQL", "PostgreSQL", "QGIS"],
    timestamp: "2025-02-12T16:45:00Z",
  },
];

const statusStyle: Record<
  string,
  { badge: string; stripe: string; dot: string }
> = {
  deployed: {
    badge: "text-green bg-green/10 border-green/30",
    stripe: "from-green/70",
    dot: "bg-green",
  },
  running: {
    badge: "text-cyan bg-cyan/10 border-cyan/30",
    stripe: "from-cyan/70",
    dot: "bg-cyan",
  },
  building: {
    badge: "text-amber bg-amber/10 border-amber/30",
    stripe: "from-amber/70",
    dot: "bg-amber",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          command="docker ps --format table"
          title="Deployments"
        />
        <div className="space-y-4">
          {projects.map((project, i) => {
            const s = statusStyle[project.status] ?? statusStyle.deployed;
            return (
              <Reveal
                key={project.name}
                delay={0.06 * i}
                className="terminal-border overflow-hidden p-6"
              >
                <span
                  className={`pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${s.stripe} to-transparent`}
                  aria-hidden="true"
                />
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="font-mono font-semibold text-cyan">
                        {project.name}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-xs ${s.badge}`}
                      >
                        <span className={`status-dot ${s.dot}`} />
                        {project.status}
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-text-muted">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-surface px-2 py-1 font-mono text-xs text-text-muted transition-colors hover:bg-surface-light hover:text-cyan"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="whitespace-nowrap font-mono text-xs text-text-muted">
                    {project.timestamp.slice(0, 10)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
