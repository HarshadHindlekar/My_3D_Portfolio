# Mission Scrollytelling Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the existing React portfolio into a space-mission scrollytelling experience with a mission rail, five numbered chapters, adapted R3F visuals, interactive projects/testimonials, and a polished responsive finish.

**Architecture:** Add a small mission shell around the existing app sections. Keep `Service.js` as the content source, adapt current section components in place, and add focused shell components for the mission rail, background, chapter wrapper, and shared metadata.

**Tech Stack:** Create React App, React 18, React Bootstrap, React Three Fiber, Drei, existing CSS files, existing Centra fonts and image assets.

---

## File Structure

- Create `src/components/MissionData.js`
  - Exports the five chapter definitions and mission stats.
  - Keeps section ids aligned with existing anchors: `home`, `skills`, `projects`, `testimonials`, `connect`.

- Create `src/components/MissionLayout.js`
  - Owns active chapter state, scroll progress, and global page shell.
  - Renders `MissionBackground`, `MissionRail`, and the existing children.

- Create `src/components/MissionRail.js`
  - Desktop left mission story rail.
  - Mobile compact progress strip.
  - Receives `chapters`, `activeChapter`, and `scrollProgress`.

- Create `src/components/MissionBackground.js`
  - Shared space background, orbit paths, scan lines, and star layer.
  - Reuses `StarsCanvas`.

- Create `src/components/MissionSection.js`
  - Shared section wrapper for chapter number, chapter label, reveal classes, and consistent structure.

- Modify `src/App.js`
  - Wrap existing section components in `MissionLayout`.
  - Keep order: `Banner`, `Skills`, `Projects`, `Testimonials`, `Contact`, `Footer`.

- Modify `src/components/NavBar.js`
  - Use the shared chapter metadata.
  - Keep current labels in top nav.
  - Keep resume/social links.

- Modify `src/components/Banner.js`
  - Turn hero into `01 Launch`.
  - Shorten intro, add code block, mission CTAs, stats, and portrait/orbit composition.

- Modify `src/components/Skills.js` and `src/components/Skills-comps/Tech.js`
  - Turn skills into `02 Systems`.
  - Reframe technologies as connected nodes.

- Modify `src/components/Projects.js` and `src/components/ProjectCard.js`
  - Turn projects into `03 Launchpad`.
  - Replace passive marquee with controlled carousel state.

- Modify `src/components/Testimonials.js` and `src/components/Testimony-comps/PeopleCard.js`
  - Turn testimonials into `04 Signals`.
  - Use a transmission panel with excerpts, avatars, arrows, and waveform styling.

- Modify `src/components/Contact.js`
  - Turn contact into `05 Contact`.
  - Preserve form behavior and Earth canvas.
  - Add status panel and direct contact methods.

- Modify CSS:
  - `src/App.css`
  - `src/index.css`
  - `src/css/Navbar.css`
  - `src/css/Banner.css`
  - `src/css/Skills.css`
  - `src/css/Projects.css`
  - `src/css/Testimonials.css`
  - `src/css/Contact.css`
  - `src/css/Footer.css`

---

### Task 1: Add Mission Metadata And Shell Components

**Files:**
- Create: `src/components/MissionData.js`
- Create: `src/components/MissionLayout.js`
- Create: `src/components/MissionRail.js`
- Create: `src/components/MissionBackground.js`
- Create: `src/components/MissionSection.js`
- Modify: `src/App.js`
- Modify: `src/App.css`

- [ ] **Step 1: Create shared chapter data**

Add `src/components/MissionData.js`:

```javascript
export const missionChapters = [
  { id: 'home', number: '01', label: 'Launch', navLabel: 'Home' },
  { id: 'skills', number: '02', label: 'Systems', navLabel: 'Skills' },
  { id: 'projects', number: '03', label: 'Launchpad', navLabel: 'Projects' },
  { id: 'testimonials', number: '04', label: 'Signals', navLabel: 'Testimonials' },
  { id: 'connect', number: '05', label: 'Contact', navLabel: 'Connect' },
];

export const missionStats = [
  { value: '3+', label: 'Years Experience' },
  { value: '100+', label: 'Projects & Features' },
  { value: '10+', label: 'Technologies' },
  { value: '\u221e', label: 'Curiosity', ariaLabel: 'Infinite Curiosity' },
];
```

- [ ] **Step 2: Add the mission section wrapper**

Add `src/components/MissionSection.js`:

```javascript
export const MissionSection = ({ id, number, label, eyebrow, children, className = '' }) => {
  return (
    <section id={id} className={`mission-section ${className}`.trim()} data-chapter={id}>
      <div className="mission-section__meta" aria-hidden="true">
        <span>{number}</span>
        <strong>{label}</strong>
      </div>
      {eyebrow ? (
        <p className="mission-section__eyebrow">
          <span>{number}</span>
          {eyebrow}
        </p>
      ) : null}
      {children}
    </section>
  );
};
```

- [ ] **Step 3: Add the mission background**

Add `src/components/MissionBackground.js`:

```javascript
import StarsCanvas from './Banner-Comps/Stars';

export const MissionBackground = () => {
  return (
    <div className="mission-background" aria-hidden="true">
      <StarsCanvas />
      <div className="mission-background__grid" />
      <div className="mission-background__orbit mission-background__orbit--one" />
      <div className="mission-background__orbit mission-background__orbit--two" />
      <div className="mission-background__planet-glow" />
    </div>
  );
};
```

- [ ] **Step 4: Add the mission rail**

Add `src/components/MissionRail.js`:

