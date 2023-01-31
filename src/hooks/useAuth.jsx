import { useState } from 'react'
import {login as standardLogin} from '@/services/firebase'
import { useLocalStorage } from '.'
const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const [loadingGoogle, setLoadingGoogle] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useLocalStorage('user')
  const [token, setToken] = useLocalStorage('access_token')

  const login = async credentials => {
    try {
      setLoading(true)
      const { accessToken, email, displayName, phoneNumber, ...data } = await standardLogin(credentials)
      setUser({email, displayName, phoneNumber})
      setToken(accessToken)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return { login, user, token, loading, loadingGoogle, error }
}

export default useAuth
