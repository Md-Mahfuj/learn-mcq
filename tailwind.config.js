const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      // gray: '#3A3A3A',
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      orange: colors.orange,
      blue: colors.blueGray,
      green: {
        50: "#E7F7F5",
        100: "#C4ECE6",
        200: "#9DDFD6",
        300: "#76D2C6",
        400: "#58C9B9",
        500: "#3BBFAD",
        600: "#35B9A6",
        700: "#2DB19C",
        800: "#26A993",
        900: "#199B83",
        A100: "#D1FFF6",
        A200: "#9EFFEC",
        A400: "#6BFFE1",
        A900: "#52FFDC"
      },
      },
      screens: {
        'sm': '640px',
        'md': '760px',
        'lg': '1024px'
        },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'montserrat': ['Montserrat'],
       },
      extend: {
        backgroundImage: theme => ({
         'hero': "url('/src/assets/hero.svg')",
         'action': "url('/src/assets/action.png')",
        })
      },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [],
}
