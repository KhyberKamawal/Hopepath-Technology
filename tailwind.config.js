/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(3deg) scale(1.05)" },
          "50%": { transform: "rotate(-3deg) scale(0.95)" },
          "75%": { transform: "rotate(2deg) scale(1.02)" },
        },
        waveReverse: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(-3deg) scale(1.05)" },
          "50%": { transform: "rotate(3deg) scale(0.95)" },
          "75%": { transform: "rotate(-2deg) scale(1.02)" },
        }
      },
      animation: {
        wave: "wave 6s ease-in-out infinite",
        waveReverse: "waveReverse 8s ease-in-out infinite",
      }},
  },
  plugins: [],
};