```javascript
export const MissionRail = ({ chapters, activeChapter, scrollProgress }) => {
  return (
    <>
      <aside className="mission-rail" aria-label="Mission story navigation">
        <div className="mission-rail__title">Mission Story</div>
        <div className="mission-rail__track">
          <span className="mission-rail__progress" style={{ height: `${scrollProgress}%` }} />
          {chapters.map((chapter) => {
            const isActive = chapter.id === activeChapter;
            return (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className={`mission-rail__item ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className="mission-rail__dot" />
                <span className="mission-rail__number">{chapter.number}</span>
                <span className="mission-rail__label">{chapter.label}</span>
              </a>
            );
          })}
        </div>
        <div className="mission-rail__footer">Follow the Mission</div>
      </aside>
      <div className="mission-mobile-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>
    </>
  );
};
```

- [ ] **Step 5: Add the layout controller**

Add `src/components/MissionLayout.js`:

```javascript
import { useEffect, useState } from 'react';
import { missionChapters } from './MissionData';
import { MissionBackground } from './MissionBackground';
import { MissionRail } from './MissionRail';

export const MissionLayout = ({ children }) => {
  const [activeChapter, setActiveChapter] = useState(missionChapters[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sections = missionChapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveChapter(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.12, 0.3, 0.55],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="mission-layout">
      <MissionBackground />
      <MissionRail
        chapters={missionChapters}
        activeChapter={activeChapter}
        scrollProgress={scrollProgress}
      />
      <main className="mission-main">{children}</main>
    </div>
  );
};
```

- [ ] **Step 6: Wrap the app**

Modify `src/App.js` to:

```javascript
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { MissionLayout } from './components/MissionLayout';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem('attempts', '0');
  }, []);

  return (
    <div className="App">
      <NavBar />
      <MissionLayout>
        <Banner />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </MissionLayout>
    </div>
  );
}

export default App;
```

- [ ] **Step 7: Add base shell CSS**

Append to `src/App.css`:

```css
:root {
  --mission-bg: #02070d;
  --mission-bg-soft: #07111c;
  --mission-surface: rgba(5, 18, 28, 0.72);
  --mission-surface-strong: rgba(7, 22, 34, 0.9);
  --mission-border: rgba(99, 245, 229, 0.25);
  --mission-border-strong: rgba(99, 245, 229, 0.62);
  --mission-accent: #63f5e5;
  --mission-accent-strong: #7ffdf0;
  --mission-blue: #3587ff;
  --mission-text: #f7fbff;
  --mission-muted: #a9bac7;
  --mission-dim: #6f8392;
  --mission-rail-width: 112px;
}

.App {
  min-height: 100vh;
  background:
    radial-gradient(circle at 75% 18%, rgba(53, 135, 255, 0.17), transparent 30%),
    radial-gradient(circle at 24% 58%, rgba(99, 245, 229, 0.1), transparent 36%),
    var(--mission-bg);
  color: var(--mission-text);
}

.mission-layout {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  isolation: isolate;
}

.mission-main {
  position: relative;
  z-index: 2;
  margin-left: var(--mission-rail-width);
}

.mission-section {
  position: relative;
  min-height: 100vh;
  padding: 112px clamp(24px, 5vw, 76px);
  border-bottom: 1px solid rgba(99, 245, 229, 0.12);
}

.mission-section__meta {
  display: none;
}

.mission-section__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  color: var(--mission-accent);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

.mission-section__eyebrow span {
  color: var(--mission-text);
}

.mission-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(2, 7, 13, 0.1), rgba(2, 7, 13, 0.78)),
    var(--mission-bg);
}

.mission-background .canvas-stars-cointainer {
  position: absolute;
  inset: 0;
  opacity: 0.78;
}

.mission-background__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 245, 229, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 245, 229, 0.045) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(180deg, transparent, #000 12%, #000 70%, transparent);
}

.mission-background__orbit {
  position: absolute;
  width: 78vw;
  height: 32vw;
  border: 1px solid rgba(99, 245, 229, 0.26);
  border-radius: 50%;
  transform: rotate(-28deg);
  filter: drop-shadow(0 0 12px rgba(99, 245, 229, 0.2));
}

.mission-background__orbit--one {
  top: 11%;
  left: 36%;
}

.mission-background__orbit--two {
  top: 56%;
  left: 22%;
  width: 66vw;
  opacity: 0.58;
}

.mission-background__planet-glow {
  position: absolute;
  right: -15vw;
  bottom: -16vw;
  width: 48vw;
  height: 48vw;
  border-radius: 50%;
  border-top: 2px solid rgba(112, 202, 255, 0.6);
  background: radial-gradient(circle at 50% 35%, rgba(47, 121, 205, 0.3), transparent 60%);
  box-shadow: 0 -24px 80px rgba(53, 135, 255, 0.25);
}

.mission-rail {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: var(--mission-rail-width);
  height: 100vh;
  padding: 92px 18px 28px;
  border-right: 1px solid rgba(99, 245, 229, 0.24);
  background: rgba(2, 7, 13, 0.46);
  backdrop-filter: blur(16px);
}

.mission-rail__title,
.mission-rail__footer {
  color: var(--mission-muted);
  font-size: 11px;
  line-height: 1.25;
  text-align: center;
  text-transform: uppercase;
}

.mission-rail__track {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 230px);
  min-height: 460px;
  margin: 28px 0;
}

.mission-rail__track::before,
.mission-rail__progress {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  transform: translateX(-50%);
}

.mission-rail__track::before {
  height: 100%;
  background: repeating-linear-gradient(to bottom, rgba(169, 186, 199, 0.4) 0 10px, transparent 10px 20px);
}

.mission-rail__progress {
  background: var(--mission-accent);
  box-shadow: 0 0 16px rgba(99, 245, 229, 0.75);
}

.mission-rail__item {
  position: relative;
  display: grid;
  place-items: center;
  gap: 5px;
  color: var(--mission-muted);
  text-decoration: none;
}

.mission-rail__dot {
  width: 18px;
  height: 18px;
  border: 1px solid rgba(169, 186, 199, 0.65);
  border-radius: 50%;
  background: var(--mission-bg);
}

.mission-rail__item.is-active .mission-rail__dot {
  border-color: var(--mission-accent);
  background: var(--mission-accent);
  box-shadow: 0 0 0 7px rgba(99, 245, 229, 0.16), 0 0 22px rgba(99, 245, 229, 0.85);
}

