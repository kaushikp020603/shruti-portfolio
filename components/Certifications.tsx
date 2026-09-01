import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    category: "Certifications",
    items: [
      "AWS Academy Data Analyst",
      "Core Java Certification",
      "AI Job Simulation (Forage)",
    ],
  },
  {
    category: "Awards & Honors",
    items: [
      "Silver Medalist — Technical Poster Presentation",
      "1st Prize — NCC Training Exhibition",
      "District-Level Science Exhibition Participant",
    ],
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 px-5 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading command="cat ~/.achievements" title="Credentials" />
        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map((group, i) => (
            <Reveal
              key={group.category}
              delay={0.08 * i}
              className="terminal-border p-6"
            >
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-muted">
                {group.category}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-mono text-sm"
                  >
                    <span className="shrink-0 text-green">[✓]</span>
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
