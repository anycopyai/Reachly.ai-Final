module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js', // Keep this line if you are still using Preline
  ],
  theme: {
    extend: {
      colors: {
        lightgray: '#F6F6F6',
        navblue: '#0033FF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundColor: {
        'reachly-blue': '#232634',
        'reachly-bg': '#F6F6F6',
      },
      textColor: {
        'reachly-blue': '#061A6A',
      },
      borderColor: {
        'reachly-blue': '#061A6A',
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'), // Keep if you still use Preline
  ],
};
