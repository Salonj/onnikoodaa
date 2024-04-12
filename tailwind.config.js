/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F9E082',
          200: '#06000D',
          300: '#555D75',
          400: '#CA9C76',
          500: '#0A1B3F',
          600: '#FFFFFF',
          700: '#0284c7',
          800: '#0369a1',
          900: '#075985',
        },
        secondary: {
          100: '#f7f0f0',
          200: '#f0e0e0',
          300: '#e6baba',
          400: '#d37d7d',
          500: '#f83838',
          600: '#e90e0e',
          700: '#c70202',
          800: '#a10303',
          900: '#850707',
        },
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
      }
    },
  },
}

