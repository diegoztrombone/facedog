import axios from 'axios'
import authService from './auth'
import userService from './user'
import postService from './post'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'app-id': import.meta.env.VITE_API_ID

  },
})


export { authService, userService, postService }
