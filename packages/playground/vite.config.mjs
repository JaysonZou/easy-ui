import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   include: ['@easy/ui'],
  // },
  // build: {
  //   commonjsOptions: {
  //     include: [/@easy\/ui/, /node_modules/],
  //   },
  // },
  resolve: {
    alias: {
      '@easy/ui': path.resolve(__dirname, '../ui/src/index.ts'),
    },
  },
})
