import apiClient from '@/services/AxiosClient.js'

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
  getDoctor(id) {
    return apiClient.get('/doctors/' + id)
  },
  getDoctors(perPage, page) {
    return apiClient.get('/doctors?_limit=' + perPage + '&_page=' + page)
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
    }
}