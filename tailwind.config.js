/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "aurum-white": "#F7F8FA",
        "aurum-black": "#363636",
        "aurum-black-lighten": "#696969",
        "aurum-gray": "#B6AEAD",
        "aurum-red": "#EA8686",
        "aurum-border": "#B5AEAD",
        "aurum-tan": "#f0ead8",
        "aurum-green": "#8ea483",
        "aurum-dark-green": "#828c84",
        "aurum-orange": "#dea455",
      },
      screens: {
        xxs: "364px",
        xs: "560px",
      },
      letterSpacing: {
        "extra-wide": "0.75rem",
        "extra-large": "0.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
