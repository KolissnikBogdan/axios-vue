import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.VUE_APP_HOST,
})

api.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)
