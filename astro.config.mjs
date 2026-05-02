import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://broadwell.me/",
	integrations: [react()],
	image: {
		layout: "constrained",
		objectFit: "contain",
		responsiveStyles: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
