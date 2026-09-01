# Deploy Checklist

## Netlify

`netlify.toml` already sets the build:

```toml
[build]
  command = "npm run build"
  publish = "out"
```

`next build` runs with `output: "export"`, so the result is plain static
HTML/CSS/JS in `out/` — no Next.js runtime or Netlify adapter needed.

**Pre-rendering is no longer required.** Meta and Open Graph tags are baked
into `out/index.html` at build time, so LinkedIn/Slack/WhatsApp previews work
without Netlify's post-processing prerender step. (The old Create React App
build injected them client-side, which is why it needed prerendering.)

## Assets to Create

- `public/og-image.png` — 1200×630px. Should contain: your name, role
  ("Senior Software Engineer · Gemini 2.5 Pro Contributor"), a small photo
  or monogram, and your domain. Verify with [opengraph.xyz](https://opengraph.xyz).

- `public/apple-touch-icon.png` — 180×180px for iOS home-screen bookmarks.

Both are referenced by `app/layout.tsx` but not yet committed.

## Custom Domain (Recommended)

Purchase `franklinwagbara.dev` or `franklinwagbara.com` (~$10/yr) and point
it at your Netlify site. Then update `SITE_URL` in `app/layout.tsx` and the
hardcoded URLs in `public/robots.txt` and `public/sitemap.xml`.
