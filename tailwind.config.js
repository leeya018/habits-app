/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./libs/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: "#D9D9D9",
      green: "#40cea8",
      gray_dark: "#6A7268",
      blue: "#18A0FB",
      blue_dark: "#2b12ce",
      white: "#FFFFFF",
      black: "#00000",
      red: "#db2727",
      yellow: "#e8ef23",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
