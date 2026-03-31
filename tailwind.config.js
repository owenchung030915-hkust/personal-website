/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "DM Sans",
          "Noto Sans TC",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        ink: "#0f1419",
        mist: "#f4f2ee",
        clay: "#c4a574",
        deep: "#1a2332",
      },
    },
  },
  plugins: [],
};
