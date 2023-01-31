import axios from 'axios'
import auth from "./auth"

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
export {
    auth,
    http
}