.mission-rail__number {
  font-size: 22px;
  font-weight: 700;
}

.mission-rail__label {
  font-size: 10px;
  text-transform: uppercase;
}

.mission-rail__item.is-active {
  color: var(--mission-accent);
}

.mission-mobile-progress {
  display: none;
}

@media (max-width: 991px) {
  .mission-main {
    margin-left: 0;
  }

  .mission-section {
    min-height: auto;
    padding: 96px 20px;
  }

  .mission-rail {
    display: none;
  }

  .mission-mobile-progress {
    display: block;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(99, 245, 229, 0.14);
  }

  .mission-mobile-progress span {
    display: block;
    height: 100%;
    background: var(--mission-accent);
    box-shadow: 0 0 16px rgba(99, 245, 229, 0.72);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

- [ ] **Step 8: Build check**

Run:

```bash
npm run build
```

Expected: `Compiled successfully.` If CRA prints warnings for existing dependencies, note them, but fix syntax or missing import errors before continuing.

- [ ] **Step 9: Commit**

Run:

```bash
git add src/App.js src/App.css src/components/MissionData.js src/components/MissionLayout.js src/components/MissionRail.js src/components/MissionBackground.js src/components/MissionSection.js
git commit -m "feat: add mission scrollytelling shell"
```

---

### Task 2: Align Navigation With Mission Chapters

**Files:**
- Modify: `src/components/NavBar.js`
- Modify: `src/css/Navbar.css`

- [ ] **Step 1: Update navbar data source**

Modify `src/components/NavBar.js` imports:

```javascript
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo2.svg';
import { SocialIcons } from './Service';
import { missionChapters } from './MissionData';
import { BrowserRouter as Router } from 'react-router-dom';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import '../css/Navbar.css';
import { OpenPDF } from './Banner-Comps/OpenPdf';
```

Replace all `TabIcons` references with `missionChapters`. In the observer setup:

```javascript
const sections = missionChapters
  .map((chapter) => document.getElementById(chapter.id))
  .filter(Boolean);
```

In the nav render:

```javascript
{missionChapters.map((chapter) => (
  <Nav.Link
    href={`#${chapter.id}`}
    className={activeLink === chapter.id ? 'active navbar-link' : 'navbar-link'}
    key={chapter.id}
    onClick={() => onUpdateActiveLink(chapter.id)}
  >
    {chapter.navLabel}
  </Nav.Link>
))}
```

- [ ] **Step 2: Tune navbar styling**

In `src/css/Navbar.css`, update or append these rules after the existing navbar base rules:

```css
.portfolio-navbar {
  z-index: 20;
  background: linear-gradient(180deg, rgba(2, 7, 13, 0.82), rgba(2, 7, 13, 0.2));
  backdrop-filter: blur(14px);
}

.portfolio-navbar.scrolled {
  background: rgba(2, 7, 13, 0.86);
  border-bottom: 1px solid rgba(99, 245, 229, 0.18);
}

.portfolio-navbar .navbar-link {
  color: var(--mission-muted) !important;
  font-size: 13px;
  font-weight: 700;
}

.portfolio-navbar .navbar-link.active,
.portfolio-navbar .navbar-link:hover {
  color: var(--mission-accent) !important;
}

.portfolio-navbar .navbar-link.active::after {
  background: var(--mission-accent);
  box-shadow: 0 0 12px rgba(99, 245, 229, 0.7);
}

.resume-button {
  border: 1px solid var(--mission-border-strong);
  border-radius: 8px;
  color: var(--mission-text);
  background: rgba(5, 18, 28, 0.6);
}

.resume-button:hover {
  color: var(--mission-bg);
  background: var(--mission-accent);
}
```

- [ ] **Step 3: Build check**

Run:

```bash
npm run build
```

Expected: `Compiled successfully.`

- [ ] **Step 4: Commit**

Run:

```bash
git add src/components/NavBar.js src/css/Navbar.css
git commit -m "feat: align navigation with mission chapters"
```

---

### Task 3: Rebuild Hero As 01 Launch

**Files:**
- Modify: `src/components/Banner.js`
- Modify: `src/css/Banner.css`

- [ ] **Step 1: Replace hero content structure**

In `src/components/Banner.js`, import mission helpers:

```javascript
import { MissionSection } from './MissionSection';
import { missionStats } from './MissionData';
```

Change the role list to:

```javascript
const toRotate = ['Software Engineer', 'Frontend Specialist', 'Full Stack Developer'];
```

Replace the returned `<section ...>` with:

```javascript
<MissionSection id="home" number="01" label="Launch" eyebrow="Launch" className="banner" ref={bannerRef}>
  <div className="mission-hero" ref={bannerRef}>
    <div className="mission-hero__content">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
            <h1>
              Hi! I'm Harshad
              <br />
              <span className="txt-rotate">
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <div className="mission-code" aria-label="Developer mission details">
              <code>const developer = {'{'}</code>
              <code>  code: true,</code>
              <code>  ship: 'curiosity',</code>
              <code>  mission: 'build impact'</code>
              <code>{'}'}</code>
            </div>
            <p className={`my-intro ${isVisible ? 'text-focus-in' : ''}`}>
              I build real-time web apps, analytics dashboards, and scalable platforms using React, Vue, Next.js, TypeScript, and modern backends. I turn complex product problems into fast, reliable, and meaningful user experiences.
            </p>
            <div className="mission-hero__actions">
              <a className="mission-btn mission-btn--primary" href="#skills">Explore Mission</a>
              <a className="mission-btn mission-btn--ghost" href="#projects">See My Work</a>
            </div>
            <div className="mission-stats">
              {missionStats.map((stat) => (
                <div className="mission-stat" key={stat.label}>
                  <strong aria-label={stat.ariaLabel}>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
    {!isMobile && (
      <div className="mission-hero__visual">
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={`hero-visual ${isVisible ? 'animate__animated animate__zoomIn' : ''}`} ref={visualRef}>
              <span className="orbit-ring orbit-ring-one" aria-hidden="true"></span>
              <span className="orbit-ring orbit-ring-two" aria-hidden="true"></span>
              <span className="orbit-dot orbit-dot-one" aria-hidden="true"></span>
              <span className="orbit-dot orbit-dot-two" aria-hidden="true"></span>
              <img src={headerImg} alt="Harshad Hindlekar" />
            </div>
          )}
        </TrackVisibility>
      </div>
    )}
  </div>
</MissionSection>
```

If React warns that `MissionSection` does not accept refs, move `ref={bannerRef}` to the `.mission-hero` div only and keep pointer logic using that element.

- [ ] **Step 2: Remove local star canvas from hero**

Delete the `StarsCanvas` import and remove `<StarsCanvas />` from `Banner.js`, because the global `MissionBackground` now owns it.

- [ ] **Step 3: Add launch styling**

Replace the top-level banner layout rules in `src/css/Banner.css` with:

```css
.banner {
  display: flex;
  align-items: center;
}

.mission-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 0.72fr);
  align-items: center;
  gap: clamp(34px, 6vw, 88px);
  width: 100%;
  transform: translate3d(var(--pointer-x, 0), var(--pointer-y, 0), 0);
}

