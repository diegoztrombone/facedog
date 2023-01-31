import { http } from '.'
import api from '@/api'

const getPosts = () => {
  return new Promise((resolve, reject) => {
    http
      .get(api.getAllPost)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}
/* 
const getOneUser = ({ id }) => {
  return new Promise((resolve, reject) => {
    http
      .get(api.getOneUser, { params: { id } })
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
} */

export default { getPosts }