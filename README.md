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
- `site/src/lib/schema.ts` — the JSON-LD graph (Organization, WebSite, WebPage, BreadcrumbList, Service, software entities). The site-wide part renders in `layout.tsx`; each page adds its own via `<JsonLd data={pageGraph(...)} />`.
- `site/src/app/sitemap.ts`, `robots.ts`, `manifest.ts` and `site/public/llms.txt` — crawler-facing files. Sitemap dates come from `lastModified` in `seo.ts`, so **bump that date when a page's content changes**.
- `site/public/serve.json` — redirects `/page` to `/page/`, and sets cache and security headers on Railway. The start command is `serve out` (not `serve -s`): single-page-app mode would return the home page for every URL and a 200 for unknown paths.

When you add a page, add it to `PAGES` in `seo.ts` (it is then picked up by the sitemap and metadata) to `public/llms.txt`, and to the `links` list in `site/src/components/SiteHeader.tsx` (the phone/tablet menu).

Any text that describes how the site handles personal data (`/privacy`, `/terms`) must be kept in line with what the site actually does — for example, if a signup form or analytics is added, update both pages first.
