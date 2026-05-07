# Dubai Mall Interactive Sales Deck

An immersive, browser-based sales deck for **Dubai Mall**, designed for high-value commercial
conversations with retail tenants, luxury brands, sponsors, and event partners.

This is intentionally not a traditional website. It is a cinematic pitch tool built to make a
prospect feel the scale, prestige, audience gravity, and commercial opportunity of Dubai Mall
within the first few seconds.

## Project Intent

The assignment asked for a tool that replaces fragmented sales materials: static PDFs, separate
videos, spreadsheets, and verbal narration. My approach was to build one cohesive experience that a
salesperson can screen-share live or send as a standalone link.

The deck is designed to answer one commercial question:

> Why should a brand invest in being part of this destination?

## Why Dubai Mall

I selected Dubai Mall because it naturally supports the brief's strongest themes:

- global tourism and luxury positioning
- world-class retail scale
- entertainment and dining ecosystem
- sponsorship and activation potential
- cinematic visual storytelling
- strong public facts and destination recognition

Dubai Mall gives the project a stronger sense of spectacle than a conventional shopping center,
which helps the final experience feel closer to a luxury brand launch, destination film, and
interactive sales presentation.

## Experience Highlights

- Fullscreen cinematic video hero
- Timed opening typography for immediate emotional impact
- Local 45-second AI-generated reel: `assets/dubai-mall-reel.mp4`
- Non-linear deck navigation
- Dependency-free smooth scrolling and presenter controls
- Animated metric reveals
- Dubai/global reach visualization
- Audience-specific pitch paths for tenants, sponsors, and producers
- Retail and luxury storytelling section
- Events and sponsorship platform module
- Activation itinerary builder
- Interactive Brand Lab: "see your brand here" sponsor visualization
- AI-generated concept boards for venue, sponsorship, and leasing modules
- Opportunity calculator for directional campaign planning
- Deployment-ready static architecture

## Standout Feature: Brand Lab

The Brand Lab is a sponsor-facing interactive module. A prospect can type a brand name, choose an
activation mood, and immediately see a takeover-style concept inside a destination environment.

This was included to show that the deck is not just a visual presentation. It can become a sales
tool that helps prospects imagine their own brand inside the property.

## Technical Approach

This project is built with plain HTML, CSS, and JavaScript.

I chose a dependency-free static architecture for three reasons:

1. **Performance:** fewer bundles, faster deploys, less runtime overhead.
2. **Portability:** easy to host on Vercel, Netlify, or GitHub Pages.
3. **Reviewability:** recruiters can inspect the implementation without installing a framework.

The code still follows an expandable structure:

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- assets/
|   |-- dubai-mall-reel.mp4
|   |-- ai-venue-concept.svg
|   |-- ai-sponsor-route.svg
|   `-- ai-leasing-path.svg
|-- data/
|   `-- deck-data.js
|-- SUBMISSION_WRITEUP.md
|-- DEPLOYMENT.md
|-- netlify.toml
|-- vercel.json
`-- README.md
```

## Architecture Notes

The current version is static, but it is structured to expand into deeper modules:

- leasing paths by category
- sponsorship package tiers
- venue-specific event pages
- analytics and engagement tracking
- downloadable leave-behind decks
- CMS-driven content

The `data/deck-data.js` file stores source metadata, section mapping, and future expansion modules.
In a production version, this could grow into a CMS-backed content model.

## Motion and Interaction System

The interaction layer includes:

- smooth section scrolling
- scroll-triggered reveals
- animated number counters
- hero video parallax scaling
- pointer-driven ambient lighting
- modal video playback
- tabbed commercial modules
- interactive itinerary switching
- live Brand Lab visualization

I avoided heavy animation libraries in this version to preserve performance and keep the project
simple to review.

## AI Workflow

AI was used as a force multiplier across the project:

- interpreting the assignment brief
- selecting and positioning the mall subject
- shaping the sales narrative
- generating UI and interaction code
- creating the 45-second cinematic mega-mall reel
- creating SVG concept assets for future venue, sponsorship, and leasing modules
- drafting the optional submission write-up

The generated visuals are clearly treated as concept assets. In a production handoff, they would be
replaced or supplemented with approved Dubai Mall media, custom renders, and official floor-plan
data.

## Performance Strategy

The project is optimized around a lightweight static build:

- no framework bundle
- no package install required
- lazy/metadata video loading where possible
- local assets for reliable playback
- reduced JavaScript surface area
- CSS-driven motion with `prefers-reduced-motion` support
- deployment-ready configs for Vercel and Netlify

The MP4 reel is the largest asset. For a final production version, I would generate compressed
WebM/MP4 variants and serve them conditionally.

## Run Locally

```bash
python3 -m http.server 5173
```

Open:

```text
http://localhost:5173
```

## Deployment

This is a static site. It can be deployed on:

- Vercel
- Netlify
- GitHub Pages

No build step is required.

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step deployment instructions.

## Sources

Official and tourism sources used for facts and positioning:

- Dubai Mall About: 100M+ annual visitors, 1,200+ retail outlets, 200+ dining experiences, Fashion Avenue positioning
- Visit Dubai: Dubai Mall attractions and destination positioning
- Dubai Department of Economy and Tourism: 18.72M international overnight visitors in 2024
- Emaar / Burj Khalifa Dubai Mall page: total area, leasable area, parking, and retail scale

## Requirement Coverage

- Interactive browser-based sales deck: included
- Selected major mall subject: Dubai Mall
- Video-first storytelling: included
- Non-linear navigation: included
- Luxury retail story: included
- Entertainment and events story: included
- Sponsorship and brand activation story: included
- Expandable module architecture: included
- AI-generated assets: included
- Responsive desktop/tablet layout: included
- Deployable static build: included
- README and optional write-up: included

## If I Had More Time

- Add compressed WebM and mobile-specific video variants
- Replace public/supporting imagery with approved Dubai Mall media
- Add real floor-plan overlays and venue capacity data
- Add analytics for deck engagement and CTA clicks
- Build deeper event-booking and sponsorship-package modules
- Run Lighthouse after public deployment and tune for a verified 90+ score

## Submission Assets

Recommended submission package:

- Live deployed URL
- GitHub repository URL
- `SUBMISSION_WRITEUP.md`

Suggested repository name:

```text
dubai-mall-interactive-sales-deck
```
