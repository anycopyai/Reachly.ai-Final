// tailwind.config.js
const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js', // Keep this line for Preline UI
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Add this line for NextUI
  ],
  theme: {
    extend: {
      colors: {
        lightgray: '#F6F6F6',
        navblue: '#0033FF',
      },
      fontFamily: {
  
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
    require('daisyui'), // Keep the DaisyUI plugin
   require('@tailwindcss/forms'),
   require('preline/plugin'),
    nextui(), // Add the NextUI plugin
  ],
};
