# Recruiter SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Harshad Hindlekar's portfolio easier for recruiters to find, preview, and evaluate through improved SEO metadata, crawl files, structured data, app metadata, and recruiter-facing copy.

**Architecture:** This is a static SEO pass for a Create React App portfolio. Search-critical metadata belongs in `public/index.html` because crawlers and social preview bots can read it before React hydrates; visible recruiter copy stays in the existing React components without changing layout or visual direction.

**Tech Stack:** Create React App, React 18, static public assets, JSON-LD, XML sitemap, robots.txt, npm production build.

---

## File Structure

- Modify `public/index.html`: static title, meta description, canonical URL, Open Graph tags, Twitter card tags, resume alternate link, and JSON-LD for `Person` and `WebSite`.
- Modify `public/manifest.json`: replace Create React App defaults with portfolio-specific install metadata.
- Modify `public/robots.txt`: keep crawl access open and add the sitemap URL.
- Create `public/sitemap.xml`: list the root page, major section anchors, and resume PDF.
- Modify `src/components/Banner.js`: strengthen recruiter-facing hero text and call-to-action labels without changing component structure.
- Modify `src/components/Skills.js`: add searchable role and stack language to the skills intro.
- Modify `src/components/Contact.js`: make contact copy explicitly recruiter-friendly and opportunity-oriented.
- Modify `src/components/Footer.js`: update footer headline to support software engineering opportunity language.

---

### Task 1: Static SEO Metadata

**Files:**
- Modify: `public/index.html`

- [ ] **Step 1: Confirm current static metadata is weak**

Run: `Select-String -Path public\index.html -Pattern '<title>|name="description"|og:|twitter:|application/ld\\+json|canonical'`

Expected: output includes `HARSHAD` and the existing description, with no canonical link, no Open Graph tags, no Twitter tags, and no JSON-LD script.

- [ ] **Step 2: Replace the head SEO block**

In `public/index.html`, update the metadata near the top of `<head>` to this exact block:

```html
    <link rel="icon" href="%PUBLIC_URL%/logo-icon.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#02070d" />
    <meta
      name="description"
      content="Harshad Hindlekar is a frontend and full stack developer in India building React, Next.js, TypeScript, Vue.js, AWS, and modern backend applications. Open to software engineering opportunities."
    />
    <meta name="author" content="Harshad Hindlekar" />
    <meta
      name="keywords"
      content="Harshad Hindlekar, Frontend Developer, Full Stack Developer, React Developer, Next.js Developer, TypeScript Developer, JavaScript Developer, Vue.js Developer, Spring Boot, FastAPI, AWS, Software Engineer India"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://harshad-portfolio.vercel.app/" />
    <link rel="me" href="mailto:harshadhindlekar24@gmail.com" />
    <link rel="author" href="https://www.linkedin.com/in/harshad-hindlekar-b94a07236/" />
    <link rel="alternate" type="application/pdf" href="%PUBLIC_URL%/pdf/Harshad_Resume.pdf" title="Harshad Hindlekar Resume" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Harshad Hindlekar Portfolio" />
    <meta property="og:title" content="Harshad Hindlekar | Frontend & Full Stack Developer" />
    <meta
      property="og:description"
      content="Frontend and full stack developer building recruiter-ready React, Next.js, TypeScript, Vue.js, AWS, and backend projects. View portfolio, projects, testimonials, and resume."
    />
    <meta property="og:url" content="https://harshad-portfolio.vercel.app/" />
    <meta property="og:image" content="https://harshad-portfolio.vercel.app/logo-icon.jpg" />
    <meta property="og:image:alt" content="Harshad Hindlekar portfolio logo" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Harshad Hindlekar | Frontend & Full Stack Developer" />
    <meta
      name="twitter:description"
      content="React, Next.js, TypeScript, Vue.js, AWS, and backend portfolio for software engineering recruiters."
    />
    <meta name="twitter:image" content="https://harshad-portfolio.vercel.app/logo-icon.jpg" />
```

- [ ] **Step 3: Update the page title**

Change:

```html
    <title>HARSHAD</title>
```

To:

```html
    <title>Harshad Hindlekar | Frontend & Full Stack Developer</title>
```

- [ ] **Step 4: Add JSON-LD before closing `</head>`**

