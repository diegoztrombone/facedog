import { http } from '.'
import api from '@/api'

const getPosts = (page = 0) => {
  return new Promise((resolve, reject) => {
    http
      .get(api.getAllPost, { params: { page } })
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

export default { getPosts }
