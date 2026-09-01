import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/Spotlight";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const description =
  "Data & Observability Engineer specializing in real-time telemetry pipelines, time-series stacks (Prometheus, VictoriaMetrics, Grafana), containerized microservices, and GenAI/RAG systems.";

// Resolve the canonical origin: explicit override → Vercel production URL →
// current Vercel deployment URL → localhost for dev.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: "Shruti Mandavkar | Data & Observability Engineer",
    template: "%s | Shruti Mandavkar",
  },
  description,
  applicationName: "Shruti Mandavkar — Portfolio",
  authors: [{ name: "Shruti Mandavkar" }],
  creator: "Shruti Mandavkar",
  keywords: [
    "Shruti Mandavkar",
    "data engineer",
    "observability engineer",
    "grafana portfolio",
    "prometheus",
    "victoriametrics",
    "timescaledb",
    "postgresql",
    "rag pipeline",
    "real-time telemetry",
    "site reliability",
    "Mumbai",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Shruti Mandavkar | Data & Observability Engineer",
    description:
      "Real-time telemetry pipelines, time-series observability stacks, and GenAI/RAG system integrations.",
    type: "website",
    locale: "en_US",
    siteName: "Shruti Mandavkar — Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Shruti Mandavkar | Data & Observability Engineer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shruti Mandavkar",
  jobTitle: "Data & Observability Engineer",
  email: "mailto:shrutimandavkar2003@gmail.com",
  telephone: "+91-9167308027",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  alumniOf: "A. P. Shah Institute of Technology (APSIT)",
  knowsAbout: [
    "Observability",
    "Time-Series Databases",
    "Prometheus",
    "VictoriaMetrics",
    "Grafana",
    "PostgreSQL",
    "TimescaleDB",
    "Real-Time Data Ingestion",
    "Docker",
    "RAG Pipelines",
  ],
  sameAs: [
    "https://github.com/shruti26mandavkar",
    "https://linkedin.com/in/shruti-mandavkar",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <noscript>
          <style>{`.reveal{opacity:1 !important;animation:none !important}`}</style>
        </noscript>
        <div className="aurora" aria-hidden="true" />
        <Spotlight />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
