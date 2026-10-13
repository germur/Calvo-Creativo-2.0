import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://calvocreativo.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  adapter: netlify({ devFeatures: { edgeFunctions: false } }),
  integrations: [react()],
  vite: { ssr: { external: ['@vercel/og'] } },
});