Insert this script after the font links and before `</head>`:

```html
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": "https://harshad-portfolio.vercel.app/#person",
            "name": "Harshad Hindlekar",
            "url": "https://harshad-portfolio.vercel.app/",
            "image": "https://harshad-portfolio.vercel.app/logo-icon.jpg",
            "email": "mailto:harshadhindlekar24@gmail.com",
            "jobTitle": "Frontend and Full Stack Developer",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.linkedin.com/in/harshad-hindlekar-b94a07236/",
              "https://github.com/HarshadHindlekar",
              "https://www.instagram.com/h_a_r_s_h_a_d_2_4/"
            ],
            "knowsAbout": [
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Vue.js",
              "Nuxt 3",
              "Spring Boot",
              "FastAPI",
              "AWS",
              "MongoDB",
              "PostgreSQL",
              "Three.js",
              "React Three Fiber"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Software Engineer",
              "skills": "React, Next.js, TypeScript, Vue.js, Spring Boot, FastAPI, AWS, MongoDB, PostgreSQL"
            },
            "mainEntityOfPage": "https://harshad-portfolio.vercel.app/",
            "subjectOf": [
              {
                "@type": "CreativeWork",
                "name": "Harshad Hindlekar Resume",
                "url": "https://harshad-portfolio.vercel.app/pdf/Harshad_Resume.pdf"
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://harshad-portfolio.vercel.app/#website",
            "url": "https://harshad-portfolio.vercel.app/",
            "name": "Harshad Hindlekar Portfolio",
            "description": "Portfolio of Harshad Hindlekar, a frontend and full stack developer building React, Next.js, TypeScript, Vue.js, AWS, and modern backend applications.",
            "inLanguage": "en-IN",
            "author": {
              "@id": "https://harshad-portfolio.vercel.app/#person"
            }
          }
        ]
      }
    </script>
```

- [ ] **Step 5: Verify metadata exists**

Run: `Select-String -Path public\index.html -Pattern 'canonical|og:title|twitter:card|application/ld\\+json|Frontend & Full Stack Developer'`

Expected: output includes the canonical link, Open Graph title, Twitter card, JSON-LD script, and new title.

---

### Task 2: Crawl Discovery Files

**Files:**
- Modify: `public/robots.txt`
- Create: `public/sitemap.xml`

- [ ] **Step 1: Update robots.txt**

Replace `public/robots.txt` with:

```txt
User-agent: *
Allow: /

Sitemap: https://harshad-portfolio.vercel.app/sitemap.xml
```

- [ ] **Step 2: Create sitemap.xml**

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://harshad-portfolio.vercel.app/</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://harshad-portfolio.vercel.app/#skills</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://harshad-portfolio.vercel.app/#projects</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://harshad-portfolio.vercel.app/#testimonials</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://harshad-portfolio.vercel.app/#connect</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://harshad-portfolio.vercel.app/pdf/Harshad_Resume.pdf</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Verify crawl files**

Run: `Get-Content public\robots.txt` and `Select-String -Path public\sitemap.xml -Pattern '<loc>|sitemap.org|Harshad_Resume'`

Expected: robots includes the sitemap URL; sitemap includes all six URLs and the sitemap namespace.

---

### Task 3: App Manifest

**Files:**
- Modify: `public/manifest.json`

- [ ] **Step 1: Replace manifest defaults**

Replace `public/manifest.json` with:

```json
{
  "short_name": "Harshad",
  "name": "Harshad Hindlekar Portfolio",
  "description": "Frontend and full stack developer portfolio featuring React, Next.js, TypeScript, Vue.js, AWS, backend projects, testimonials, and resume.",
  "icons": [
    {
      "src": "logo-icon.jpg",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/jpg"
    },
    {
      "src": "logo-icon.jpg",
      "type": "image/jpg",
      "sizes": "192x192"
    },
    {
      "src": "logo-icon.jpg",
      "type": "image/jpg",
      "sizes": "512x512"
    }
  ],
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "orientation": "portrait-primary",
  "theme_color": "#02070d",
  "background_color": "#02070d",
  "categories": ["portfolio", "productivity", "business"],
  "lang": "en-IN"
}
```

- [ ] **Step 2: Validate JSON**

