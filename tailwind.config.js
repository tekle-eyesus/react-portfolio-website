/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2D2D2D",
        secondary: "#4A4A4A",
        accent: "#007AFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        custom: ["MyFont", "sans-serif"],
        customNormal: ["MyNormalFont", "sans-serif"],
        roboto: ["roboto-slab", "sans-serif"],
        header1: ["headerOne", "sans-serif"],
        header2: ["headerTwo", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
