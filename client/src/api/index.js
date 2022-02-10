import Axios from 'axios'

let baseURL = 'https://myblog-strapi.herokuapp.com'

const client = Axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json, text/plain, */*'
  }
})

export default client;





// https://myblog-strapi.herokuapp.com