import axios from 'axios'
import { http } from '.'
import api from '@/api'

const getAllUsersList = (page = 0) => {
  return new Promise((resolve, reject) => {
    http
      .get(api.getAllUsersList, { params: { page } })
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

const getMyUsersList = () => {
  return new Promise((resolve, reject) => {
    http
      .get(api.getMyUsersList)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

const getOneUser = ({ id }) => {
  return new Promise((resolve, reject) => {
    http
      .get(api.getOneUser, { params: { id } })
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

export default { getAllUsersList, getMyUsersList, getOneUser }
