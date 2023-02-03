import { useEffect, useState } from 'react'
import { authService, setAppIdHeader, removeAppIdHeader } from '@/services'
import { useLocalStorage } from '.'
const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const [loadingGoogle, setLoadingGoogle] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useLocalStorage('user')
  const [token, setToken] = useLocalStorage('access_token')

 /*  useEffect(() => {
    token ? setAppIdHeader(import.meta.env.VITE_API_ID) : removeAppIdHeader()
  }, [token]) */

  const login = async credentials => {
    try {
      setLoading(true)
      const { accessToken, email, displayName, phoneNumber, ...data } = await authService.login(credentials)
      setUser({ email, displayName, phoneNumber })
      setToken(accessToken)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const loginWithGoogle = async () => {
    try {
      setLoadingGoogle(true)
      const { accessToken, email, displayName, phoneNumber, ...data } = await authService.loginWithGoogle()
      setUser({ email, displayName, phoneNumber })
      setToken(accessToken)
      setLoadingGoogle(false)
    } catch (error) {
      setError(true)
      setLoadingGoogle(false)
    } finally {
      setLoadingGoogle(false)
    }
  }

  const logout = async () => {
    try {
      setToken(null)
      setUser(null)
      removeAppIdHeader()
      await authService.logout()
    } catch (error) {
      console.log('EROR LOGOUT', error)
    }
  }

  return { login, loginWithGoogle, logout, user, loading, loadingGoogle, error }
}

export default useAuth
