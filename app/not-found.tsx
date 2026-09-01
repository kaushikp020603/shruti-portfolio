import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Route Not Found",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="terminal-border p-8 md:p-12 max-w-lg w-full font-mono">
        <div className="flex items-center gap-3 mb-6">
          <span className="status-dot bg-red" />
          <span className="text-red text-sm">HTTP 404 — ROUTE NOT FOUND</span>
        </div>
        <p className="text-text-muted text-sm mb-2">$ curl -I $REQUESTED_PATH</p>
        <p className="text-text-muted text-sm mb-6">
          &gt; the resource you requested is not on this host.
        </p>
        <Link
          href="/"
          className="inline-block text-sm px-4 py-2 rounded border border-cyan/40 text-cyan hover:bg-cyan/10 transition-colors"
        >
          cd ~
        </Link>
      </div>
    </main>
  );
}
