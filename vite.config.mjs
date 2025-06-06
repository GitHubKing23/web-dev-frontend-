import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

// Vite configuration
export default defineConfig({
  plugins: [
    react(), // Enables React support
    mdx({
      remarkPlugins: [
        remarkFrontmatter, // Parses YAML frontmatter (e.g., title, date)
        [remarkMdxFrontmatter, { name: 'metadata' }] // Injects frontmatter as `metadata`
      ]
    })
  ],
  server: {
    historyApiFallback: true // Ensures proper routing with React Router
  }
});
