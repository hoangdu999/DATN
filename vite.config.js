import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: false,
    host: true,
    allowedHosts: [
      '13be-2001-ee0-4041-ccc9-a84e-90fd-4648-9aa.ngrok-free.app'
    ],
    headers: {
      'Cross-Origin-Opener-Policy': 'unsafe-none',
      'Cross-Origin-Embedder-Policy': 'unsafe-none'
    }
  }
})
