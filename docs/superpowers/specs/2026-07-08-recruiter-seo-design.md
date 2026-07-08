# Recruiter SEO Design

Date: 2026-07-08
Canonical URL: https://harshad-portfolio.vercel.app/

## Goal

Make Harshad Hindlekar's portfolio easier for recruiters and hiring managers to find, preview, and understand in search results, social previews, and direct sharing. The work should improve technical SEO and recruiter-facing signals without changing the current mission-themed visual experience.

## Scope

- Update static document metadata in `public/index.html`.
- Add recruiter-focused structured data using JSON-LD.
- Add or update crawl discovery files in `public`.
- Replace Create React App defaults in `public/manifest.json`.
- Lightly improve visible copy where it helps recruiter search terms and candidate positioning.
- Verify with a production build and inspect generated output.

## Recruiter Search Positioning

The portfolio should clearly position Harshad as a software engineer focused on frontend and full stack development. Primary discoverability terms include:

- Harshad Hindlekar
- Frontend Developer
- Full Stack Developer
- React Developer
- Next.js Developer
- TypeScript
- JavaScript
- Vue.js
- Spring Boot
- FastAPI
- AWS
- India
- open to software engineering opportunities

## Metadata Design

`public/index.html` will use a stronger title and description:

- Title: `Harshad Hindlekar | Frontend & Full Stack Developer`
- Description: a concise recruiter-facing summary mentioning React, Next.js, TypeScript, dashboards, scalable web apps, and hiring availability.

The page will also include:

- Canonical link pointing to `https://harshad-portfolio.vercel.app/`.
- Open Graph metadata for LinkedIn, WhatsApp, Slack, and other rich previews.
- Twitter card metadata.
- Author and keyword metadata.
- Theme color aligned with the portfolio visual system.
- Public resume link metadata where appropriate.

## Structured Data

Add JSON-LD in `public/index.html` for:

- `Person`: name, job title, URL, email, image, sameAs social profiles, knowsAbout technologies, and available portfolio/resume links.
- `WebSite`: name, URL, description, author, and language.

This improves machine-readable recruiter context while keeping the visual page unchanged.

## Crawl Discovery

Update `public/robots.txt` to allow crawling and point to `https://harshad-portfolio.vercel.app/sitemap.xml`.

Add `public/sitemap.xml` with:

- Root URL.
- Section anchors for skills, projects, testimonials, and connect.
- Resume PDF URL.

The sitemap will use reasonable `priority` values and 2026-07-08 as `lastmod`.

## App Manifest

Replace Create React App defaults with portfolio-specific values:

- `name`: `Harshad Hindlekar Portfolio`
- `short_name`: `Harshad`
- `description`: recruiter-focused summary.
- `start_url`: `/`
- Colors aligned to the current dark mission theme.

## Visible Copy

Keep the current design and mission language. Add only lightweight content improvements that help recruiters understand:

- Role focus: frontend and full stack.
- Core stack: React, Next.js, TypeScript, Vue.js, Spring Boot, FastAPI, AWS.
- Availability: open to software engineering opportunities.
- Contact intent: recruiter and collaboration-friendly messaging.

## Verification

Run `npm run build`. Then inspect generated `build/index.html` and public output to confirm:

- Correct title and description.
- Correct canonical URL.
- Open Graph and Twitter tags exist.
- JSON-LD is valid JSON syntax.
- `sitemap.xml` and `robots.txt` are copied into the production build.
- No obvious build warnings introduced by the SEO changes.
