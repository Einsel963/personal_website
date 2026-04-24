import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: 'https://Einsel963.github.io',
  base: '/personal_website',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});
