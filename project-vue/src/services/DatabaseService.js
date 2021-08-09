import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3004',
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