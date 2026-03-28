# ReadLab X official site implementation plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to
> implement this plan task-by-task.

**Goal:** Build the first production-ready version of the ReadLab X official
website, including the homepage, the project listing page, i18n, theme
switching, SEO, and responsive behavior.

**Architecture:** Use Astro as the static site framework and organize the site
around reusable layout and content components. Keep all copy and metadata in
language resource files, drive theming through semantic CSS variables, and keep
SEO concerns in the layout layer so every page inherits correct defaults.

**Tech Stack:** Astro, TypeScript, CSS variables, static assets in `public/`,
Astro pages and layouts, JSON or TypeScript-based i18n resources.

---

## implementation notes

This plan assumes the current repository already contains:

- an Astro scaffold
- brand assets in `public/brand`
- icon assets in `public/icons`
- a first homepage draft

The work below upgrades that baseline into a real official site.

## task 1: normalize the project structure

This task cleans up the repo and creates the directory structure needed for the
final site. Do this before new behavior work so later tasks have stable paths.

**Files:**
- Create: `src/i18n/`
- Create: `src/content/`
- Create: `src/data/`
- Create: `src/components/site/`
- Create: `src/components/project/`
- Create: `src/utils/`
- Modify: `src/pages/index.astro`
- Verify: `npm run build`

**Step 1: Create the missing source directories**

Run:

```bash
mkdir -p src/i18n src/content src/data src/components/site src/components/project src/utils
```

Expected: the directories exist and the existing page still builds.

**Step 2: Move page-level concerns out of `index.astro`**

Extract all inline arrays and repeated UI sections into imported modules or
components so the page becomes a composition root rather than a data dump.

**Step 3: Run a build**

Run:

```bash
npm run build
```

Expected: PASS with no missing import or asset path errors.

**Step 4: Commit**

```bash
git add src package.json package-lock.json astro.config.mjs tsconfig.json .gitignore
git commit -m "refactor: normalize official site structure"
```

## task 2: introduce design tokens and the three-theme system

This task implements the actual theme architecture described in the design
document. The result must support light, dark, and system modes.

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/components/site/ThemeToggle.astro`
- Create: `src/components/site/theme-script.ts`
- Modify: `src/styles/global.css`
- Modify: `src/layouts/BaseLayout.astro`
- Verify: `npm run build`

**Step 1: Write the failing behavior target**

Create a short checklist in comments or a markdown scratch note that defines the
required behavior:

- light mode uses light semantic tokens
- dark mode uses dark semantic tokens
- system mode follows `prefers-color-scheme`
- page does not flash the wrong theme on first paint

Expected: the target behavior is explicit before implementation.

**Step 2: Add semantic token layers**

In `src/styles/tokens.css`, define:

- brand tokens for the five required brand colors
- semantic tokens for background, text, border, panel, muted text, accent
- separate token mappings for `[data-theme="light"]` and `[data-theme="dark"]`

Do not hardcode component colors directly inside every section.

**Step 3: Add the pre-hydration theme bootstrap**

Create `src/components/site/theme-script.ts` and inject it from
`src/layouts/BaseLayout.astro` so the page sets `data-theme` before content
paint. Persist user choice in `localStorage`.

**Step 4: Build a quiet theme toggle**

Create `src/components/site/ThemeToggle.astro` with three choices:

- Light
- Dark
- System

The UI must remain minimal: no large switches, no playful animation.

**Step 5: Update `global.css` to consume semantic tokens**

Replace existing hardcoded colors with CSS variables from `tokens.css`.

**Step 6: Run a build**

Run:

```bash
npm run build
```

Expected: PASS and generated HTML includes the theme bootstrap script.

**Step 7: Commit**

```bash
git add src/styles src/components/site src/layouts/BaseLayout.astro
git commit -m "feat: add three-mode theme system"
```

## task 3: add the i18n foundation

This task creates a real localization structure instead of keeping copy inside
page files.

**Files:**
- Create: `src/i18n/config.ts`
- Create: `src/i18n/messages/en.ts`
- Create: `src/i18n/messages/zh-CN.ts`
- Create: `src/utils/i18n.ts`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/pages/index.astro`
- Create: `src/pages/en/index.astro`
- Verify: `npm run build`

