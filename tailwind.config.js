/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        "greyish-blue": "#5A698F",
        "dark-blue": "#10141E",
        "semi-dark-blue": "#161D2F",
      },
      screens: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
