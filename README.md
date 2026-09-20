# anirudh-site — "Anodized"

Personal site / online résumé. Next.js 16 (App Router) · TypeScript · Tailwind v4 · Motion · react-three-fiber · Lenis.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Where things live

- `src/content/*.ts` — **all copy and data** (profile, projects, hardware, interests, skills, experience). Grep for `TODO` to find placeholders.
- `src/app/globals.css` — design tokens (`--ink`, `--tangerine`, `--rim`…), surfaces (`.glass`, `.brushed`, `.chamfer`, `.beam`), keyframes, print styles.
- `src/components/` — one folder/file per section; `ui/` holds primitives (Magnetic, Reveal, Counter, Cursor, Nav, Rail, StudioLight, SmoothScroll).
- `src/lib/github.ts` — server-side GitHub repo metadata (ISR, 1h) with a static fallback.
- `src/fonts/` — Commit Mono (self-hosted). Bricolage Grotesque + Instrument Serif come from `next/font/google`.

## Routes

- `/` — the site
- `/resume` — print-friendly résumé (⌘P → clean black-on-white)
- `/*` — "no signal" 404

## To do before launch

- Fill every `TODO` in `src/content/`
- Drop `resume.pdf` into `public/`
- Set `metadataBase` in `src/app/layout.tsx` to the real domain
