import axios from 'axios'

export const flamehazesocietyClient = axios.create({
    baseURL: 'http://localhost:2020',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials:true
})