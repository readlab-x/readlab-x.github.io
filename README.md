# ReadLab X official site

This repository contains the official Astro site for ReadLab X.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the local URL Astro prints in the terminal.

## Build

Create a production build:

```bash
npm run build
```

The generated site is written to `dist/`.

## Deploy

This repo is configured for GitHub Pages using GitHub Actions.

Push to `main` to trigger the deployment workflow in
[`deploy.yml`](.github/workflows/deploy.yml). For a user or organization site,
GitHub Pages should be set to use GitHub Actions as the publishing source.
