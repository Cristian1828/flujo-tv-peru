import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://flujo-tv-peru.netlify.app',
  i18n: {
    defaultLocale: 'es-PE',
    locales: ['es-PE'],
  },
});
