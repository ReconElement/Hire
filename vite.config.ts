import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
export default defineConfig({
  // server: {
  //   origin: 'http://localhost:3000/'
  // },
  plugins: [
    tailwindcss(),
    svgr({
      include:"**/*.svg?react",
    })
  ],
});