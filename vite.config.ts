import * as path from 'path'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve('./frontend'), // adjust this path as needed
    },
  },
  envDir: path.resolve(__dirname, 'frontend', 'src')
})
