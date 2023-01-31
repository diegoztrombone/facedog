import { useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultValue
    }
    try {
      const value = window.localStorage.getItem(key)
      return value ? JSON.parse(value) : defaultValue
    } catch (error) {
      console.log(error)
      return defaultValue
    }
  })

  const setValue = newValue => {
    try {
      if (newValue === null) {
        return window.localStorage.removeItem(key)
      }

      const valueToStore = newValue instanceof Function ? newValue(storedValue) : newValue

      setStoredValue(valueToStore)

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
