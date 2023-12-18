/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          'main-green': '#ADBAAD',
          'secondary-green':'#adbaad',

          'rolex-green': '#127749',
          'gray-button':'#484848'
        }
      }
    },
    plugins: [],
  }