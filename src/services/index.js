import axios from 'axios'
import authService from './auth'
import userService from './user'
import postService from './post'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const setAppIdHeader = appId => {
  http.defaults.headers.common['app-id'] = appId
}

export const removeAppIdHeader = () => {
  delete http.defaults.headers.common['app-id']
}

export { authService, userService, postService }
