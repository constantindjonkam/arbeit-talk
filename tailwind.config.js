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
          moon: "#374A70",
          grey: { bg: "#1A1C1E", text: "#666666", input: "#2C3032", border: "#494F52" },
        },
        light: {
          blue: "",
          moon: "#9AB3CD",
          text: "#A8A095",
          grey: { bg: "#FAFBFC" },
        },
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
