// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://caklem.github.io',
	base: '/Holy-fun',
	output: 'static',
	integrations: [tailwind()],
	build: {
		assets: '_astro'
	},
	vite: {
		build: {
			assetsInlineLimit: 0
		}
	}
});
