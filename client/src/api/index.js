import Axios from 'axios'

let baseURL = 'http://localhost:1337'

const client = Axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json, text/plain, */*'
  }
})

export default client;





// https://myblog-strapi.herokuapp.com