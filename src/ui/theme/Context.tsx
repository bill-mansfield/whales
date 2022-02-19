import React, { FC, useContext, useState } from 'react'
import { ThemeContext, ThemeProvider } from 'styled-components'
import themeDefault from './default'
import themeDark from './dark'
import themeLight from './default'
import { ThemeConfig } from './type'

const themeConfigs = {
  default: themeDefault,
  dark: themeDark,
  light: themeLight
}

export const useTheme = (): ThemeConfig => {
  return useContext<ThemeConfig>(ThemeContext);
}

export const ThemeWrapper: FC = ({ children }) => {
  const [theme,] = useState<ThemeConfig>(themeConfigs.default)

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
