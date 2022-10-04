import axios from 'axios'

export const api = axios.create({
    // baseURL: 'http://localhost:3000/'
    baseURL: 'http://18.230.69.44:3000/'
})