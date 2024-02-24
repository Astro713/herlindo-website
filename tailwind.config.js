/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#FFFFFF",
        "gray-50": "#B1B1B1",
        "gray-100": "#8C8C8C",
        "gray-500": "#636363",
        "primary-100": "#D9D9D9",
        "primary-300": "#4F4F4F",
        "primary-500": "#333333",
        "secondary-400": "#2E2E2E",
        "secondary-500": "#1A1A1A",
      },
      backgroundImage: (theme) => ({
        "gradient-grey":
          "linear-gradient(90deg, #F0F0F0 0%, #A3A3A3 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
