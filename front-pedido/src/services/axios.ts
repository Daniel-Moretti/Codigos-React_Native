import axios from 'axios'

const API_BASE_URL = "http://172.25.32.1:8080"

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 2000
})

export default api