/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  dark: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Proxima Nova"', 'Arial'],
        'sora': ['Sora', 'Padauk', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'moderustic': ["Moderustic", 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'josefin': ["Josefin Sans", 'sans-serif']
      },

      colors: {
        'text': '#110909',
        'background': '#ffffff',
        'primary': '#2e2e2e',
        'secondary': '#cfcfcf',
        'accent': '#7ca3bb',
       },
       
       
    },
  },
  plugins: [],

}