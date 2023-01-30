import { createContext, useContext } from 'react'
import { useAuth } from '@/hooks'
const initialState = {
  user: null,
  token: null,
  loading: false,
  loadingGoogle: false,
  error: null,
  login: () => null,
}
const AuthContext = createContext(initialState)

const AuthProvider = ({ children }) => {
  const auth = useAuth()
  console.log(auth)
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const useAuthContext = () => {
  return useContext(AuthContext)
}

export { useAuthContext, AuthProvider }
