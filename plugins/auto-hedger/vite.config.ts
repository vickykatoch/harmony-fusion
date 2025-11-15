import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '../../dist/packages/auto-hedger'),
    emptyOutDir: true,
    lib: {
      entry: 'src/index.ts',
      name: 'MyOrgUi',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  //   test: {
  //     globals: true,
  //     environment: "jsdom",
  //   },
});
