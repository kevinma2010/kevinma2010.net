// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kevinma2010.net",
  // Only use base path in production (GitHub Pages)
  // base: process.env.NODE_ENV === "production" ? "/astro-theme-terminal" : "/",
  base: "/",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      langs: [],
      wrap: true,
    },
  },
});
