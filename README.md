# Greecon Platform

This repository is the first technical foundation for the Greecon Platform: a calm operational system for renewable energy, water management, agriculture, automation, monitoring, and resource optimization.

It also contains the public Greecon marketing website in `site/` — see below.

The platform is organized as a TypeScript monorepo:

- `apps/web` - Next.js operator interface.
- `apps/api` - NestJS API and platform services.
- `apps/edge-simulator` - simulated edge gateway, telemetry publisher, buffer, and command acknowledgement flow.
- `packages/shared` - public-safe TypeScript contracts, canonical points, roles, message schemas, and MQTT topics.
- `packages/gaia-core` - internal safety, state, and rule primitives. Do not expose confidential GAIA internals to browser bundles or public copy.
- `infra/docker` - local Postgres/TimescaleDB, Mosquitto, Grafana, API, web, and edge simulator setup.
- `infra/terraform` - Google Cloud deployment foundation placeholders.
- `docs` - architecture, data, security, edge, frontend, and deployment documentation.

## Local Development

Install dependencies:

```bash
npm install
```

Build packages and run tests:

```bash
npm run build:packages
npm test
```

Run the full local stack:

```bash
docker compose up --build
```

Local services:

- Web: `http://localhost:3000`
- API: `http://localhost:4000`
- Swagger: `http://localhost:4000/docs`
- Postgres/TimescaleDB: `localhost:5432`
- Mosquitto MQTT: `localhost:1883`
- Grafana: `http://localhost:3001`

The MVP uses deterministic demo data and simulated commands by default. Real device credentials, gateway certificates, Stripe billing, and production secrets are intentionally excluded.

## Public Website (`site/`)

`site/` is a standalone Next.js app for the public Greecon marketing website — Home, Technology & Process, Agriculture, Energy, Water, and GAIA Tech — separate from the authenticated operator interface in `web/`. It uses the same brand palette and typography (IBM Plex Serif, self-hosted via `next/font`) as the operator interface.

```bash
cd site
npm install
npm run dev
```

Runs at `http://localhost:3100`.

### Deploying `site/` to GitHub Pages

`.github/workflows/deploy-site.yml` builds `site/` as a static export and publishes it to GitHub Pages on every push to `main` that touches `site/`. One-time setup:

1. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main` (or run the workflow manually from the **Actions** tab) — the site will be live at `https://<org>.github.io/<repo>/`.

To serve it from a custom domain (e.g. `greecon.earth`) instead of the `/‹repo›/` sub-path:

1. Add a `site/public/CNAME` file containing the domain, e.g. `greecon.earth`.
2. In the workflow, change `NEXT_BASE_PATH` to an empty string.
3. Point the domain's DNS at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), and set the domain again under **Settings → Pages → Custom domain**.

### Deploying `site/` to Railway

