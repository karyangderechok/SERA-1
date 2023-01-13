/** @type {import('tailwindcss').Config} */

const colors = require("./src/infastructure/themes/colors");

module.exports = {
  content: [
    "./App.js",
    "./src/features/**/**/*.{jsx,js}",
    "./src/components/*.{jsx,js}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
