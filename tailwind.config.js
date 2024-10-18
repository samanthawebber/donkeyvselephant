module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    fontFamily: {
      dinot: ['DIN OT', ],
    },
    colors: {
      'sugarcane': '#fbfbf8',
      'red': '#B31942',
      'red-pale': '#fbdfe7',
      'blue': '#0A3161',
      'blue-pale': '#cbe0fa',
      'black': '#000000',
      'white': '#ffffff',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
