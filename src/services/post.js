import { http } from '.'
import api from '@/api'

const getPosts = (page = 0) => {
  console.log("ENTRA")
  return new Promise((resolve, reject) => {
    http
      .get(api.getAllPost, { params: { page }})
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
