# Mission Scrollytelling Portfolio Design

Date: 2026-06-21

## Goal

Transform the current React portfolio into a space-mission scrollytelling experience inspired by the supplied UX reference. The redesign should feel like a continuous "mission story" while preserving Harshad's real portfolio content, current identity assets, project data, testimonials, resume link, and existing React Three Fiber vocabulary.

## Current Project Context

The app is a Create React App portfolio with section composition in `src/App.js`:

- `NavBar`
- `Banner`
- `Skills`
- `Projects`
- `Testimonials`
- `Contact`
- `Footer`

The project already includes React Three Fiber and Drei. Existing 3D components are:

- `Banner-Comps/Stars.js`: star field points animation.
- `Skills-comps/Ball.js` and `Tech.js`: interactive technology balls/icons.
- `Contact-Comps/Earth.js`: GLTF planet scene using `public/planet/scene.gltf`.

Content data lives mostly in `src/components/Service.js`, including navigation labels, social links, projects, technologies, and testimonials. The redesign should keep this file as the main data source unless a small section metadata list is needed for mission chapters.

## Design Direction

Use the full mission-story treatment from the reference:

- Dark space background with cyan/teal accent color.
- Fixed or sticky left mission rail on desktop.
- Numbered chapters that map to the existing section order.
- Scroll progress and active chapter state.
- Orbit paths, star field, subtle scan lines, and glowing waypoints as connective tissue.
- Compact, high-contrast typography with stronger editorial hierarchy.
- Real portrait stays as the identity anchor instead of generated astronaut face compositing.

The visual goal is a polished space command interface, not a generic sci-fi dashboard. The experience should still read as a software engineer portfolio first.

## Information Architecture

The page has five mission chapters:

1. `01 Launch` maps to `home`.
2. `02 Systems` maps to `skills`.
3. `03 Launchpad` maps to `projects`.
4. `04 Signals` maps to `testimonials`.
5. `05 Contact` maps to `connect`.

The top navigation keeps the current labels:

- Home
- Skills
- Projects
- Testimonials
- Connect

The left mission rail uses the chapter labels above and updates with scroll position. On mobile, the rail collapses into a compact top or bottom progress indicator so it does not consume narrow-screen width.

## Section Designs

### 01 Launch

The hero becomes the mission opening.

Content:

- Heading: `Hi! I'm Harshad`
- Animated role text remains, with primary role copy tuned toward `Software Engineer`.
- Short intro is reduced from the current long paragraph into a concise mission statement.
- Add a small code-style block:
  - `const developer = {`
  - `code: true,`
  - `ship: 'curiosity',`
  - `mission: 'build impact'`
  - `}`
- CTAs:
  - `Explore Mission` scrolls to `skills`.
  - `See My Work` scrolls to `projects`.
- Stats:
  - `3+ Years Experience`
  - `100+ Projects & Features`
  - `10+ Technologies`
  - `Infinite Curiosity`

Visual treatment:

- Keep `me.png` as Harshad's portrait.
- Place it inside an orbit/spacecraft-style visual composition using CSS layers, not generated face compositing.
- Reuse `StarsCanvas` as a background layer.
- Add orbit arcs and glowing waypoints that visually continue into later sections.

### 02 Systems

The skills section becomes the systems engineering chapter.

Content:

- Heading: `Engineering the Core Systems`
- Supporting copy should be short and practical.
- Categories remain based on current `Tech.js` grouping:
  - Frontend
  - Backend / Databases
  - Tools / Cloud

Visual treatment:

- Arrange technologies as connected system nodes rather than stacked category blocks.
- Use static tech icons so the skills section stays lightweight on desktop and mobile.
- Use static icons on mobile and for categories where R3F would crowd the layout.
- Add dotted connection lines and mission-node styling around tech items.

### 03 Launchpad

Projects become the launchpad chapter.

Content:

- Heading: `Projects That Ship Impact`
- Use existing project data from `projects1` and `projects`.
- Prioritize the strongest/current portfolio projects near the front:
  - APS Security Dashboard
  - INCOIS Marine Fisheries Platform
  - Portfolio Management Dashboard
  - WAR JETS - P2P Multiplayer
  - Nike Clone Vue
  - Windows 11 Web Experience

Visual treatment:

- Replace the passive infinite marquee feel with a controlled mission-card rail.
- Cards should have stable image frames, concise descriptions, and project tech/context labels where available.
- Add previous/next controls and dot progress.
- Cards retain clickable outbound project links.

### 04 Signals

Testimonials become a transmission/signals chapter.

Content:

- Heading: `Signals From The Crew`
- Active testimonial copy appears in a glowing transmission panel.
- Keep current testimonial names, positions, avatars, and LinkedIn profile URLs.

Visual treatment:

- Use one active quote panel with selectable crew avatars.
- Add a subtle waveform/signal line as visual detail.
- Avoid showing very long testimonial text in full by default; use a readable excerpt and provide interaction to rotate through testimonials.

### 05 Contact

Contact becomes the final mission-control chapter.

Content:

