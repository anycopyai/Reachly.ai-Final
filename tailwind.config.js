module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js', // Add this line for Preline UI
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
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Keep the DaisyUI plugin
    require('preline/plugin'), // Add the Preline plugin
  ],
};
