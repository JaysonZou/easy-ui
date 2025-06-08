import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@easy/ui'],
  },
  build: {
    commonjsOptions: {
      include: [/@easy\/ui/, /node_modules/],
    },
  }
})
