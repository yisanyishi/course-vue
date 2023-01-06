import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8010,
    proxy: {
      '/api': {
        target: 'http://localhost:8030/',
        changeOrigin: true,
      }
    }
  }
})
