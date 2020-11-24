module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#ff5900',
        slightblack: '#0d0d0d',
        'threefold-green': '#57be8e',
        'threefold-blue': '#1072ba',
      },
      fontFamily: {
        'barlow' : ['Barlow' , 'sans-serif'],
        'poppins' : ['Poppins' , 'sans-serif'],
        'tf-primary': ['Lato', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'tf-heading': ['Bebas Neue', 'cursive'],
      },
      zIndex: {
        'negative' : '-1',
        '-10' : '-10',
      },
     
    },

  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover'],
    },
  },
  plugins: [],
}
