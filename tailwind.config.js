/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      purple: "rgba(177, 56, 201, 1)",
      dark: "rgba(51, 51, 51, 1)",
      dark_blue: "rgba(13, 40, 171, 1)",
      gray: "rgba(102, 102, 102, 1)",
      light_gray: "rgba(34, 34, 34, 1)",
      light: "rgba(217, 217, 217, 1)",
      green: "rgba(0, 169, 37, 1)",
      white: "rgba(255, 255, 255, 1)"
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    }
  },
  plugins: [],
}

