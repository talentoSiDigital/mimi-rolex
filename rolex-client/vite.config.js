import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  

  build: {
    assetsInlineLimit: 1024, // 1kb
    // outDir: '../server/app/views',

  },
  plugins: [vue({
    script: {
      defineModel: true
    }
  })],
})
