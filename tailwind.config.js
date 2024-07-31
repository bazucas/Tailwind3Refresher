/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "sans": ["Poppins", "sans-serif"],
        "poppins": ["Poppins"]
      },
      backgroundImage: {
        uber: "url('../uber/assets/bguber.png')",
        city: "url('../uber/assets/bg-city.png')",
        nike: "url('../desafio/assets/bg.png')",
      },
      keyframes:{
        floatUp:{
          "0%": {transform: "translatey(0px)"},
          "50%": {transform: "translatey(-12px)"},
          "100%": {transform: "translatey(0px)"}
        },
        floatRight: {
          "0%": { transform: "translatex(0px)" },
          "50%": { transform: "translatex(12px)" },
          "100%": { transform: "translatex(0px)" },
        },
        opacityPulse: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.2 },
          "100%": { opacity: 1 },
        }
      },
      animation:{
        floatUp: "floatUp 2s infinite",
        floatRight: "floatRight 2.5s infinite",
        opacityPulse: "opacityPulse 2.5s infinite"
      },
      colors: {
        primaria: "#FF00FF",
        secundaria: "#00FF00"
      }
    },
  },
  plugins: [],
}

