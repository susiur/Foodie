/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
        newsreader: ['Newsreader', 'serif'],
        sanchez: ['Sanchez', 'serif'],
      },
    },
  },
  plugins: [],
};

