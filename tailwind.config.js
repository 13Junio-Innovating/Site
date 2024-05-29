/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // ou 'media' ou 'class'
  theme: {
    extend: {
      margin: {
        '25': '6.25rem', // adiciona uma classe de margem personalizada m-25
        '26': '10rem',
        '27': '5.625',
      },
    },
  },
  variants: {},
  plugins: [],
};
