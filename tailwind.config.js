/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'linear-dark': 'linear-gradient(to bottom, #161413, #2E2B11)',
      },
      colors: {
        fill: '#797979',
        yellow: '#FCF300',
        softWhite: '#F2F7F2',
        grayWhite: '#808080',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
