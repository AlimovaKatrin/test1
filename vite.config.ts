import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'msw/native': fileURLToPath(
        new URL('./node_modules/msw/lib/native/index.mjs', import.meta.url),
      ),
    },
  },
});
