/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      height: {
        "50vh": "50vh",
        "100vh": "100vh",
      },

      width: {
        "100vw": "100vw",
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
