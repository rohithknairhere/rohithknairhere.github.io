# Rohith K Nair — Portfolio

Personal site built with Vite, React, TypeScript, Tailwind CSS and Framer Motion. Fully static: no backend.

## Editing content

All text lives in **`src/data/content.ts`**. Search it for `PLACEHOLDER` to find what still needs filling in:

- `projects[].github`: add repo links (an empty string hides the link).
- `projects[].details`: 2–3 bullet points per project for the pop-up (empty shows "More detail coming soon").
- `leadership[].period`: add dates if you want them shown.

The site's content mirrors `public/resume.pdf`. When you update your resume, replace that file (keep the name) and update `content.ts` to match.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/ (prerendered HTML)
npm run preview    # serve the production build
```

## Deploy

### Option A: Vercel (recommended)

1. Push this folder to a new GitHub repo (see below).
2. Go to <https://vercel.com/new>, sign in with GitHub, and import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click **Deploy**.
4. Every push to `main` redeploys automatically.

### Option B: GitHub Pages

1. Push this folder to a GitHub repo.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the workflow from the **Actions** tab). The included workflow builds and publishes the site.
4. The site is served at `https://rohithknairhere.github.io/<repo-name>/`. If you name the repo
   `rohithknairhere.github.io`, it's served at `https://rohithknairhere.github.io/`.

### Pushing to GitHub the first time

Create an empty repo on GitHub (no README), then from this folder:

```bash
git remote add origin https://github.com/rohithknairhere/<repo-name>.git
git push -u origin main
```
