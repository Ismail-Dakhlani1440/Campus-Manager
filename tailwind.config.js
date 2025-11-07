/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#9A9FFF",
        primaryDark: "#373b7b",
        secondary: "#E0E1FF",
        secondaryDark: "#232438",
        accent: "#6E76FF",
        accentDark: "#23265c",
        special: "#9900FF",
        cardSmall: "#868CFF",
        cardBig: "#A1A6FF",
      },
    },
  },
  plugins: [],
};
