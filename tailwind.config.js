module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#183446',
        secondary: '#A73942',
        alternative: '#A73942'
      }
    },
  },
  plugins: [],
}
