import axios from 'axios'

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAllPatients() {
        return apiClient.get('/patients')
    },
    getPatients(perPage, page) {
        return apiClient.get('/patients?_limit=' + perPage + '&_page=' + page)
    },
    //Added new call
    getPatient(id) {
        return apiClient.get('/patients/' + id)
    }
}