/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'main-green': '#ADBAAD',
        'secondary-green': '#adbaad',

        'rolex-green': '#127749',
        'gray-button': '#484848',


        'opaco':'rgba(0, 0, 0, 0.5)'
      },
      fontFamily: {
        vilsuve: ["Vilsuve", "sans-serif"],
        tudor: ["Meta", "sans-serif"],
        montserrat : ["Montserrat","sans-serif"],
        'arial-light': ['Arial Light', 'sans-serif'],
        'arial-bold': ['Arial MT', 'sans-serif'],
      
      },
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tushargugnani/tailwind-group-peer-checked'),
  ],
}