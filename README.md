# SPRFOLIO Creative House — Version 5

**One Creative House. Many Creative Worlds.**

SPRFOLIO is an independent creative house bringing brand & design, digital products, content & media, publishing, and experimental ventures into one evolving identity. The original brief defines the site as a creative ecosystem rather than a conventional agency.

## V5 production release

This V5 release preserves the established creative-house system and completes the production QA/refinement pass: 
- Version 1 typography has been restored using the original Inter typeface, vendored locally for reliable loading.
- Brand UI colors are restricted to black, white, warm-beige and sage green, with opacity variants of those colors for hierarchy.
- The generic orbit/tech-studio hero has been replaced by a proprietary SPR index / connected-worlds visual.
- Creative Worlds is presented as an editorial ecosystem rather than a five-card service grid.
- Portfolio and product visuals use authored local SVG art plates, keeping the work archive visually coherent without relying on generic stock imagery or unrelated accent colors.
- `SPR / 01`, `SPR / 02`, etc. create a recurring house indexing language.
- The footer becomes a large SPR signature moment.
- Motion is restrained and respects `prefers-reduced-motion`.
- Mobile layouts intentionally recompose rather than simply shrink desktop columns.
- Explicit button types, focus states, mobile-menu focus handling and disabled social placeholders.
- Contact form validation now clearly distinguishes local validation from actual delivery.
- Canonical homepage and sitemap URLs use `/` rather than `/index.html`.

## Structure

```text
sprfolio/
├── index.html
├── about.html
├── services.html
├── work.html
├── digital-products.html
├── content-media.html
├── publishing.html
├── contact.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── portfolio.js
│   ├── contact.js
│   └── data.js
├── assets/
│   ├── fonts/woff2/  # Vendored Inter weights
│   ├── images/
│   └── work/          # Authored on-brand SVG visual plates
├── favicon/
│   └── favicon.svg
├── robots.txt
├── sitemap.xml
└── README.md
```

## Run locally

No build step is required. Open `index.html` directly for a basic check, or use a local static server for the most reliable browser behavior:

```bash
cd sprfolio
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Editing the brand

Open `js/main.js`. The `SPRFOLIO` configuration contains the brand name, tagline, email, social URLs, year, and approved color tokens. Change these values instead of searching through individual pages.

### Colors

The visual system is controlled by CSS variables in `css/style.css`, including the primary font and spacing tokens:
- `--ink` — black
- `--paper` — warm white
- `--white` — clean white
- `--beige` — warm beige
- `--sage` — sage green

The website UI remains inside the approved black, white, warm-beige and sage system. Project artwork may use its own visual palette when appropriate.

### Typography

Inter is vendored locally under `assets/fonts/` and applied site-wide, including navigation, headings, buttons and form controls. This avoids a third-party font dependency and preserves the Version 1 typeface.

### Portfolio

Edit `js/data.js` for the central project model and `work.html` for the current static card presentation. Replace the authored SVG plates in `assets/work/` with real case-study photography, mockups or project captures when final assets are available. Keep the same palette and editorial framing.

### Digital products / publishing

The current product and publication cards are intentionally static placeholders. Their structure is ready for a store, CMS or checkout integration later. No payment system is implemented.

### Contact form

The contact form validates locally and displays a success message. It does **not** transmit data. Connect it to Formspree, a serverless function, your own backend, or another email service before launch.

## Accessibility

The build uses semantic HTML, keyboard-visible controls, labelled form fields, focusable buttons, status messaging, responsive touch targets, and reduced-motion support. Continue testing with keyboard navigation and a screen reader before launch.

## Testing

Run the static server and check all eight pages:
1. Home
2. About
3. Creative Capabilities
4. Work
5. Digital Products
6. Content & Media
7. Publishing
8. Contact

Verify navigation, mobile menu, portfolio filters, form validation, responsive layouts at 360/390/430/768/1024/1280/1440/1920px, keyboard focus, and browser console errors.

## GitHub Pages

The project uses relative asset and page paths and requires no backend. Push the `sprfolio` directory to a repository and enable GitHub Pages from the repository's Pages settings. If the repository is served from a subdirectory, keep all internal links relative as they are in this project.

## Before launch

Replace:
- empty social URLs in `js/main.js` (these render as disabled until real profiles are supplied)
- the placeholder email if needed
- CSS project artwork with final case-study imagery
- canonical URLs if the final domain differs
- any placeholder product pricing/content
- contact form integration

The static version intentionally does not include a CMS, database, checkout, analytics, or backend form delivery.


## Creative-direction refinements

This pass further removes template signals:
- Navigation is now an editorial header that becomes a quiet framed surface only after scrolling, rather than a permanent floating card.
- The work archive uses authored SVG visual plates for Gaming Cafe, Packaging, VS Education App, Digital Product, Publishing and Experimental work.
- Product and content/media sections use the same visual-plate language instead of generic text-only blocks.
- Creative Worlds carry large background index numbers to make the SPR indexing system part of the composition.
- The five-step process is now an editorial sequence rather than five equal service cards.
- Interior page headers use `SPR / ##` archive indexing.
- A field-note strip adds a recurring house-publishing device between major homepage chapters.
- Hover behavior is restrained to lift, crop and reveal; there is no decorative cursor or excessive animation.
- Social links that are not configured remain non-navigating until real URLs are supplied.

## Launch-critical replacements

The visual system is production-ready as a design framework, but these content items should be replaced before public launch:
1. Real case-study imagery / screenshots.
2. Final SPRFOLIO logo/monogram artwork if a master logo file exists.
3. Real social URLs.
4. Final domain/email configuration.
5. A real form endpoint if inquiries must be delivered.


## V5 QA
V5 is a static GitHub Pages release candidate. The final QA pass covers all 8 pages, local references and assets, duplicate IDs, JavaScript syntax, design tokens, inline styles, placeholder text, navigation structure, portfolio filters, contact-form validation, SEO metadata, responsive CSS and GitHub Pages-safe relative paths. Live Chromium navigation was attempted in the execution environment; local navigation is restricted there, so browser-runtime console results are not represented as a false green check.


## V5 deployment placeholder

The final public domain/repository name was not supplied. Canonical URLs, `robots.txt`, and `sitemap.xml` therefore use the documented placeholder `https://USERNAME.github.io/REPOSITORY/`. Replace `USERNAME` and `REPOSITORY` with the actual GitHub Pages address before publishing.

## V5 known limitations

- Social profile URLs are intentionally unconfigured and render as non-linking labels until real URLs are supplied.
- The contact form performs client-side validation only and does not transmit submissions.
- Portfolio/product SVG plates are authored placeholders for the design system and should be replaced with final owned project imagery where available.
- No analytics, CMS, checkout, or backend is included.
