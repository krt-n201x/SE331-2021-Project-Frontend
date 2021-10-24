import apiClient from "@/services/AxiosClient.js"

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
    },
    saveComment(patient, id) {
        return apiClient.post('/comment', {
            id: id,
            doctor_comm: patient.comment,
        })
    },
}