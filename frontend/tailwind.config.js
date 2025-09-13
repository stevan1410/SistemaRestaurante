/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        diagonalSlow: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(200px)" },
          "100%": { transform: "translateX(0)" },
        },
        diagonalMedium: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-250px)" },
          "100%": { transform: "translateX(0)" },
        },
        diagonalFast: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(400px)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeSlow: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 0.5 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        "diagonal-slow": "diagonalSlow 12s ease-in-out infinite",
        "diagonal-medium": "diagonalMedium 10s ease-in-out infinite",
        "diagonal-fast": "diagonalFast 8s ease-in-out infinite",
        "fade-slow": "fadeSlow 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out both",
      },
    },
  },
  plugins: [],
}
