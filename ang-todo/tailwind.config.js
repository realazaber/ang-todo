/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary": "#fec036",
        "darkbg": "#1a1d21"
      }
    },
  },
  plugins: [],
}