import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxies browser /api/* to backend during dev (see src/api/config.js).
      '/api': {
        target: 'https://lavender-hamster-327895.hostingersite.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
