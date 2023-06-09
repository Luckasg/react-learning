import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const add = newPerson => {
  const request =  axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const del = (id) => {
  const request =  axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, add, del }
