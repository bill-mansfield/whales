import { ThemeConfig } from './type'

const colors = {
  lightGreen: '#9cffb6',
  lightRed: '#ffabab',
  lightYellow: '#faff99',
  aliceBlue: 'aliceblue',
  white: '#ffffff',
  primary: '#012F57',
  danger: '#D92241',
  info: '#00AFD9',
  disabled: '#7a7a7a',
  warning: '#FF6820',
  link: '#4c6d89', // #e2f1f8
}

const fontSizes = {
  default: '1rem',
  small: '0.625rem', // 10px
  smallx: '0.75rem', // 12px
  small2x: '0.875rem', // 14px
  normal: '1rem', // 16px
  normal1: '1.0625rem', // 17px

  medium: '1.125rem', // 18px
  mediumx: '1.25rem', // 20px
  medium2x: '1.375rem', // 22px

  large: '1.5rem', // 24px
  largex: '1.75rem', // 28px
  large2x: '1.625rem', // 26px
  large2xx: '1.8rem', // 28.8px
  large3x: '2.5rem' // 40px
}

const paddings = {
  small: '0.313rem',
  smallx: '0.625rem', //10px
  medium: '0.938rem', //15px
  large: '1.875rem', //30px
}

const margins = {
  small: '0.313rem',
  smallx: '0.625rem',
  smallxx: '0.563rem',
  medium: '0.938rem', //15px
  mediumxxx: '1.563rem', //25px
  large: '1.875rem', //30px
}

const radius = {
  small: '0.313rem',
  smallx: '0.625rem',
  medium: '0.438rem',
}

const defaultTheme: ThemeConfig = {
  colors,
  fonts: {
    primary: 'ShareTechMono',
  },
  fontSizes,
  paddings,
  margins,
  radius,
  link: {
    color: '#012F57',
  },
  header: {
    backgroundColor: '#012F57',
    height: '4.625rem',
  },
  drawer: {
    width: '300px',
  },
  navbar: {
    width: '310px',
  },
  button: {
    default: {
      backgroundColor: '#FF6820',
      fontSize: fontSizes.small2x,
      color: 'white !important',
    },
    primary: {
      backgroundColor: 'red',
      color: 'white',
    },
    disabled: {
      backgroundColor: '#c9c9c9',
      color: 'white',
    },
  },
  heading: {
    color: '#012F57',
    eyebrowColor: '#03B0D9',
  },
  table: {
    backgroundColor: '#f3f3f3',
    headerColor: '#012f57',
    color: '#4a4a4a',
  },
  select: {
    default: {
      backgroundColor: 'gray',
      color: 'white',
    },
    primary: {
      backgroundColor: 'red',
      color: 'white',
    },
  },

  // Card
  card: {
    default: {
      backgroundColor: '#FFF',
    }
  },
  cardHeader: {
    default: {
      color: '#012F57',
      backgroundColor: '#FFF',
      borderBottom: '1px solid #E2ECF2'
    },
    primary: {
      color: colors.white,
      backgroundColor: '#012F57',
      borderBottom: 'none',
      margin: 'unset',
      padding: '1rem',
    }
  },
  gridTheme: {},
  setTheme: () => null,
}

export default defaultTheme
