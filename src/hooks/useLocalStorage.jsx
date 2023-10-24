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
      return defaultValue
    }
  })

  const setValue = newValue => {
    try {
      const valueToStore = newValue instanceof Function ? newValue(storedValue) : newValue

      if (typeof window === 'undefined') return

      setStoredValue(valueToStore)

      if (newValue === null) {
        window.localStorage.removeItem(key)
      } else {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {}
  }

  return [storedValue, setValue]
}

export default useLocalStorage