**Step 1: Define the supported locales**

Add a config module that exports:

- default locale: `zh-CN`
- supported locales: `['zh-CN', 'en']`
- route prefix rules

**Step 2: Move homepage copy into message files**

Create parallel translation objects for:

- navigation
- hero
- features
- workflow
- use cases
- CTA
- SEO metadata

**Step 3: Create i18n helpers**

Add helpers to:

- resolve locale from route
- return translated messages
- generate locale-aware links

**Step 4: Refactor the homepage to read from messages**

Replace hardcoded strings in `src/pages/index.astro` with localized data.

**Step 5: Create the English homepage route**

Add `src/pages/en/index.astro` and reuse the same components and data pipeline.

**Step 6: Run a build**

Run:

```bash
npm run build
```

Expected: PASS and both `/index.html` and `/en/index.html` are generated.

**Step 7: Commit**

```bash
git add src/i18n src/utils src/pages src/layouts
git commit -m "feat: add homepage i18n foundation"
```

## task 4: build reusable site primitives

This task turns the current page into a system of reusable components that can
also support the project listing page.

**Files:**
- Create: `src/components/site/Header.astro`
- Create: `src/components/site/Footer.astro`
- Create: `src/components/site/LocaleSwitcher.astro`
- Create: `src/components/site/SectionHeader.astro`
- Create: `src/components/site/ButtonLink.astro`
- Modify: `src/pages/index.astro`
- Verify: `npm run build`

**Step 1: Extract the header**

Move navigation, wordmark, theme toggle, and locale switcher into a shared
header component.

**Step 2: Add a footer**

Create a footer with:

- brand mark or wordmark
- short brand description
- primary navigation
- contact or social placeholders
- copyright line

**Step 3: Extract shared section UI**

Move repeated section title markup into `SectionHeader.astro` and repeated link
button styles into `ButtonLink.astro`.

**Step 4: Update the homepage**

Replace inline UI blocks with the new shared primitives.

**Step 5: Run a build**

Run:

```bash
npm run build
```

Expected: PASS and the homepage HTML still contains the same main sections.

**Step 6: Commit**

```bash
git add src/components/site src/pages/index.astro
git commit -m "refactor: extract shared site primitives"
```

## task 5: refine the homepage into the official landing page

This task upgrades the current homepage from a rough draft to the actual brand
entry page.

**Files:**
- Modify: `src/pages/index.astro`
- Create: `src/data/home.ts`
- Modify: `src/styles/global.css`
- Verify: `npm run build`

**Step 1: Define the homepage content model**

Move section data into `src/data/home.ts` so content is clearly structured.

**Step 2: Add a project preview section**

Insert a section that previews selected experiments or projects and links to the
future project listing page.

**Step 3: Improve hierarchy and spacing**

Refine:

- hero spacing
- section rhythm
- CTA placement
- mobile stacking

The result must feel editorial and quiet, not generic SaaS.

**Step 4: Run a build**

Run:

```bash
npm run build
```

Expected: PASS.

**Step 5: Manual visual verification**

Run:

```bash
npm run dev
```

Check:

- desktop hero balance
- tablet spacing
- mobile readability
- theme legibility in light and dark mode

**Step 6: Commit**

```bash
git add src/pages/index.astro src/data/home.ts src/styles/global.css
git commit -m "feat: refine official homepage"
```

## task 6: build the project listing page

