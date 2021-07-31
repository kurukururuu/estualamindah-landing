module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red-main': '#ad2a27',
        'orange-main': '#F18C06',
        'divider-color': '#cc9955'
      },
      screens: {
        mobile: { max: '767px' },
        desktop: { min: '768px' },
        xs: { max: '374px' },
        sm: { min: '375px', max: '767px' },
        md: { min: '768px', max: '1024px' },
        lg: { min: '1025px', max: '1439px' },
        xl: { min: '1440px' }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
