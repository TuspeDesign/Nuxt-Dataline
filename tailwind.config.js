const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        datalineyksi: "#4C5C96",
        datalinekaksi: "#45558D",
      },
      fontFamily: {
        'display': ['Segoe UI'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}