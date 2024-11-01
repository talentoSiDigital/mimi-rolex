import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';
// import vueDevTools from 'vite-plugin-vue-devtools'
// import Sitemap from 'vite-plugin-sitemap'


// https://vitejs.dev/config/
export default defineConfig({
  

  build: {
    assetsInlineLimit: 1024,
    minify:'esbuild' // 1kb
    // outDir: '../server/app/views',

  },
  plugins: [vue({
    script: {
      defineModel: true
    }
  }),
  // viteCompression({
  //   algorithm:'gzip'
  // })
  // ,
  //  vueDevTools({
  //   launchEditor: 'code',
  // })
  ],
})
