const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Yu Gothic"', ...defaultTheme.fontFamily.sans],
    },
    //Google FontsにはYu Gothic medium/Yu Gothic/YuGothicは含まれないのでいれるかどうかは検討
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 600,
      extrabold: 700,
    },
    colors: {
      primary: {
        50: '#F5FAFA',
        100: '#E0F1F1',
        200: '#C8E7E7',
        500: '#82BDBD',
        600: '#4BAEAE',
        700: '#199898',
        800: '#007979',
        900: '#004747',
      },
      pink: {
        50: '#FCF8FA',
        600: '#CC8DAD',
        700: '#BF7098',
        800: '#AD487B',
      },
      gray: {
        50: '#F9F9F9',
        100: '#ECEEEE',
        700: '#808B8B',
        800: '#616F6F',
        900: '#344242',
      },
      orange: '#F2994A',
      yellow: {
        50: '#F2C94C',
        100: '#F7A60F',
      },
      black: '#344242',
      white: '#FFFFFF',
    },
    fontSize: {
      '2xs': '0.625rem',
      xs: '0.875rem',
      sm: '1rem',
      base: '1.5rem',
      lg: '1.875rem',
      llg: '2rem',
      xl: '2.25rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    extend: {},
  },
  plugins: [],
};
