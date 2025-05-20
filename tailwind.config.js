const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        200: "200% 200%",
      },
      animation: {
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        gradient: "gradient 2s ease infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.1" },
          "50%": { transform: "scale(1.05)", opacity: "0.15" },
        },
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
