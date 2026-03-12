import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "hostname | DevOps Engineer",
  description:
    "DevOps engineer specializing in cloud infrastructure, CI/CD pipelines, containerization, and infrastructure as code.",
  keywords: [
    "devops engineer",
    "sre portfolio",
    "cloud engineer",
    "infrastructure engineer",
    "devops portfolio",
  ],
  openGraph: {
    title: "hostname | DevOps Engineer",
    description:
      "DevOps engineer specializing in cloud infrastructure and automation.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
