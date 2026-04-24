# Xiangyu Ma Academic Website

Minimal academic website for a physics student built with [Astro](https://astro.build/).
The site is fully static and structured for GitHub Pages deployment.

## Features

- Shared layout with responsive navigation and footer
- Clean academic styling with a white background and dark blue accents
- Markdown-backed content for news, research directions, publications, talks, and notes
- Static Astro output suitable for GitHub Pages
- Placeholder PDF CV download and contact links

## Project structure

```text
/
├── public/
│   └── files/
├── src/
│   ├── content/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── .github/workflows/deploy.yml
```

## Edit content later

- Update core profile details in `src/data/profile.ts`
- Add or edit homepage news in `src/content/news/`
- Update research descriptions in `src/content/research/`
- Add publications in `src/content/publications/`
- Add talks in `src/content/talks/`
- Add lecture or technical notes in `src/content/notes/`
- Replace `public/files/xiangyu-ma-cv.pdf` with your actual CV

Inline comments are included throughout the source files to point to the main
places you will likely edit later.

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal.

## Format and build

Run formatting:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

Build the static site:

```bash
npm run build
```

The production output is written to `dist/`.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at
`.github/workflows/deploy.yml`.

1. Push the repository to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` to trigger deployment.

## Important deployment note

Edit the `site` value in `astro.config.mjs` so it matches your real deployed
domain:

- For a user site: `https://your-username.github.io`
- For a project site: `https://your-username.github.io/repository-name`

The config automatically adjusts the `base` path during GitHub Actions builds
for project pages repositories.
