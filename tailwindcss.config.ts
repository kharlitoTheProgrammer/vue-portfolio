/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        special: ['Special Gothic Expanded One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
