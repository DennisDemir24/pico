/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#0D4053",
      picoSecondary: "#ECC88C",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      bgPrimary: "#073544",
    }),
    extend: {
      backgroundImage: {
        heroPattern: "url('/static/pico-logo.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
