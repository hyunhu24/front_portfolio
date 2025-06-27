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
  plugins: [
    // function({ addUtilities }) {
    //   const newUtilities = {
    //     '.flex-col-between': {
    //       'display': 'flex',
    //       'flex-direction': 'column',
    //       'justify-content': 'space-between',
    //     },
    //     '.flex-center': {
    //       'display': 'flex',
    //       'align-items': 'center',
    //       'justify-content': 'center',
    //     },
    //     '.flex-between': {
    //       'display': 'flex',
    //       'align-items': 'center',
    //       'justify-content': 'space-between',
    //     },
    //     '.absolute-center': {
    //       'position': 'absolute',
    //       'top': '50%',
    //       'left': '50%',
    //       'transform': 'translate(-50%, -50%)',
    //     },
    //     '.card-shadow': {
    //       'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    //       'transition': 'box-shadow 0.3s ease',
    //     },
    //     '.card-shadow:hover': {
    //       'box-shadow': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    //     },
    //   }
    //   addUtilities(newUtilities)
    // }
  ],
}

