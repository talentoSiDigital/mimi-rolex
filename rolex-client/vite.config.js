import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
// import Sitemap from 'vite-plugin-sitemap'


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
  }),
  // ,
  //  vueDevTools({
  //   launchEditor: 'code',
  // })
  ],
})