- Heading: `Let's Build What's Next. Together.`
- Keep existing contact form behavior and validation.
- Add direct contact methods:
  - Email, using the current visible email if already present in project copy or footer.
  - Location: India.
- Keep resume and social links available through nav/footer.

Visual treatment:

- Reuse `EarthCanvas` as the final planet scene.
- Add a `Status: Connected` mission panel.
- The form becomes a compact comms panel with existing fields and submit behavior.
- On mobile, the planet can be hidden or reduced, matching the current mobile behavior.

## Component Architecture

Add a small mission shell rather than rewriting the app as one monolith.

Recommended additions:

- `components/MissionLayout.js`
  - Owns mission rail, scroll progress, and global orbit background hooks.
  - Receives chapter metadata.
- `components/MissionRail.js`
  - Desktop left rail with labels, active state, progress line, and anchor links.
  - Mobile compact progress variant.
- `components/MissionBackground.js`
  - Shared star/orbit layers that span the page.
  - Can wrap or reuse `StarsCanvas`.
- `components/MissionSection.js`
  - Shared chapter wrapper with number, label, id, and reveal state.

Existing components should be adapted:

- `Banner` becomes the `Launch` chapter content.
- `Skills` becomes the `Systems` chapter content.
- `Projects` becomes the `Launchpad` chapter content.
- `Testimonials` becomes the `Signals` chapter content.
- `Contact` becomes the final `Contact` chapter content.

The current data module, image assets, and R3F primitives should be reused. New abstractions should stay small and section-specific.

## State And Scroll Behavior

Use an `IntersectionObserver` pattern similar to the current `NavBar` active-section logic.

State needed:

- Active chapter id.
- Scroll progress percentage.
- Project carousel active index.
- Testimonial active index.
- Existing contact form state.

Behavior:

- Navigation anchor links still work.
- Left mission rail updates as sections enter the center viewport.
- Project controls update the visible card set.
- Testimonial avatars update the active quote.
- Motion respects `prefers-reduced-motion`.

## Visual System

Tokens:

- Background: near-black space, around `#02070d` to `#07111c`.
- Surface: transparent dark panels, around `rgba(5, 18, 28, 0.72)`.
- Border: teal/cyan low-opacity strokes.
- Primary accent: teal/cyan similar to `#63f5e5`.
- Secondary accent: deep blue for orbit depth.
- Text: white and cool muted gray.
- Radius: 8px or less for cards and panels.

Typography:

- Keep the existing Centra font files.
- Use large hero type only in the opening chapter.
- Section headings are strong but not oversized.
- Labels use compact uppercase treatment.
- Body copy is shorter and more scannable than the current hero paragraph.

Container model:

- Sections are full-width mission bands.
- Cards are used only for project cards, testimonial panel, and contact/form panels.
- Avoid nested cards.
- The left rail is a navigation/progress instrument, not a decorative sidebar card.

## Responsive Rules

Desktop:

- Fixed/sticky left mission rail.
- Main content offset to avoid overlap with rail.
- Hero uses text left and portrait/orbit visual right.
- Skills can use connected node layout.
- Projects use a horizontal card rail.

Tablet:

- Rail can shrink or become a slim numeric progress strip.
- Hero visual remains but scales down.
- Skills nodes can wrap into grouped rows.

Mobile:

- Hide full left rail.
- Use compact progress/navigation.
- Keep sections single-column.
- Disable or reduce heavy R3F where the current app already does so.
- Ensure buttons, project cards, testimonial panels, and form inputs do not overflow.

## Error Handling And Accessibility

- Preserve existing contact validation behavior.
- Keep all links keyboard reachable.
- Buttons need visible focus states.
- Project carousel and testimonial controls need accessible labels.
- Decorative stars, orbit lines, and scan effects should be `aria-hidden`.
- Images need meaningful alt text.
- Respect `prefers-reduced-motion` by disabling continuous orbit and marquee-like animation where practical.

## Testing And Verification

Implementation should be verified with:

- `npm run build`
- Browser verification on desktop and mobile viewport.
- Scroll through all sections and confirm active rail/nav state changes.
- Click top nav and mission rail anchors.
- Use project previous/next controls and open at least one project link path.
- Switch testimonials through avatar/dot controls.
- Submit contact form with empty fields to confirm validation still appears.
- Compare rendered UI against the supplied reference image for:
  - Mission rail structure.
  - Chapter order and labels.
  - Hero hierarchy.
  - Space/orbit visual continuity.
  - Teal-on-dark palette.
  - Project card density.
  - Testimonial transmission panel.
  - Contact/Earth finale.

## Intentional Constraints

- Do not generated-face-composite Harshad into an astronaut image.
- Do not replace the React UI with a static screenshot.
- Do not introduce a new framework.
- Do not remove existing project/testimonial data.
- Do not hand-roll one giant scroll-synced WebGL scene in the first pass.
- Do not add unrelated portfolio sections beyond the five mission chapters.

## Open Decisions Resolved

- The redesign will use the full mission-story direction.
- The current portrait remains the identity anchor.
- Existing R3F components are reused and adapted instead of discarded.
- Implementation should favor a robust mission shell and section redesign over a risky global 3D camera narrative.
