import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
	compilerOptions: {
		customElement: true,
		accessors: true,
	},
};

export default config;
