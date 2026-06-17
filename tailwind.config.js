/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#003580", light: "#0071c2", dark: "#00224f" },
        accent: { DEFAULT: "#febb02", dark: "#e5a800" },
        navy: "#003580",
        blue: { booking: "#0071c2" },
      },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] },
    },
  },
  plugins: [],
};
