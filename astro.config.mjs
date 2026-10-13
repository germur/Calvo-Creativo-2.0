import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://calvocreativo.com',
  output: 'static',
  trailingSlash: 'never',
  adapter: netlify({ devFeatures: { edgeFunctions: false } }),
  integrations: [react()],
  vite: { ssr: { noExternal: ['@vercel/og'] } },
});
