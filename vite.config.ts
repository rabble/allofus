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
      strict: false,
      allow: [
        './src', // Example: Allow access to the src directory
        './public', // Example: Allow access to the public directory
        './node_modules/vite/dist/client',
        './node_modules/svelte-hmr/runtime',
        './node_modules/.pnpm/svelte-hmr@0.16.0_svelte@4.2.19/node_modules/svelte-hmr/runtime',
        './prisma'
        // Add more paths as needed
      ]
    },
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      //'@welshman/client': path.resolve(__dirname, 'welshman/packages/app/src'),
      $lib: path.resolve('./src/lib')
    },
  }
})