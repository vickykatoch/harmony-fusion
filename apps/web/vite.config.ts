import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '../../dist/apps/web'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@fusion/button': path.resolve(__dirname, '../../packages/button/src'),
      '@fusion/auto-hedger': path.resolve(__dirname, '../../plugins/auto-hedger/src'),
      '@fusion/uicore': path.resolve(__dirname, '../../packages/uicore/src'),
    },
  },
  //   test: {
  //     // Vitest config (optional – can keep separate vitest.config.ts if you like)
  //     globals: true,
  //     environment: "jsdom",
  //     setupFiles: [],
  //   },
});
