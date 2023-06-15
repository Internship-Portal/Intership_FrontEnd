/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#3956FF",
        secondary: "#F5F6F6",
         bannerColor:"#F9DCDC",
        cardColor: "#F5F6F6",
        buttonText:"#34AEE6",
        aboutText:"#BAC8CA",
        cardBackground:"#112240",
        cardText:"#A3ADCC",
        footer:"#204482"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};