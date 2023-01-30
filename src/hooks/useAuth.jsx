import { useState } from 'react'
import {login as standardLogin} from '@/services/firebase'
const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const [loadingGoogle, setLoadingGoogle] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const login = async credentials => {
    try {
      setLoading(true)
      const { token, ...data } = await standardLogin(credentials)
      setUser(data)
      setToken(token)
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
