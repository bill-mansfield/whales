import { DefaultTheme } from 'styled-components'

export interface ThemeConfig extends DefaultTheme {
  colors: {
    white: string,
    primary: string,
    info: string,
    danger: string,
    disabled: string,
    warning: string,
    link: string,
  },
  fonts: {
    primary: string,
  }
  fontSizes: {
    default: string,
    small: string,
    smallx: string,
    small2x: string,
    normal: string,

    medium: string,
    mediumx: string,
    medium2x: string,

    large: string,
    largex: string,
    large2x: string,
    large2xx: string,
    large3x: string,
  },
  paddings: {
    small: string,
    smallx: string,
    medium: string,
    large: string,
  },
  margins: {
    small: string,
    smallx: string,
    smallxx: string,
    medium: string,
    mediumxxx: string,
    large: string,
  },
  radius: {
    small: string,
    smallx: string,
    medium: string,
  },
  link: {
    color: string,
  },
  header: {
    backgroundColor: string,
    height: string,
  },
  drawer: {
    width: string,
  },
  navbar: {
    width: string,
  },
  button: {
    default: {
      backgroundColor: string,
      fontSize: string,
      color: string,
    },
    primary: {
      backgroundColor: string,
      color: string,
    },
    disabled: {
      backgroundColor: string,
      color: string,
    },
  },
  heading: {
    color: string,
    eyebrowColor: string,
  },
  table: {
    backgroundColor: string,
    headerColor: string,
    color: string,
  },
  select: {
    default: {
      backgroundColor: string,
      color: string,
    },
    primary: {
      backgroundColor: string,
      color: string,
    },
  },

  // Card
  card: {
    default: {
      backgroundColor: string,
    }
  },
  cardHeader: {
    default: {
      color: string,
      backgroundColor: string,
      borderBottom: string,
    },
    primary: {
      color: string,
      backgroundColor: string,
      borderBottom: string,
      margin: string,
      padding: string,
    }
  },
  gridTheme: unknown,
  setTheme: (theme: string) => void
}
