/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        // 'main-green': '#01603a',
        // 'main-green': '#AEFEDE',
        // 'main-green': '#E9EDE9',
        'main-green': '#ADBAAD',
        'secondary-green': '#adbaad',

        'rolex-green': '#01603a',
        'rolex-green-2':'#29684b',
        'gray-button': '#767676',
        'rolex-green-2':'#127849',
        'rolex-green-3':'#61bc93',
        'rolex-brown':'#472c20',
        'rolex-dark-grey':'#212121',
        'rolex-grey-light':'#d4d4d4',
        'rolex-brown-light-1':'#f5efea', //dark
        'rolex-brown-light-2':'#f9f7f3', //light
      

        'opaco':'rgba(0, 0, 0, 0.5)'
      },
      fontFamily: {
        vilsuve: ["Vilsuve", "sans-serif"],
        tudor: ["Meta", "sans-serif"],
        montserrat : ["Montserrat","sans-serif"],
        'arial-light': ['Arial Light', 'sans-serif'],
        'arial-bold': ['Arial MT', 'sans-serif'],
        'helvetica-bold':['Helvetica-Neue-Bold', 'sans-serif'],
        'helvetica-light':['Helvetica-Light', 'sans-serif'],
        'helvetica':['Helvetica Now Text', 'sans-serif'],
        'georgia':['Georgia', 'sans-serif'],
      
      },
      backgroundImage: {
        'rolex-gradient': "linear-gradient(90deg, rgba(12,66,41,1) 0%, rgba(25,111,73,1) 100%)",
      },
      screens:{
        '3xl':'1700px',
        'xs':'500px'
      },
     
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tushargugnani/tailwind-group-peer-checked'),
  ],
}