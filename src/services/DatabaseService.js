import apiClient from '@/services/AxiosClient.js'

export default {
    getAllPatients() {
        return apiClient.get('/patients')
    },
    getAllDoctors() {
        return apiClient.get('/doctors')
    },
    getPatients(perPage, page) {
        return apiClient.get('/patients?_limit=' + perPage + '&_page=' + page)
    },
    //Added new call
    getPatient(id) {
        return apiClient.get('/patients/' + id)
    },
    getDoctor(id) {
        return apiClient.get('/doctors/' + id)
    },
    getUsers() {
        return apiClient.get('/admin')
    },
    getVaccines() {
        return apiClient.get('/vaccines')
    },
    saveDoctor(user) {
        return apiClient.post('/doctors', {
            name: user.firstname,
            surname: user.lastname
        })
    },
    saveComment(patient, id) {
        return apiClient.post('/comment', {
            id: id,
            doctor_comm: patient.comment,
        })
    },
    saveDtoP(doctor, id) {
        return apiClient.post('/savedtop', {
            id: id,
            doctor: doctor,
        })
    },
    saveVac(vaccine, id) {
        return apiClient.post('/savevac', {
            id: id,
            vaccine: vaccine,
        })
    },
    saveRoleDoc(user) {
        return apiClient.post('/roledoc', user)
    },
    saveRolePat(user) {
        return apiClient.post('/rolepat', user)
    },

}