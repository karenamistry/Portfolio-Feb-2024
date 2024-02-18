/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ['"Geist Mono"', "monospace"],
      },
      fontSize: {
        xs: "0.8125rem", // Override the default size
      },
    },
    plugins: [],
  },
};
