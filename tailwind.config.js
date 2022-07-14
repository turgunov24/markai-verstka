/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor:{
      bodyBg:"#0f0b30",
    },
    screens: {
      xs:"350px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
