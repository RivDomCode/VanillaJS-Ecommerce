module.exports = {
  purge: ["./*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'greyBg': '#EBEBED',
      'white': '#FFFFFF',
      'greenCard': '#27AE60',
      'black': '#33353B',
      'grey': "#bebec4",
      'red': 'tomato'
    },
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'push': ['Pushter', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
