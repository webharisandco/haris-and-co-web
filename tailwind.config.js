/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      screens: {
        xs: "380px",
        '3xl': "1920px",
        "4xl": "2260px",
      },

    },
  },
  plugins: [],
}