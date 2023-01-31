import { createGlobalStyle } from 'styled-components'
import { createTheme } from '@mui/material'
import reset from 'styled-reset'

const palette = {
  primary: '#1d1d1d',
  secondary: '#fbf7f4',
  light: '#ffffff',
  gray: '#7a7877',
  success: '#55CE55',
  warning: '#EDC25E',
  error: '#E23645',
}

const Theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: palette.primary,
      contrastText: palette.light,
    },
    secondary: {
      main: palette.secondary,
      contrastText: palette.light,
    },
    primary: {
      main: palette.primary,
      contrastText: palette.light,
    },
  },
})

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        font-family: 'Lato', sans-serif;
    }

    h1 {
        font-size: 2rem;
        font-weight: bold;
    }
`
export { GlobalStyle, Theme, palette }
