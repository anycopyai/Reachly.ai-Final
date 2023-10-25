module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'reachly-blue': '#00184d',        'reachly-bg': '#F3F6FC', // Adding the custom background color
        


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
  plugins: [require('daisyui')],
};
