import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://www.golden-wings-robyn.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
