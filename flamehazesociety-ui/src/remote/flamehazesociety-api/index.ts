import axios from 'axios'
import { fhsBaseUrl } from '../../environment'

export const flamehazesocietyClient = axios.create({
    baseURL: fhsBaseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials:true
})