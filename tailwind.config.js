/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'dark-slate-gray': 'hsl(234, 29%, 20%)',
        'charcoal-gray': 'hsl(235, 18%, 26%)',
        'gray': 'hsl(231, 7%, 60%)',
        'tomato': 'hsl(4, 100%, 67%)',
        'tomato-bright': 'hsl(349, 100%, 67%)'
      }
    }

  },
  plugins: [],
}

