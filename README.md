# Xiangyu Ma Academic Website

Personal academic website built with [Astro](https://astro.build/) and deployed
as a static GitHub Pages project site.

## Features

- Shared layout with responsive navigation and footer
- Clean academic styling with a white background and dark blue accents
- Markdown-backed content for news, research projects, reports, talks, and notes
- Static Astro output suitable for GitHub Pages
- Base-aware links for deployment at `/personal_website/`

## Project Structure

```text
/
|-- public/
|   `-- files/
|-- src/
|   |-- content/
|   |-- data/
|   |-- layouts/
|   |-- pages/
|   `-- styles/
`-- .github/workflows/deploy.yml
```

## Editing Content

- Update core profile details in `src/data/profile.ts`
- Add or edit homepage news in `src/content/news/`
- Update research project descriptions in `src/content/research/`
- Add selected reports in `src/content/publications/`
- Add talks in `src/content/talks/`
- Add lecture or technical notes in `src/content/notes/`
- Replace `public/files/xiangyu-ma-cv.pdf` when the PDF CV changes

## Run Locally

```bash
npm install
npm run dev
```

## Format and Build

```bash
npm run format
npm run format:check
npm run build
```

The production output is written to `dist/`.

## GitHub Pages

The site is configured for:

```js
site: "https://Einsel963.github.io";
base: "/personal_website";
```

The workflow in `.github/workflows/deploy.yml` builds the static site and
deploys `dist/` to GitHub Pages after changes are pushed to `main`.
