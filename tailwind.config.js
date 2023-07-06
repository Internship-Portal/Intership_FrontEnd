/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'loginBackground': "url('/src/assets/login.jpg')",
       
      },
      colors: {
        primary: "#0E9FC8",
        primaryText: "#002342",

        secondary: "#C9BCEC",
         bannerColor:"#F9DCDC",
        cardColor: "#F5F6F6",
        buttonText:"#34AEE6",
        aboutText:"#BAC8CA",
        cardBackground:"#0E9FC8",
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