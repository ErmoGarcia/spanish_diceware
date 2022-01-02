module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#265369',
          700: '#1B3B4B',
          900: '#10232D',
        },
        secondary: '#fff',
        alternative: '#ED254E'
      },
      keyframes: {
        'fade-in': {
            '0%': {
                opacity: '0',
            },
            '100%': {
                opacity: '1',
            },
        },
        'fade-out': {
          '0%': {
              opacity: '1',
          },
          '100%': {
              opacity: '0',
          },
      },
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-out',
        'fade-out': 'fade-out 1.5s ease-out',
      }
    },
  },
  plugins: [],
}
