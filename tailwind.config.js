/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1440px',
        'chefContain': '1189px',
        'xs': '576px',
        'mdd': '992px',
        'mdd': '992px',
      },
      spacing: {
        p_container: "70px",
        container: "1300px"
      },
      colors: {
        black_1: "#191919",
        red_1: "#F54748",
        yellow_1: "#FDC55E",
        linear_1: "#FFC26B",
        linear_2: "#FF8D8E",
      },
      fontFamily: {
        'sans': ['"Sofia Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

