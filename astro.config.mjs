import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://readlab-x.github.io',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
