import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Proxy API requests to backend; keep SPA routes (e.g. /crm) handled by Vite
      '/api': {
        target: 'business-suite-backend.railway.internal',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'business-suite-backend.railway.internal',
        changeOrigin: true,
      }
    }
  }
})
