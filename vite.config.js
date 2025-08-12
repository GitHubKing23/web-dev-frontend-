// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

// Replace with exactly what your environment shows
const ALLOWED_HOST = 'a5e81212-9913-4403-bd44-c816b8d0e0e2.notebook.gra.ai.cloud.ovh.net';

export default defineConfig({
  plugins: [
    react(),
    mdx({
      include: ['**/*.mdx', '**/*.md'], // process all MDX & MD files
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: 'frontmatter' }],
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          aos: ['aos'],
        },
      },
    },
  },
  server: {
    host: true,           // same as --host 0.0.0.0
    port: 5173,
    allowedHosts: [ALLOWED_HOST],
  },
});
