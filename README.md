# DevOps Portfolio

A dashboard-style Next.js portfolio template for DevOps engineers, SREs, and infrastructure engineers. System monitor aesthetic with status indicators, animated metrics, git-log-style timelines, and terminal UI elements. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Terminal-Blank/devops-portfolio)

## Features

- **Dashboard Aesthetic** -- Grafana-inspired layout with metric cards and status indicators
- **Animated Counters** -- Numbers count up on scroll for projects deployed, uptime, and more
- **Terminal UI** -- Monospace typography, command prompts, and system-style navigation
- **Git Log Timeline** -- Experience section styled like commit history with hashes
- **Status Indicators** -- Pulsing dots showing active/standby states for skills
- **CI/CD Project Cards** -- Deployment-style cards with status badges and timestamps
- **Dot Grid Background** -- Subtle engineering-themed background pattern
- **Fully Responsive** -- Works on all screen sizes
- **SEO Optimized** -- Metadata and Open Graph tags

## Sections

1. **Hero** -- System status header with hostname, role, and live uptime counter
2. **Metrics** -- Dashboard cards with animated counters
3. **Skills** -- Infrastructure stack with status indicators per technology
4. **Projects** -- CI/CD pipeline-style deployment cards
5. **Experience** -- Git log timeline with commit hashes
6. **Contact** -- SSH-style terminal contact section

## Quick Start

```bash
git clone https://github.com/Terminal-Blank/devops-portfolio.git my-portfolio
cd my-portfolio
npm install
npm run dev
```

Open http://localhost:3000 to see your site.

## Customization

### Personal Info

Edit `components/Hero.tsx` to update your name, role, and bio.

### Metrics

Update the `metrics` array in `components/Metrics.tsx` with your numbers.

### Skills

Edit `skillGroups` in `components/Skills.tsx` to list your technologies and their status.

### Projects

Update the `projects` array in `components/Projects.tsx` with your deployments.

### Experience

Edit the `experience` array in `components/Experience.tsx` with your work history.

### Contact

Update links in `components/Contact.tsx`.

### Colors

Modify the status colors and theme in `app/globals.css`.

## Deployment

### Vercel (Recommended)

Click the "Deploy with Vercel" button above, or:

```bash
npm i -g vercel
vercel
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
RUN npm ci --production
CMD ["npm", "start"]
```

## Tech Stack

- [Next.js 15](https://nextjs.org/) -- React framework
- [TypeScript](https://www.typescriptlang.org/) -- Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) -- Styling
- [Framer Motion](https://www.framer.com/motion/) -- Animations
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) -- Monospace font

## License

MIT -- [Terminal Blank](https://terminalblank.com)
