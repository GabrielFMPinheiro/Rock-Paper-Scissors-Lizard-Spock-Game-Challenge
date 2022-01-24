module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-grad-1st': '#1F3756',
        'main-grad-2nd': '#141539',
        'scissors-bg': '#EB9F0E',
        'spock-bg': '#3FB7CD',
        'paper-bg': '#4664F4',
        'lizard-bg': '#834EE3',
        'rock-bg': '#DB2E4D',
        'outline-header': 'rgba(255, 255, 255, 0.289199)',
        'score-title': '#2A45C2',
        'score': '#565468',
        'dark-blue': '#3B4262',
        'loading': 'rgba(0, 0, 0, 0.1)'
      },
      spacing: {
        '175': '43.75rem',
        '120': '29.5rem',
        '115': '28.8rem',
        '100': '25rem',
        '86': '21.56rem',
        '85': '21rem',
        '78': '20.625rem',
        '76': '19.06rem',
        '77': '19.44rem',
        '71': '17.8rem',
        '55': '13.75rem',
        '54': '13.5rem',
        '37': '9.375rem',
        '33': '8.3rem',
        '25': '6.25rem',
        '18': '4.5rem',
      },
      borderWidth: {
        '3': '3px',
      },
      fontSize: {
        '3.5xl': '2rem',
        '4.5xl': '2.5rem',
        '5.5xl': '3.5rem',
        '6.5xl': '4rem'
      },
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
      },
      gridTemplateRows: {
        'layout-mobile': '150px 40px',
        'layout-desktop': '60px 300px',
      }
    },
  },
  plugins: [],
}
