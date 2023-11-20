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
      backgroundColor: {
        'reachly-blue': '#00184d',
        'reachly-bg': '#F3F6FC',
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
    require('preline/plugin'), // Keep the Preline plugin
    nextui(), // Add the NextUI plugin
  ],
};
