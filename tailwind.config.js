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
        'font-pri': '#110909',
        'font-sec': '#4d4d4d',
        'background_pri': '#ffffff',
        'surf_pri': '#1d1d1d',
        'surf_sec': '#cfcfcf',
        'accent': '#7ca3bb',
       },
       
       
    },
  },
  plugins: [],

}