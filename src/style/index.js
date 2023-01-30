import { createGlobalStyle } from 'styled-components'
import { createTheme } from '@mui/material'
import reset from 'styled-reset'

const Theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
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
export { GlobalStyle, Theme }
