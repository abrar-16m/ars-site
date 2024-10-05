// tailwind.config.js
const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      fontFamily:{
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        jura: ["Jura", "sans-serif"],
        monoton: ["Monoton", "sans-serif"]
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};