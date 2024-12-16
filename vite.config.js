import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import dynamicComponentLoader from './src/plugins/dynamicComponentLoader.js'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Ensure the base URL is correctly configured
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias '@' to the 'src' folder
      '@components': path.resolve(__dirname, './src/components'), // Alias '@components' to 'src/components'
      '@stores': path.resolve(__dirname, './src/stores')
    }
  },
  plugins: [svelte(), vue(), react(), dynamicComponentLoader()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          react: ['react', 'react-dom'],
          svelte: ['svelte'],
        },
      },
    },
  },
})
