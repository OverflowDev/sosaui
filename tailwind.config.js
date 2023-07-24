/** @type {import('tailwindcss').Config} */

const defaultColors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        'sosa': '#7052fb',
        'sosaTry': '#7d6ec4',
        'sosaSession': '#faf9ff',
        'sosaDark': '#2b2350',
        'sosaSignup': '#6610f2',
        'sosaFooter': '#2c234d',
        'sosaFooterText': '#a39eb9',
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}