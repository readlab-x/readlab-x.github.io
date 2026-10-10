# Project Pages Layout Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Align the projects archive and localized project detail pages with the homepage's wide editorial layout and fix responsive clipping.

**Architecture:** Keep routes and localized data intact. Rework the shared project detail component and archive markup to use wide, unframed editorial bands, then apply page-scoped responsive CSS in the global stylesheet. Reuse existing Header, Footer, buttons, and project data.

**Tech Stack:** Astro, TypeScript, CSS, npm scripts.

---

### Task 1: Rework the project archive layout

**Files:**
- Modify: `src/pages/projects.astro`
- Modify: `src/pages/en/projects.astro`
- Modify: `src/styles/global.css`

1. Replace the legacy intro/sidebar arrangement with a wide editorial title band and directory section.
2. Style project entries as responsive rows with clear title, metadata, summary, tags, and affordance.
3. Verify both localized archive routes render without horizontal overflow.

### Task 2: Rework shared project detail layout

**Files:**
- Modify: `src/components/project/ProjectDetailPage.astro`
- Modify: `src/styles/global.css`

1. Retain existing project content and actions while aligning the hero with homepage project-slide proportions.
2. Present metadata and metrics in a readable side rail on desktop and a stacked band on mobile.
3. Reformat overview and detail sections as full-width editorial reading blocks.
4. Verify both project slugs at desktop and mobile widths.

### Task 3: Validate

**Files:**
- Test: project archive and detail routes via Astro build/check.

1. Run `npm run check`.
2. Run `npm run build`.
3. Inspect generated routes and responsive browser layout for the three requested paths.
