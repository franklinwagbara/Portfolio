# Deploy Checklist

## Netlify Pre-rendering (Critical)

After deploying, go to **Netlify dashboard → Site settings → Build & deploy
→ Post processing → enable Prerendering**. Without this, Open Graph and
meta tags will not appear in LinkedIn/Slack/WhatsApp link previews because
the site is a client-side-rendered React SPA.

## Assets to Create

- `public/og-image.png` — 1200×630px. Should contain: your name, role
  ("Senior Software Engineer · Gemini 2.5 Pro Contributor"), a small photo
  or monogram, and your domain. Use [ogimage.gallery](https://ogimage.gallery)
  for inspiration, Figma or Canva for creation. Verify with
  [opengraph.xyz](https://opengraph.xyz).

- `public/favicon.png` — 32×32px or 64×64px site icon.

- `public/apple-touch-icon.png` — 180×180px for iOS home-screen bookmarks.

## Custom Domain (Recommended)

Purchase `franklinwagbara.dev` or `franklinwagbara.com` (~$10/yr) and point
it at your Netlify site. Update `SITE_URL` in `src/components/SEO/SEO.jsx`,
all hardcoded URLs in `public/index.html`, `public/robots.txt`, and
`public/sitemap.xml`.

## Case Studies

Case studies are behind a feature flag (`CASE_STUDIES_READY` in
`src/config.js`). Set it to `true` once all `{{ FRANKLIN: }}` placeholder
markers have been replaced with real content.
