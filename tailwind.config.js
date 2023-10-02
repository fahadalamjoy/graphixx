/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir", "sans"],
      },
      colors: {
        white: "#F7F7F0",
        red: "#8C1D6C",
        black: "#252222",
      }
    },
  },
  plugins: [],
}