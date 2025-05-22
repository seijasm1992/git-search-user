/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#141D2F',
        'blue-light': '#1E2A47',
        blueLight: '#1E2A47',
      },
      fontFamily: {
        SpaceMono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        custom: '0 16px 30px -10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
