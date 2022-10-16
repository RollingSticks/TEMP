import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: `@import 'src/global.scss';`
		}
	}),

	kit: {
		adapter: adapter({
			fallback: "index.html"
		})
	}
};

export default config;