Run: `node -e "JSON.parse(require('fs').readFileSync('public/manifest.json','utf8')); console.log('manifest ok')"`

Expected: `manifest ok`.

---

### Task 4: Recruiter-Facing Visible Copy

**Files:**
- Modify: `src/components/Banner.js`
- Modify: `src/components/Skills.js`
- Modify: `src/components/Contact.js`
- Modify: `src/components/Footer.js`

- [ ] **Step 1: Update hero role list and intro**

In `src/components/Banner.js`, change:

```js
  const toRotate = ["Software Engineer", "Frontend Specialist", "Full Stack Developer"];
```

To:

```js
  const toRotate = ["Software Engineer", "React Developer", "Full Stack Developer"];
```

Change the hero paragraph to:

```jsx
                    <p className="my-intro">I am a frontend and full stack developer in India building real-time web apps, analytics dashboards, and scalable platforms with React, Next.js, TypeScript, Vue.js, Spring Boot, FastAPI, and AWS. I turn complex product problems into fast, reliable user experiences and I am open to software engineering opportunities.</p>
```

Change the primary button text from `Explore Mission` to `Explore Skills`.

- [ ] **Step 2: Update skills intro**

In `src/components/Skills.js`, replace the paragraph with:

```jsx
          <p>
            Recruiter-relevant technologies I use to ship production web products:
            React, Next.js, TypeScript, Vue.js, Spring Boot, FastAPI, AWS, databases,
            and interactive 3D interfaces.
          </p>
```

- [ ] **Step 3: Update contact copy**

In `src/components/Contact.js`, replace:

```jsx
                    <h2>Let's Build What's Next. Together.</h2>
                    <p>Ready to collaborate or launch your next idea? Let's establish contact.</p>
```

With:

```jsx
                    <h2>Recruiters, Teams, Let's Connect.</h2>
                    <p>Open to frontend and full stack software engineering roles where React, Next.js, TypeScript, cloud, and product thinking matter.</p>
```

Replace the status card text with:

```jsx
                      <strong>Status: Open to Opportunities</strong>
                      <span>Available for recruiter conversations, engineering roles, and product-focused collaboration.</span>
```

- [ ] **Step 4: Update footer headline**

In `src/components/Footer.js`, replace:

```jsx
            <h3>Let's Build Something Amazing</h3>
```

With:

```jsx
            <h3>Frontend & Full Stack Developer Open to Opportunities</h3>
```

- [ ] **Step 5: Verify copy appears**

Run: `Select-String -Path src\components\Banner.js,src\components\Skills.js,src\components\Contact.js,src\components\Footer.js -Pattern 'React Developer|open to software engineering opportunities|Recruiter-relevant|Open to Opportunities|Full Stack Developer Open'`

Expected: output includes all five recruiter-facing phrases.

---

### Task 5: Production Verification

**Files:**
- Inspect: `build/index.html`
- Inspect: `build/robots.txt`
- Inspect: `build/sitemap.xml`

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: Create React App reports `Compiled successfully`.

- [ ] **Step 2: Verify build metadata**

Run: `Select-String -Path build\index.html -Pattern 'canonical|og:title|twitter:card|application/ld\\+json|Harshad Hindlekar \\| Frontend'`

Expected: generated `build/index.html` contains canonical, Open Graph, Twitter card, JSON-LD, and the new title.

- [ ] **Step 3: Verify public files copied**

Run: `Test-Path build\sitemap.xml; Test-Path build\robots.txt; Test-Path build\manifest.json`

Expected: all three commands return `True`.

- [ ] **Step 4: Verify JSON-LD syntax from source**

Run: `node -e "const html=require('fs').readFileSync('public/index.html','utf8'); const m=html.match(/<script type=\"application\\/ld\\+json\">([\\s\\S]*?)<\\/script>/); JSON.parse(m[1]); console.log('json-ld ok')"`

Expected: `json-ld ok`.

- [ ] **Step 5: Review git diff**

Run: `git diff -- public/index.html public/manifest.json public/robots.txt public/sitemap.xml src/components/Banner.js src/components/Skills.js src/components/Contact.js src/components/Footer.js`

Expected: diff contains only SEO metadata, crawl files, manifest metadata, and recruiter copy edits.

