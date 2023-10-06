import * as path from 'path'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    react()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/src/utils/styles/base.scss";`,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve('./frontend'),  // Root
      '$': path.resolve('./frontend/src/asset'),
      '@components': path.resolve('./frontend/src/components'),
      '%config': path.resolve('./frontend/src/config'),
      '&features': path.resolve('./frontend/src/features'),
      '*hooks': path.resolve('./frontend/src/hooks'),
      '+stores': path.resolve('./frontend/src/stores'),
      '!utils': path.resolve('./frontend/src/utils'), 
    },
  },
  envDir: path.resolve(__dirname, 'frontend', 'src')
})
