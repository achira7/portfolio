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
        card: "rgba(var(--card))",

        "copy-primary": "rgba(var(--copy-primary))",
        "copy-secondary": "rgba(var(--copy-secondary))"
      },
    },
  },
  plugins: [],
}