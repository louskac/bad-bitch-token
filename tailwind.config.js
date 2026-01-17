import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#ff007f",
        accent: "#00f2ff",
        darkBg: "#000000",
        panelBg: "rgba(0, 0, 0, 0.8)",
      },
      fontFamily: {
        display: ["Syncopate", "sans-serif"],
        marker: ["Permanent Marker", "cursive"],
        sans: ["Inter", "sans-serif"],
      },
    }
  },
  plugins: [
    forms,
    typography,
  ],
}
