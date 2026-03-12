export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-muted">
        <span>PID 1 | Next.js + Tailwind CSS</span>
        <span>
          Template by{" "}
          <a
            href="https://terminalblank.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan hover:underline"
          >
            Terminal Blank
          </a>
        </span>
      </div>
    </footer>
  );
}