This task creates the second core page requested in the design doc.

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/components/project/ProjectCard.astro`
- Create: `src/pages/projects.astro`
- Create: `src/pages/en/projects.astro`
- Modify: `src/components/site/Header.astro`
- Modify: `src/components/site/Footer.astro`
- Verify: `npm run build`

**Step 1: Create the project data source**

Add a small typed dataset with fields such as:

- slug
- title
- summary
- tags
- status
- year
- locale-specific copy where needed

**Step 2: Build the card component**

Create a quiet project card with:

- title
- summary
- tag row
- subtle hover state

**Step 3: Build the list page**

Create a page with:

- page intro
- optional filter placeholder
- responsive card grid

**Step 4: Add localization**

Add the English route and localized metadata.

**Step 5: Update site navigation**

Link the page from header and footer.

**Step 6: Run a build**

Run:

```bash
npm run build
```

Expected: PASS and both language routes are generated.

**Step 7: Commit**

```bash
git add src/data src/components/project src/pages src/components/site
git commit -m "feat: add project listing page"
```

## task 7: complete the SEO layer

This task fills in the metadata and search engine requirements defined in the
design doc.

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Create: `src/utils/seo.ts`
- Create: `public/robots.txt`
- Create: `src/pages/sitemap-index.xml.ts` or Astro-equivalent sitemap config
- Verify: `npm run build`

**Step 1: Centralize SEO metadata generation**

Create a utility that builds page metadata from:

- locale
- page title
- page description
- canonical path
- social preview image

**Step 2: Add language-aware metadata**

Ensure `lang`, `og:locale`, and alternate links are correct for `zh-CN` and
`en`.

**Step 3: Add crawl files**

Create `robots.txt` and either use Astro sitemap support or generate a sitemap
route.

**Step 4: Add structured data**

Inject JSON-LD for:

- `Organization`
- `WebSite`
- `CollectionPage` on the projects page

**Step 5: Run a build**

Run:

```bash
npm run build
```

Expected: PASS and the output contains crawlable static files.

**Step 6: Commit**

```bash
git add src/layouts src/utils public
git commit -m "feat: add official site seo layer"
```

## task 8: tighten responsive behavior and accessibility

This task makes the site production-safe on H5 and improves keyboard and screen
reader behavior.

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/components/site/Header.astro`
- Modify: `src/components/site/ThemeToggle.astro`
- Modify: `src/components/site/LocaleSwitcher.astro`
- Verify: `npm run build`

**Step 1: Audit mobile overflow**

Check for:

- hero overflow
- navigation wrapping issues
- long English copy overflow
- image sizing issues

**Step 2: Add focus-visible states**

Ensure interactive elements have visible keyboard focus styles that match the
minimal aesthetic.

**Step 3: Improve accessibility semantics**

Confirm:

- controls have labels
- nav uses semantic landmarks
- color contrast passes in both themes

**Step 4: Run a build**

Run:

```bash
npm run build
```

Expected: PASS.

**Step 5: Manual device verification**

Check:

- narrow mobile width
- tablet width
- desktop width
- dark and light mode

**Step 6: Commit**

```bash
git add src/styles src/components/site
git commit -m "fix: improve responsive and accessibility details"
```

## task 9: prepare deployment and repository hygiene

This task makes the site ready for GitHub Pages deployment and keeps the repo
clean.

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: `astro.config.mjs`
- Modify: `README.md` if present
- Verify: `npm run build`

**Step 1: Decide the deployment base path**

For `readlab-x.github.io`, the root path is usually `/`. Confirm and keep the
Astro config aligned with GitHub Pages behavior.

**Step 2: Add the deployment workflow**

Create a GitHub Actions workflow that:

- installs dependencies
- builds the Astro site
- publishes `dist/` to GitHub Pages

**Step 3: Add setup notes**

Document local development and deployment behavior if the repo has or gains a
README.

**Step 4: Run a build**

Run:

```bash
npm run build
```

Expected: PASS.

**Step 5: Commit**

```bash
git add .github astro.config.mjs README.md
git commit -m "chore: prepare github pages deployment"
```

## final verification

When all tasks are complete, run the full verification pass:

```bash
npm run build
```

Then manually verify:

1. The homepage renders correctly in light mode.
2. The homepage renders correctly in dark mode.
3. Theme mode persists after reload.
4. `/en/` works.
5. `/projects/` works.
6. `/en/projects/` works.
7. Favicon and touch icons resolve.
8. Metadata appears in generated HTML.

## next steps

After this plan is complete, the next likely expansion steps are:

1. Add project detail pages.
2. Add a content workflow for essays or lab notes.
3. Add analytics and a privacy-conscious contact funnel.
