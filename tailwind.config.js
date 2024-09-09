/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        space: ["Space Mono", "monospace"],
        inter: ["Inter", "sans-serif"]
      },

      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        "card-primary": "rgba(var(--card-primary))",
        "card-secondary": "rgba(var(--card-secondary))",

        "color-primary": "rgba(var(--color-primary))",
        "color-secondary": "rgba(var(--color-secondary))",

        "color-green": "rgba(var(--color-green))",
        "color-red": "rgba(var(--color-red))",
        "color-yellow": "rgba(var(--color-yellow))",
      },
    },
  },
  plugins: [],
}