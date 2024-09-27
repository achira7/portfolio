/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        space: ["Space Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },

      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",

        //card colors
        "card-primary-top": "rgba(var(--card-primary-top))",
        "card-primary-bottom": "rgba(var(--card-primary-bottom))",
        "card-primary-border": "rgba(var(--card-primary-border))",

        "card-secondary": "rgba(var(--card-secondary))",

        "color-primary": "rgba(var(--color-primary))",
        "color-secondary": "rgba(var(--color-secondary))",
        "color-tertiary": "rgba(var(--color-tertiary))",

        "color-green": "rgba(var(--color-green))",
        "color-red": "rgba(var(--color-red))",
        "color-yellow": "rgba(var(--color-yellow))",
        "color-blue": "rgba(var(--color-blue))",

        "color-primary-shadow": "rgba(var(--color-primary-shadow))",

        "color-green-shadow": "rgba(var(--color-green-shadow))",
        "color-red-shadow": "rgba(var(--color-red-shadow))",
        "color-yellow-shadow": "rgba(var(--color-yellow-shadow))",
        "color-blue-shadow": "rgba(var(--color-blue-shadow))",

        "color-polaroid": "rgba(var(--color-polaroid))",

        "border-primary": "rgba(var(--border-primary))",
        "border-red": "rgba(var(--border-red))",
        "border-green": "rgba(var(--border-green))",
        "border-yellow": "rgba(var(--border-yellow))",

        "default-button": "rgba(var(--default-button))",
        "button-text": "rgba(var(--button-text))",
      },
    },
  },
  plugins: [],
};
