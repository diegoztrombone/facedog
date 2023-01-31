import { ThemeProvider } from '@mui/material'
import { GlobalStyle, Theme } from '@/style'
import { AuthProvider } from '@/context/AuthContext'
import Router from '@/router'

const StyleProvider = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

const ContextProvider = ({ children }) => <AuthProvider>{children}</AuthProvider>

const App = () => (
  <StyleProvider>
    <ContextProvider>
      <Router />
    </ContextProvider>
  </StyleProvider>
)

export default App
