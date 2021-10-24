const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        GreenAD: "#01aba5",
        BleuAD: "#246389",
        GreenADdark: "#039c97",
        BleuADdark: "#1e4d69",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      visibility: ["group-hover"],
      transitionDelay: ["hover", "focus"],
    },
  },
  plugins: [],
};
