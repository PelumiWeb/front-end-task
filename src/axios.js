import axios from 'axios'

const instance = axios.create({
    baseURL: "https://products-interview-api.herokuapp.com/"
    // baseURL: "https://products-interview-api.herokuapp.com"
})

export default instance