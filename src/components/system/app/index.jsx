import { ThemeProvider } from '@mui/material'
import { GlobalStyle, Theme } from '@/style'
import { AuthProvider } from '@/context/AuthContext'
import Router from '@/router'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchInterval: 1000 * 60 * 5,
      cacheTime: 1000 * 5,
      retry: 3,
    },
  },
})

const StyleProvider = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

const ReactQueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

const compose = providers =>
  providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ))

const ComposeProviders = compose([BrowserRouter, ReactQueryProvider, AuthProvider, StyleProvider])

const App = () => (
  <ComposeProviders>
    <Router />
  </ComposeProviders>
)

export default App
