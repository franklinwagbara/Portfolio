# Franklin Wagbara — Portfolio

Personal portfolio site. Built with **Next.js 16 (App Router)**, **React 19**,
**TypeScript** and **Tailwind CSS v4**, exported as a fully static site.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Next.js dev server (`npm start` is an alias) |
| `npm run build` | Static export — writes the deployable site to `out/` |
| `npm run serve` | Serve the contents of `out/` locally to check a production build |

## Project layout

```
app/
  layout.tsx    Root layout — SEO metadata, JSON-LD, Google Fonts <link>
  page.tsx      The entire single-page portfolio (client component)
  globals.css   Tailwind v4 entry, theme tokens, keyframes, custom classes
public/         Static assets served at the site root
next.config.mjs Static-export configuration
netlify.toml    Netlify build command and publish directory
```

`app/page.tsx` is a straight port of the Figma Make redesign
(`Redesign Portfolio/src/App.tsx`) and `app/globals.css` of its `index.css`,
so the two render identically. Keep them that way when editing.

**One intentional deviation:** the three About-section sentences use commas and
full stops where the design source uses em dashes. That was a deliberate copy
change, not drift. Everything else is byte-identical to the design source.

The design source lives in `Redesign Portfolio/` (git-ignored, and excluded
from `tsconfig.json` so it is neither type-checked nor bundled). Diff
`app/page.tsx` against `Redesign Portfolio/src/App.tsx` after any design update;
the About wording above should be the only difference.

The CV is served from `public/resume.pdf` (a copy of `src/assets/cv.pdf`). Both
download links in the design point at `/resume.pdf`, so replacing that file is
all that is needed to publish a new CV.

### Fonts

Fraunces (display), Inter (sans) and JetBrains Mono (mono) are loaded from
Google Fonts via a `<link>` in `app/layout.tsx`. The redesign used an
`@import url(...)` at the top of its CSS; Next's CSS pipeline strips remote
`@import` rules, which silently falls back to system fonts and changes every
text metric on the page — so the stylesheet link must stay in the layout.

## Deployment

See [DEPLOY.md](DEPLOY.md).
