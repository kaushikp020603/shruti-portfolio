# Shruti Mandavkar — Portfolio

Personal portfolio for a **Data & Observability Engineer**. Dashboard / system‑monitor
aesthetic with a matrix‑rain hero, animated metrics, a git‑log experience timeline,
signal‑strength skill meters, and terminal UI throughout.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS 4**, and
**Framer Motion**.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # eslint / type-aware checks
```

## Deploy to Vercel

This is a zero‑config Next.js app — Vercel detects the framework, build command
(`next build`), and output automatically.

### Option A — GitHub + Vercel dashboard (recommended)

1. Create a new **empty** repo on your GitHub account.
2. Point this project at it and push:
   ```bash
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click
   **Deploy**. No environment variables are required.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

### After the first deploy

Set the canonical site URL so Open Graph / canonical tags and `sitemap.xml`
use your real domain. In **Vercel → Project → Settings → Environment Variables**:

| Name                  | Value                          | Environments |
| --------------------- | ------------------------------ | ------------ |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com`      | Production   |

If unset, the app falls back to the Vercel deployment URL, then `localhost`.

## Editing content

All content lives in plain arrays inside the components — no CMS.

| What | Where |
| --- | --- |
| Name, role, bio, links | `components/Hero.tsx` |
| Stat counters | `components/Metrics.tsx` |
| Skills + status | `components/Skills.tsx` |
| Projects | `components/Projects.tsx` |
| Experience timeline | `components/Experience.tsx` |
| Certifications & awards | `components/Certifications.tsx` |
| Contact links | `components/Contact.tsx` |
| Résumé PDF | `public/Shruti_Mandavkar_Resume.pdf` |
| Colours / theme tokens | `app/globals.css` (`@theme`) |
| Site metadata / SEO | `app/layout.tsx` |

## License

MIT. Template originally by [Terminal Blank](https://terminalblank.com).
