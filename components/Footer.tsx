export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl font-mono text-xs text-text-muted">
        <div className="mb-4 flex items-center gap-2">
          <span className="status-dot bg-green" />
          <span className="text-green">all systems operational</span>
          <span className="text-text-muted">
            &middot; 99.9% uptime &middot; last deploy{" "}
            {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/5 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} Shruti Mandavkar &middot; built
            with Next.js + Tailwind
          </span>
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
      </div>
    </footer>
  );
}
