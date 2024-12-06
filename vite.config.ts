import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    sourcemap: true, // Enable source maps
  },
  server: {
    fs: {
      allow: [
        './src', // Example: Allow access to the src directory
        './public', // Example: Allow access to the public directory
        './node_modules/vite/dist/client',
        './node_modules/svelte-hmr/runtime',
        //'./node_modules/.pnpm',
        // Add more paths as needed
      ]
    }
  },
  resolve: {
    alias: {
      //'@welshman/client': path.resolve(__dirname, 'welshman/packages/app/src'),
    },
  }
})