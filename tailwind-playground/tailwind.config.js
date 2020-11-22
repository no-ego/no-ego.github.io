module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#ff5900',
        slightblack: '#0d0d0d',
      },
      fontFamily: {
        'barlow' : ['Barlow' , 'sans-serif'],
        'poppins' : ['Poppins' , 'sans-serif'],
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
