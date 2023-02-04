/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-primary":"rgba(17, 17, 17, 0.1)",
        "btn-index": "rgb(125, 0, 254)",
        "light-white": "rgba(0, 0, 0, 0.2)",
      }
    },
  },
  plugins: [],
};
