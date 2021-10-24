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
  saveDoctor(user) {
    return apiClient.post('/doctors', {
      name: user.firstname,
      surname: user.lastname
    })
  }
}