.mission-hero h1 {
  max-width: 760px;
  color: var(--mission-text);
  font-size: clamp(48px, 7vw, 92px);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: 0;
}

.mission-hero .txt-rotate {
  color: var(--mission-accent);
  text-shadow: 0 0 26px rgba(99, 245, 229, 0.34);
}

.mission-code {
  display: grid;
  gap: 4px;
  margin: 28px 0 18px;
  color: #8bded7;
  font-size: 14px;
}

.mission-code code {
  color: inherit;
  font-family: source-code-pro, Menlo, Monaco, Consolas, monospace;
}

.my-intro {
  max-width: 640px;
  color: var(--mission-muted);
  font-size: 18px;
  line-height: 1.75;
}

.mission-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 34px;
}

.mission-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.mission-btn--primary {
  color: var(--mission-bg);
  background: var(--mission-accent);
  box-shadow: 0 0 22px rgba(99, 245, 229, 0.35);
}

.mission-btn--ghost {
  color: var(--mission-text);
  border: 1px solid var(--mission-border-strong);
  background: rgba(5, 18, 28, 0.48);
}

.mission-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  max-width: 700px;
  margin-top: 48px;
}

.mission-stat {
  padding-left: 18px;
  border-left: 1px solid rgba(99, 245, 229, 0.22);
}

.mission-stat strong {
  display: block;
  color: var(--mission-accent);
  font-size: 28px;
  line-height: 1;
}

.mission-stat span {
  display: block;
  margin-top: 8px;
  color: var(--mission-muted);
  font-size: 12px;
}

.mission-hero__visual {
  position: relative;
  min-height: 560px;
}

.hero-visual {
  position: sticky;
  top: 120px;
  transform: perspective(1000px) rotateX(var(--visual-rotate-x, 0deg)) rotateY(var(--visual-rotate-y, 0deg));
}

.hero-visual img {
  position: relative;
  z-index: 2;
  width: min(100%, 520px);
  filter: drop-shadow(0 24px 62px rgba(0, 0, 0, 0.55));
}

@media (max-width: 991px) {
  .mission-hero {
    grid-template-columns: 1fr;
  }

  .mission-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mission-hero h1 {
    font-size: clamp(42px, 14vw, 64px);
  }
}
```

Keep any existing orbit-ring rules that still apply, but remove conflicting old `.banner` background image rules.

- [ ] **Step 4: Build check**

Run:

```bash
npm run build
```

Expected: `Compiled successfully.`

- [ ] **Step 5: Commit**

Run:

```bash
git add src/components/Banner.js src/css/Banner.css
git commit -m "feat: redesign launch hero"
```

---

### Task 4: Rebuild Skills As 02 Systems

**Files:**
- Modify: `src/components/Skills.js`
- Modify: `src/components/Skills-comps/Tech.js`
- Modify: `src/css/Skills.css`

- [ ] **Step 1: Wrap skills in MissionSection**

Modify `src/components/Skills.js`:

```javascript
import Tech from './Skills-comps/Tech';
import '../css/Skills.css';
import TrackVisibility from 'react-on-screen';
import { MissionSection } from './MissionSection';

