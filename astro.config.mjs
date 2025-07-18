// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://caklem.github.io/Holy-fun',
	// Temporarily removing base to test direct access
	// base: '/Holy-fun',
	output: 'static',
	build: {
		assets: '_astro'
	},
	vite: {
		build: {
			assetsInlineLimit: 0
		}
	}
});
