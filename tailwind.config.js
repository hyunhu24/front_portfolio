/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans: ['Noto Sans KR', 'sans-serif'],
        skranji: ['Skranji', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: '#FFF9F4',
        },
        primarygreen: {
          light: '#73C087',
          DEFAULT: '#52A668',
        },
        primaryyellow: {
          light: '#FBD462',
          DEFAULT: '#F6C33B',
        },
        primaryred: {
          light: '#EF9F8B',
          DEFAULT: '#F1605A',
        },
        primaryblue: {
          light: '#8BB0EF',
          DEFAULT: '#6493E7',
       },
       white: {
        light: '#FEFAF2',
        DEFAULT: '#FFFFFF',
       },
       black: {
        light: '#797979',
        DEFAULT: '#000000',
       },
       
      },
    },
  },
  plugins: [],
}

