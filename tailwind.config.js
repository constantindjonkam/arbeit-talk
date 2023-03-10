/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3661FF",
        secondary: "",
        dark: {
          blue: "#060620",
        },
        light: {},
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
