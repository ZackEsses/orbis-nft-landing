/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#010828",
        cream: "#EFF4FF",
        neon: "#6FFF00",
      },
      fontFamily: {
        grotesk: ["Anton", "sans-serif"],
        condiment: ["Condiment", "cursive"],
      },
      maxWidth: {
        shell: "1831px",
      },
      boxShadow: {
        glow: "0 20px 60px rgba(111, 255, 0, 0.08)",
      },
    },
  },
  plugins: [],
}
