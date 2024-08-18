/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'small-font':['ft-small','sans-serif'],
       'large-font':['ft-bold','sans-serif'],
       'moon-font':['ft-moon','sans-serif'],
      },
    },
  },
  plugins: [],
}