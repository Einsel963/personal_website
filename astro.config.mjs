import { defineConfig } from 'astro/config';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectPagesSite =
  repositoryName.length > 0 && !repositoryName.endsWith('.github.io');

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  // Edit `site` later so canonical URLs match your real domain or GitHub Pages URL.
  site: process.env.SITE_URL ?? 'https://example.github.io',
  // This keeps project-page deployments working on GitHub Pages without changing links in dev.
  base: isProjectPagesSite ? `/${repositoryName}/` : '/'
});