`site/railway.json` configures the build (`npm ci && npm run build`, a static export) and start command (`npm run start`, which serves the exported `out/` folder with [`serve`](https://www.npmjs.com/package/serve) on Railway's `$PORT`). This needs a one-time connection in the Railway dashboard — Claude doesn't have a Railway account or API token to do this from here:

1. In Railway, **New Project → Deploy from GitHub repo** and pick `greecon-tech/web`.
2. In the service's **Settings → Source**, set **Root Directory** to `site`. Railway will then pick up `site/railway.json` automatically.
3. Deploy. Railway assigns a `*.up.railway.app` URL by default; add `greecon.earth` under **Settings → Networking → Custom Domain** when ready, and point its DNS per Railway's instructions.

No `NEXT_BASE_PATH` is needed for Railway — it serves from the domain root, unlike the GitHub Pages `/‹repo›/` sub-path above.

### SEO, answer engines, and site metadata

All search-related metadata for `site/` lives in one place so pages can't drift apart:

- `site/src/lib/seo.ts` — per-page title, meta description, canonical path, social-card text, breadcrumb label and `lastModified` date, plus the company facts (legal name, address, contact, social profiles). Pages call `pageMetadata("<key>")`.
- Social profiles (Instagram `@greecon`, X `@greeconHQ`, LinkedIn `/company/greecon`) are defined once as `SOCIAL` in `seo.ts` and used by the footer and the structured data. The footer deliberately mirrors the blog's (`greecontech/blog`) so both sites look the same; change them together.
- `site/src/lib/schema.ts` — the JSON-LD graph (Organization, WebSite, WebPage, BreadcrumbList, Service, software entities). The site-wide part renders in `layout.tsx`; each page adds its own via `<JsonLd data={pageGraph(...)} />`.
- `site/src/app/sitemap.ts`, `robots.ts`, `manifest.ts` and `site/public/llms.txt` — crawler-facing files. Sitemap dates come from `lastModified` in `seo.ts`, so **bump that date when a page's content changes**.
- `site/public/serve.json` — redirects `/page` to `/page/`, and sets cache and security headers on Railway. The start command is `serve out` (not `serve -s`): single-page-app mode would return the home page for every URL and a 200 for unknown paths.

When you add a page, add it to `PAGES` in `seo.ts` (it is then picked up by the sitemap and metadata) to `public/llms.txt`, and to the `links` list in `site/src/components/SiteHeader.tsx` (the site navigation: inline links on desktop, a Menu button on phones and tablets up to 1100px).

Any text that describes how the site handles personal data (`/privacy`, `/terms`) must be kept in line with what the site actually does — for example, if a signup form or analytics is added, update both pages first.

### Greecon Blog integration (`blog.greecon.earth`)

The blog is a separate Next.js site (repo `greecontech/blog`). The website connects to it in four ways:

- **Links:** the footer, the site navigation, and a "More on … on the Greecon Blog" link on each sector page (`BlogCta` in `DetailPage.tsx`, which uses the blog's `?sector=` filter). All open in the same tab. The shared URL is `BLOG_URL` in `site/src/lib/seo.ts`.
- **Latest articles on the home page, and related articles on the Energy, Agriculture, Water and Technology pages** (`BlogTeaser`). `site/src/lib/blog.ts` reads the blog's public `sitemap.xml`, then each article's `BlogPosting` JSON-LD (headline, description, date, category). Categories map to pages: Energy → Energy, Agriculture → Agriculture, Water → Water, Platform → Technology & Process.
- **Structured data:** the home page's JSON-LD includes the `Blog` and the featured `BlogPosting`s, linked to the Greecon organization.
- **Privacy:** the Privacy Notice names the blog as part of the Site. The blog sets no cookies and loads no third-party scripts; keep it that way, or update the notice first.

**Blog languages.** The blog is multilingual too (English at the root, Albanian at `/sq/`). For each website language the build checks the blog's sitemap: if the blog serves that language, the website's blog links (header, footer, "More on … on the Greecon Blog", "All articles"), the article cards and the structured data use it (for example `blog.greecon.earth/sq/blog/<slug>`); if not, they fall back to the English blog and a short note says the articles are in English, so a link can never lead to a 404. The blog's category identifiers stay English; the website shows them with the blog's own Albanian words.

Because the website is a static export, article lists are read **at build time**. After publishing a new article, redeploy the website (Railway → the `site` service → **Redeploy**) for it to appear here. If the blog is unreachable during a build, the build still succeeds and the article sections are simply left out. Automating the redeploy (for example, a GitHub Action in the blog repo that calls Railway when an article is published) needs a Railway API token stored as a secret.

### Languages (English and Albanian)

English is the default and lives at the site root (`greecon.earth/…`); Albanian lives under `/sq/` (`greecon.earth/sq/…`). There is no automatic redirect by browser language (it hurts search indexing); visitors switch with the language links in the header menu and the footer. The 404 page is shared and written in both languages.

- **Text** lives in `site/src/i18n/dictionaries/en.tsx` and `sq.tsx`. Both must have the same shape: TypeScript refuses to build if an Albanian entry is missing. Titles and descriptions for search engines are in each dictionary's `meta`. Brand and product names (Greecon, GAIA Tech, SCADA, IoT) are not translated.
- **Pages** are language-neutral components in `site/src/views/`; the route files are thin: `src/app/(en)/…` for English and `src/app/[lang]/…` for every other language. Each language is its own root layout, so `<html lang>` is correct (the 404 uses Next's experimental `globalNotFound` flag for this reason).
- **Search engines:** every page has `hreflang` alternates (plus `x-default` = English), a per-language canonical URL, localized Open Graph tags and structured data, and each language has its own sitemap entries.
- **Blog:** the blog stays in English; on Albanian pages its article cards are marked `lang="en"` and a short note says so.
- **Adding a language:** add its code and details to `src/i18n/config.ts`, create `dictionaries/<code>.tsx` (copy `en.tsx` and translate), register it in `dictionaries/index.ts`, and add its keywords to the sitemap/llms files. Pages, the sitemap, hreflang and the switcher pick it up automatically.
- **Translation review:** the Albanian text (especially `terms` and `privacy`) should be reviewed by a native speaker and, for the legal pages, a lawyer. If the two languages ever disagree, decide in the Terms which version prevails.