export const Skills = () => {
  return (
    <MissionSection id="skills" number="02" label="Systems" eyebrow="Systems" className="skill">
      <div className="mission-chapter-grid mission-chapter-grid--systems">
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <>
              <div className={`systems-copy ${isVisible ? 'is-visible' : ''}`}>
                <h2>Engineering the Core Systems</h2>
                <p>
                  The tools and technologies that power my mission control: frontend interfaces, backend services, cloud deployment, and data systems.
                </p>
                <a className="mission-btn mission-btn--ghost" href="#projects">View Launchpad</a>
              </div>
              <div className={`systems-map ${isVisible ? 'is-visible' : ''}`}>
                <Tech />
              </div>
            </>
          )}
        </TrackVisibility>
      </div>
    </MissionSection>
  );
};
```

- [ ] **Step 2: Add node metadata in Tech**

Modify each `.tech-category` in `src/components/Skills-comps/Tech.js` to include an index variable:

```javascript
{Object.entries(techByCategory).map(([category, techs], categoryIndex) => (
  <div key={category} className="tech-category" style={{ '--category-index': categoryIndex }}>
```

Modify each `.ball-canvas-size` to include an index variable:

```javascript
{techs.map((tech, techIndex) => (
  <div
    className="ball-canvas-size"
    key={tech.name}
    style={{ '--tech-index': techIndex }}
  >
```

Keep the existing R3F/static mobile condition.

- [ ] **Step 3: Add systems CSS**

Replace the high-level panel/card rules in `src/css/Skills.css` with:

```css
.skill {
  display: flex;
  align-items: center;
}

.mission-chapter-grid--systems {
  display: grid;
  grid-template-columns: minmax(250px, 0.38fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(36px, 6vw, 92px);
}

.systems-copy h2 {
  max-width: 440px;
  color: var(--mission-text);
  font-size: clamp(34px, 4vw, 56px);
  line-height: 1.06;
}

.systems-copy p {
  max-width: 420px;
  margin: 18px 0 28px;
  color: var(--mission-muted);
  font-size: 16px;
  line-height: 1.7;
}

.systems-map {
  position: relative;
  min-height: 560px;
  padding: 24px;
}

.systems-map::before {
  content: '';
  position: absolute;
  inset: 8%;
  border: 1px dashed rgba(99, 245, 229, 0.22);
  border-radius: 50%;
  transform: rotate(-14deg);
}

.tech-categories-container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.tech-category {
  position: relative;
  min-height: 480px;
}

.tech-category h3 {
  margin-bottom: 18px;
  color: var(--mission-accent);
  font-size: 13px;
  text-transform: uppercase;
}

.balls-canvas-cointainer {
  display: grid;
  grid-template-columns: repeat(2, minmax(96px, 1fr));
  gap: 18px;
}

.ball-canvas-size {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 132px;
  padding: 12px;
  border: 1px solid rgba(99, 245, 229, 0.18);
  border-radius: 8px;
  background: rgba(5, 18, 28, 0.5);
  box-shadow: inset 0 0 24px rgba(99, 245, 229, 0.04);
}

.ball-canvas-size::before {
  content: '';
  position: absolute;
  inset: -8px;
  border-top: 1px dashed rgba(99, 245, 229, 0.22);
  transform: rotate(calc(var(--tech-index) * 8deg));
  pointer-events: none;
}

.ball-canvas-size span {
  color: var(--mission-text);
  font-size: 12px;
  font-weight: 700;
  text-align: center;
}

.tech-mobile,
.ball-canvas-size canvas {
  width: 74px !important;
  height: 74px !important;
}

.tech-icon {
  width: 56px;
  height: 56px;
  object-fit: contain;
}

@media (max-width: 1199px) {
  .mission-chapter-grid--systems {
    grid-template-columns: 1fr;
  }

  .systems-map {
    min-height: auto;
  }
}

@media (max-width: 767px) {
  .tech-categories-container {
    grid-template-columns: 1fr;
  }

  .tech-category {
    min-height: auto;
  }

  .balls-canvas-cointainer {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
```

- [ ] **Step 4: Build check**

Run:

```bash
npm run build
```

Expected: `Compiled successfully.`

- [ ] **Step 5: Commit**

Run:

```bash
git add src/components/Skills.js src/components/Skills-comps/Tech.js src/css/Skills.css
git commit -m "feat: redesign skills as systems chapter"
```

---

### Task 5: Rebuild Projects As 03 Launchpad

**Files:**
- Modify: `src/components/Projects.js`
- Modify: `src/components/ProjectCard.js`
- Modify: `src/css/Projects.css`

- [ ] **Step 1: Replace passive project slider with controlled carousel**

Modify `src/components/Projects.js`:

```javascript
import { Container } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import 'animate.css';
import '../css/Projects.css';
import { projects, projects1 } from './Service';
import { useMemo, useState, useEffect } from 'react';
import { MissionSection } from './MissionSection';

const priorityTitles = [
  'APS Security Dashboard',
  'INCOIS Marine Fisheries Platform',
  'Portfolio Management Dashboard',
  'WAR JETS - P2P Multiplayer',
  'Nike Clone Vue',
  'Windows 11 Web Experience',
];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const allProjects = useMemo(() => {
    const merged = [...projects1, ...projects];
    return merged.sort((a, b) => {
      const aIndex = priorityTitles.indexOf(a.title);
      const bIndex = priorityTitles.indexOf(b.title);
      return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
    });
  }, []);

  const visibleProjects = [...allProjects, ...allProjects].slice(activeIndex, activeIndex + 3);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % allProjects.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MissionSection id="projects" number="03" label="Launchpad" eyebrow="Launchpad" className={`project ${isVisible ? 'visible' : ''}`}>
      <Container fluid className="project-mission-container">
        <div className="project-mission-layout">
          <div className={`project-header ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
            <h2>Projects That Ship Impact</h2>
            <p>From dashboards to immersive browser experiences, here are missions I have launched.</p>
            <a className="mission-btn mission-btn--ghost" href="#connect">Explore All Projects</a>
          </div>
          <div className="project-carousel" aria-label="Featured projects">
            <button className="project-nav project-nav--prev" onClick={goPrev} aria-label="Previous project">{'<'}</button>
            <div className="project-carousel__track">
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.title}-${activeIndex}-${index}`}
                  {...project}
                  index={index}
                  isVisible={isVisible}
                  variant="mission"
                />
              ))}
            </div>
            <button className="project-nav project-nav--next" onClick={goNext} aria-label="Next project">{'>'}</button>
            <div className="project-dots" aria-hidden="true">
              {allProjects.slice(0, Math.min(allProjects.length, 6)).map((project, index) => (
                <span key={project.title} className={index === activeIndex % 6 ? 'is-active' : ''} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </MissionSection>
  );
};
```

- [ ] **Step 2: Support mission card wrapper**

Modify wrapper selection in `src/components/ProjectCard.js`:

```javascript
const Wrapper = variant === 'grid' ? Col : 'div';
const wrapperProps = variant === 'grid'
  ? { xs: 12, sm: 6, lg: 4, className: 'mb-4' }
  : { className: variant === 'mission' ? 'project-mission-slide' : 'project-slide' };
```

Add a context label helper before `return`:

```javascript
const contextLabel = title.includes('Dashboard')
  ? 'Analytics'
  : title.includes('Platform')
    ? 'Platform'
    : title.includes('WAR JETS')
      ? 'Multiplayer'
      : 'Web Experience';
```

Inside `.project-content`, before the `h3`, add:

```javascript
<span className="project-context">{contextLabel}</span>
```

- [ ] **Step 3: Add launchpad CSS**

Replace high-level project rules in `src/css/Projects.css` with:

```css
.project {
  display: flex;
  align-items: center;
}

.project-mission-container {
  padding: 0 !important;
}

.project-mission-layout {
  display: grid;
  grid-template-columns: minmax(240px, 0.34fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(32px, 5vw, 70px);
}

.project-header h2 {
  max-width: 380px;
  color: var(--mission-text);
  font-size: clamp(34px, 4vw, 56px);
  line-height: 1.06;
}

.project-header p {
  max-width: 360px;
  margin: 18px 0 28px;
  color: var(--mission-muted);
  font-size: 15px;
  line-height: 1.7;
}

.project-carousel {
  position: relative;
}

.project-carousel__track {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 18px;
}

.project-mission-slide {
  min-width: 0;
}

.project-card {
  height: 100%;
  border: 1px solid rgba(99, 245, 229, 0.22);
  border-radius: 8px;
  background: rgba(5, 18, 28, 0.72);
  overflow: hidden;
  transform: perspective(900px) rotateX(var(--card-rotate-x, 0deg)) rotateY(var(--card-rotate-y, 0deg));
}

.project-image-container {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: rgba(99, 245, 229, 0.08);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content {
  padding: 18px;
}

.project-context {
  display: inline-flex;
  margin-bottom: 10px;
  color: var(--mission-accent);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}

.project-title {
  color: var(--mission-text);
  font-size: 18px;
  line-height: 1.25;
}

.project-description {
  margin-top: 10px;
  color: var(--mission-muted);
  font-size: 13px;
  line-height: 1.6;
}

.project-nav {
  position: absolute;
  top: 42%;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--mission-border-strong);
  border-radius: 50%;
  color: var(--mission-accent);
  background: rgba(5, 18, 28, 0.86);
  font-size: 28px;
}

.project-nav--prev {
  left: -58px;
}

.project-nav--next {
  right: -58px;
}

.project-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}

.project-dots span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(169, 186, 199, 0.35);
}

.project-dots span.is-active {
  background: var(--mission-accent);
  box-shadow: 0 0 12px rgba(99, 245, 229, 0.8);
}

@media (max-width: 1199px) {
  .project-mission-layout {
    grid-template-columns: 1fr;
  }

  .project-nav--prev {
    left: 8px;
  }

  .project-nav--next {
    right: 8px;
  }
}

@media (max-width: 767px) {
  .project-carousel__track {
    grid-template-columns: 1fr;
  }

  .project-carousel__track .project-mission-slide:nth-child(n + 2) {
    display: none;
  }
}
```

- [ ] **Step 4: Build check**

Run:

```bash
npm run build
```

Expected: `Compiled successfully.`

- [ ] **Step 5: Commit**

Run:

```bash
git add src/components/Projects.js src/components/ProjectCard.js src/css/Projects.css
git commit -m "feat: redesign projects as launchpad"
```

---

### Task 6: Rebuild Testimonials As 04 Signals

**Files:**
- Modify: `src/components/Testimonials.js`
- Modify: `src/components/Testimony-comps/PeopleCard.js`
- Modify: `src/css/Testimonials.css`

- [ ] **Step 1: Wrap testimonials in MissionSection**

Modify `src/components/Testimonials.js`:

```javascript
import { Container } from 'react-bootstrap';
import 'animate.css';
import '../css/Testimonials.css';
import { PeopleCard } from './Testimony-comps/PeopleCard';
import { useEffect, useState } from 'react';
import { testimonials } from './Service';
import { MissionSection } from './MissionSection';

export const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <MissionSection id="testimonials" number="04" label="Signals" eyebrow="Signals" className={`testimonials ${isVisible ? 'visible' : ''}`}>
      <Container fluid className="signals-container">
        <div className="signals-layout">
          <div className={`testimonial-header ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
            <h2>Signals From The Crew</h2>
            <p>Kind words from teammates and collaborators across missions.</p>
            <a className="mission-btn mission-btn--ghost" href="#connect">Read More Signals</a>
          </div>
          <PeopleCard activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
      </Container>
    </MissionSection>
  );
};
```

- [ ] **Step 2: Convert PeopleCard to transmission panel**

In `src/components/Testimony-comps/PeopleCard.js`, add excerpt helper:

```javascript
const getExcerpt = (text) => {
  if (text.length <= 250) return text;
  return `${text.slice(0, 247).trim()}...`;
};
```

Replace the returned JSX with:

```javascript
return (
  <div className="signals-panel">
    <div className="signals-panel__quote" key={activeIndex}>
      <div className="quote-icon" aria-hidden="true">"</div>
      <p className="testimonial-text">{getExcerpt(activeTestimonial.desc)}</p>
      {renderAuthor(activeTestimonial)}
      <div className="signals-wave" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} style={{ '--wave-index': index }} />
        ))}
      </div>
    </div>
    <div className="signals-crew" aria-label="Select testimonial">
      {testimonials.map((test, index) => (
        <button
          key={test.name}
          className={`signals-crew__avatar ${activeIndex === index ? 'is-active' : ''}`}
          onClick={() => setActiveIndex(index)}
          aria-label={`View testimonial from ${test.name}`}
        >
          <img src={test.img} alt="" loading="lazy" />
        </button>
      ))}
    </div>
    <div className="signals-actions">
      <button className="testimonial-nav prev" onClick={handlePrev} aria-label="Previous testimonial">{'<'}</button>
      <button className="testimonial-nav next" onClick={handleNext} aria-label="Next testimonial">{'>'}</button>
    </div>
  </div>
);
```

Keep `handleNext`, `handlePrev`, and `renderAuthor`.

- [ ] **Step 3: Add signals CSS**

Replace high-level testimonial rules in `src/css/Testimonials.css` with:

```css
.testimonials {
  display: flex;
  align-items: center;
}

.signals-container {
  padding: 0 !important;
}

.signals-layout {
  display: grid;
  grid-template-columns: minmax(240px, 0.32fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(32px, 6vw, 90px);
}

.testimonial-header h2 {
  max-width: 390px;
  color: var(--mission-text);
  font-size: clamp(34px, 4vw, 56px);
  line-height: 1.08;
}

.testimonial-header p {
  max-width: 340px;
  margin: 18px 0 28px;
  color: var(--mission-muted);
  font-size: 15px;
  line-height: 1.7;
}

.signals-panel {
  position: relative;
  border: 1px solid rgba(99, 245, 229, 0.26);
  border-radius: 8px;
  background: rgba(5, 18, 28, 0.76);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28), inset 0 0 42px rgba(99, 245, 229, 0.06);
  padding: clamp(24px, 4vw, 46px);
}

.signals-panel__quote {
  min-height: 320px;
}

.quote-icon {
  color: var(--mission-accent);
  font-size: 60px;
  line-height: 0.8;
}

.testimonial-text {
  margin: 12px 0 28px;
  color: var(--mission-text);
  font-size: clamp(17px, 2vw, 24px);
  line-height: 1.65;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 14px;
  color: inherit;
  text-decoration: none;
}

.author-image img {
  width: 52px;
  height: 52px;
  border: 1px solid var(--mission-border-strong);
  border-radius: 50%;
}

.author-name {
  color: var(--mission-accent);
  font-size: 16px;
}

.author-position {
  margin-top: 3px;
  color: var(--mission-muted);
  font-size: 12px;
}

.signals-wave {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 58px;
  margin-top: 22px;
}

.signals-wave span {
  width: 4px;
  height: calc(14px + (var(--wave-index) % 7) * 6px);
  border-radius: 999px;
  background: var(--mission-accent);
  box-shadow: 0 0 12px rgba(99, 245, 229, 0.7);
}

.signals-crew {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.signals-crew__avatar {
  width: 48px;
  height: 48px;
  border: 1px solid rgba(99, 245, 229, 0.25);
  border-radius: 50%;
  overflow: hidden;
  opacity: 0.66;
}

.signals-crew__avatar.is-active {
  opacity: 1;
  border-color: var(--mission-accent);
  box-shadow: 0 0 18px rgba(99, 245, 229, 0.5);
}

.signals-crew__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.signals-actions {
  position: absolute;
  right: 24px;
  bottom: 24px;
  display: flex;
  gap: 10px;
}

.testimonial-nav {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--mission-border-strong);
  border-radius: 50%;
  color: var(--mission-accent);
  background: rgba(5, 18, 28, 0.9);
  font-size: 24px;
}

@media (max-width: 991px) {
  .signals-layout {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Build check**

Run:

```bash
npm run build
```

Expected: `Compiled successfully.`

- [ ] **Step 5: Commit**

Run:

```bash
git add src/components/Testimonials.js src/components/Testimony-comps/PeopleCard.js src/css/Testimonials.css
git commit -m "feat: redesign testimonials as signals"
```

---

### Task 7: Rebuild Contact As 05 Contact

**Files:**
- Modify: `src/components/Contact.js`
- Modify: `src/css/Contact.css`

- [ ] **Step 1: Wrap contact in MissionSection**

Modify `src/components/Contact.js` imports:

```javascript
import { MissionSection } from './MissionSection';
```

Replace the outer `<section className="contact" id="connect">` with:

```javascript
<MissionSection id="connect" number="05" label="Contact" eyebrow="Contact" className="contact">
```

Replace the closing `</section>` with `</MissionSection>`.

- [ ] **Step 2: Add mission contact copy and status panel**

Inside the right column before the form, add:

```javascript
<div className="contact-mission-copy">
  <h2 className={isVisible ? 'text-focus-in' : ''}>Let's Build What's Next. Together.</h2>
  <p>Ready to collaborate or launch your next idea? Let's establish contact.</p>
  <div className="mission-status-card">
    <strong>Status: Connected</strong>
    <span>Thanks for following the mission. Let's create impact together.</span>
  </div>
  <div className="contact-methods">
    <a href="mailto:harshadhindlekar24@gmail.com">harshadhindlekar24@gmail.com</a>
    <span>India</span>
  </div>
</div>
```

Remove the old standalone `h2` if it duplicates the new heading.

- [ ] **Step 3: Add contact CSS**

Replace high-level contact rules in `src/css/Contact.css` with:

```css
.contact {
  display: flex;
  align-items: center;
}

.earth-container {
  min-height: 560px;
}

.contact-orbit-shell {
  position: absolute;
  inset: 12%;
  border: 1px dashed rgba(99, 245, 229, 0.22);
  border-radius: 50%;
  transform: rotate(-20deg);
}

.contact-form-panel {
  border: 1px solid rgba(99, 245, 229, 0.28);
  border-radius: 8px;
  background: rgba(5, 18, 28, 0.76);
  padding: clamp(24px, 4vw, 42px);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
}

.contact-mission-copy h2 {
  color: var(--mission-text);
  font-size: clamp(34px, 4vw, 56px);
  line-height: 1.08;
}

.contact-mission-copy p {
  margin: 16px 0 22px;
  color: var(--mission-muted);
  font-size: 15px;
  line-height: 1.7;
}

.mission-status-card {
  display: grid;
  gap: 8px;
  margin-bottom: 22px;
  padding: 18px;
  border: 1px solid var(--mission-border-strong);
  border-radius: 8px;
  background: rgba(99, 245, 229, 0.07);
}

.mission-status-card strong {
  color: var(--mission-accent);
  font-size: 14px;
  text-transform: uppercase;
}

.mission-status-card span,
.contact-methods {
  color: var(--mission-muted);
  font-size: 13px;
  line-height: 1.5;
}

.contact-methods {
  display: grid;
  gap: 6px;
  margin-bottom: 22px;
}

.contact-methods a {
  color: var(--mission-accent);
  text-decoration: none;
}

.form-cointainer input,
.form-cointainer textarea {
  width: 100%;
  border: 1px solid rgba(99, 245, 229, 0.2);
  border-radius: 8px;
  color: var(--mission-text);
  background: rgba(2, 7, 13, 0.72);
}

.form-cointainer input::placeholder,
.form-cointainer textarea::placeholder {
  color: var(--mission-dim);
}

.form-cointainer button {
  min-height: 48px;
  padding: 0 24px;
  border-radius: 8px;
  color: var(--mission-bg);
  background: var(--mission-accent);
  font-weight: 700;
}

@media (max-width: 991px) {
  .earth-container {
    display: none;
  }
}
```

- [ ] **Step 4: Build check**

Run:

```bash
npm run build
```

Expected: `Compiled successfully.`

- [ ] **Step 5: Commit**

Run:

```bash
git add src/components/Contact.js src/css/Contact.css
git commit -m "feat: redesign contact mission finale"
```

---

### Task 8: Footer And Global Polish

**Files:**
- Modify: `src/components/Footer.js`
- Modify: `src/css/Footer.css`
- Modify: `src/index.css`
- Modify: `src/App.css`

- [ ] **Step 1: Simplify footer copy**

Modify the footer bottom paragraph in `src/components/Footer.js`:

```javascript
<p>&copy; {year} Harshad Hindlekar. All rights reserved.</p>
```

- [ ] **Step 2: Add footer mission styling**

Append to `src/css/Footer.css`:

```css
.footer {
  position: relative;
  z-index: 2;
  margin-left: var(--mission-rail-width);
  border-top: 1px solid rgba(99, 245, 229, 0.14);
  background: rgba(2, 7, 13, 0.88);
}

.footer-bottom p {
  color: var(--mission-muted);
  font-size: 12px;
}

@media (max-width: 991px) {
  .footer {
    margin-left: 0;
  }
}
```

- [ ] **Step 3: Fix global background and font smoothing**

Update `src/index.css` body rule:

```css
body {
  margin: 0;
  font-family: 'Centra', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #02070d;
}
```

- [ ] **Step 4: Add focus and accessibility polish**

Append to `src/App.css`:

```css
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--mission-accent);
  outline-offset: 3px;
}

img {
  max-width: 100%;
}
```

- [ ] **Step 5: Build check**

Run:

```bash
npm run build
```

Expected: `Compiled successfully.`

- [ ] **Step 6: Commit**

Run:

```bash
git add src/components/Footer.js src/css/Footer.css src/index.css src/App.css
git commit -m "style: polish mission portfolio globals"
```

---

### Task 9: Browser QA And Visual Fix Pass

**Files:**
- Modify any touched component/CSS file needed to fix QA findings.

- [ ] **Step 1: Start the dev server**

Run:

```bash
npm start
```

Expected: CRA dev server opens or prints a local URL, usually `http://localhost:3000`.

- [ ] **Step 2: Desktop visual QA**

At a desktop viewport around `1440x1100`, verify:

- Left mission rail is visible, fixed, and not overlapping the navbar.
- Active rail item updates while scrolling.
- Hero has heading, typed role, code block, two CTAs, stats, and portrait/orbit visual.
- Skills are readable as a systems/node map.
- Projects show three mission cards with previous/next controls.
- Testimonials show one quote panel, crew avatars, and waveform.
- Contact shows Earth canvas on desktop and the status/contact form panel.

- [ ] **Step 3: Mobile visual QA**

At a mobile viewport around `390x844`, verify:

- Full left rail is hidden.
- Top mobile progress bar is visible.
- All sections stack in one column.
- Hero text, CTAs, stats, project cards, testimonial panel, and form fields fit without horizontal scroll.
- R3F-heavy visuals are hidden or reduced where intended.

- [ ] **Step 4: Interaction QA**

Verify:

- Top nav anchors scroll to each section.
- Mission rail anchors scroll to each section on desktop.
- `Explore Mission` scrolls to skills.
- `See My Work` scrolls to projects.
- Project previous/next buttons change cards.
- Clicking a project card opens its project URL in a new tab.
- Testimonial previous/next buttons change the quote.
- Crew avatar buttons change the quote.
- Empty contact submit still triggers validation.

- [ ] **Step 5: Fix concrete QA issues**

For each issue, edit the smallest relevant file. Example fixes:

```css
/* If project nav overlaps cards on tablet */
@media (max-width: 1199px) {
  .project-carousel {
    padding-inline: 54px;
  }
}

/* If hero stats overflow on narrow mobile */
@media (max-width: 480px) {
  .mission-stats {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 6: Production build**

Run:

```bash
npm run build
```

Expected: `Compiled successfully.`

- [ ] **Step 7: Commit QA fixes**

Run:

```bash
git add src
git commit -m "fix: refine mission portfolio responsive qa"
```

If there are no QA fixes after Task 8, skip this commit and note that no QA patch was needed.

---

## Self-Review

Spec coverage:

- Mission rail, chapter order, active progress, and mobile progress are covered by Tasks 1 and 2.
- Launch hero, current portrait, code block, CTAs, stats, and star/orbit styling are covered by Task 3.
- Systems/skills node map and R3F/static icon behavior are covered by Task 4.
- Launchpad project carousel and prioritized projects are covered by Task 5.
- Signals testimonial panel, excerpts, avatars, waveform, and controls are covered by Task 6.
- Contact finale, Earth canvas, status panel, direct contact methods, and form preservation are covered by Task 7.
- Global typography, focus states, footer, responsive polish, and verification are covered by Tasks 8 and 9.

Placeholder scan:

- The plan contains no `TBD`, `TODO`, "implement later", or undefined follow-up steps.
- Each code-editing step includes exact file paths and concrete code snippets.

Type consistency:

- Chapter ids match existing anchors: `home`, `skills`, `projects`, `testimonials`, `connect`.
- `MissionLayout`, `MissionRail`, `MissionBackground`, `MissionSection`, `missionChapters`, and `missionStats` are defined before use.
- Project and testimonial state names match their component usage.
