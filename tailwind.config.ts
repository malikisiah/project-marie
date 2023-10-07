/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#ffd60a",
              100: "#352c00",
              200: "#6a5800",
              300: "#9f8500",
              400: "#d4b100",
              500: "#ffd60a",
              600: "#ffde3b",
              700: "#ffe76c",
              800: "#ffef9d",
              900: "#fff7ce",
            },
            secondary: {
              DEFAULT: "#c86bfa",
              100: "#2e0245",
              200: "#5b058a",
              300: "#8907cf",
              400: "#ae26f7",
              500: "#c86bfa",
              600: "#d389fb",
              700: "#dea6fc",
              800: "#e9c4fd",
              900: "#f4e1fe",
            },
          },
        },
      },
    }),
  ],
};
