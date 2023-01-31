import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { GlobalStyle, Theme } from '@/style'
import Login from '@/components/pages/Login'
import Home from '@/components/pages/Home'
import { useAuthContext, AuthProvider } from '@/context/AuthContext'

const PrivateRoute = ({ redirect, children }) => {
  const { user } = useAuthContext()
  console.log(">>>>>>", user)
  return user ? children : <Navigate to={redirect} />
}

const Router = () => (
  <Routes>
    <Route
      element={
        <PrivateRoute redirect={'/login'}>
          <Outlet />
        </PrivateRoute>
      }
    >
      <Route path='/' element={<Home />} />
    </Route>
    <Route path='/login' element={<Login />} />
  </Routes>
)

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
