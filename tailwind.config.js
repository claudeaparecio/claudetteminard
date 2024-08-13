/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        cursive: ["Rouge Script", 'cursive']
      },
      colors: {
        yellowAccent: '#B49E3C',
        greenAccent: '#495235',

      },
      screens: {
        'phone': '320px',
      },
    },
  },
  plugins: [],
}