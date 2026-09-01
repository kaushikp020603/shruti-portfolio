# Deployment (Vercel)

This is a standard **Next.js 15 (App Router)** app. It deploys to Vercel with
essentially zero config — the `vercel.json` in this repo only pins the framework,
build command, and Node version so nothing is auto-guessed.

## Why you were seeing `404: NOT_FOUND`

That page (with `Code: NOT_FOUND` and a `bom1::...` request ID) is **Vercel's own
404**, not this app's `not-found.tsx`. It means Vercel had nothing to serve at the
URL — a project-settings problem, not a code problem. The local production build
(`npm run build`) succeeds and prerenders `/`, so the code is fine.

The usual cause: the Vercel project's **Root Directory** is wrong.

## Fix / verify in the Vercel dashboard

Project → **Settings → Build & Development Settings**:

| Setting | Value |
|---|---|
| Framework Preset | **Next.js** |
| Root Directory | **`./`** (repo root — this repo has `package.json` at the root, *not* in a `devops-portfolio/` subfolder). If it's set to a subfolder, change it and redeploy. |
| Build Command | `next build` (or leave as default) |
| Install Command | `npm ci` (or leave as default) |
| Output Directory | leave **empty** — Next.js manages `.next` automatically |
| Node.js Version | **20.x** (matches `.nvmrc`) |

Then Project → **Deployments** → the latest one → **Redeploy**.

## Checklist if it still 404s

1. **Build Logs** of the deployment — did the build actually succeed and show the
   route table with `○ /`? If the build failed, the domain serves the last good
   (or no) deployment.
2. Confirm the domain is assigned to the **Production** deployment
   (Deployments list → the one marked *Production* → check the domain).
3. Make sure you pushed to the branch Vercel tracks (`main`) and that
   `git ls-files` shows `app/page.tsx` at the path above.
4. `.next/` and `.vercel/` must stay git-ignored (they already are).

## Local

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```
