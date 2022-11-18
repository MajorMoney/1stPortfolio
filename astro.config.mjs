import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://majormoney.github.io',
  base: '/PNFC_1st_portfolio',
  integrations: [mdx(), sitemap(), react(), tailwind()]
});