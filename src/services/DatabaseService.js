import apiClient from '@/services/AxiosClient.js'

export default {
    getPatients(perPage, page) {
        return apiClient.get('/patients?_limit=' + perPage + '&_page=' + page)
    },
    getVaccines() {
        return apiClient.get('/vaccines')
    },
    saveVac(vaccine, id) {
        return apiClient.post('/savevac', {
            id: id,
            vaccine: vaccine,
        })
    },

    saveRoleDoc(user, id) {
        return apiClient.post('/roledoc?role=' + user + '&id=' + id)
    },
    saveRolePat(user, id) {
        return apiClient.post('/rolepat?role=' + user + '&id=' + id)
    },
    addVac(vaccine) {
        return apiClient.post('/addvac', vaccine)
    },
  getAllPatients() {
    return apiClient.get('/patients')
  },
  getAllDoctors() {
    return apiClient.get('/doctors')
  },
  getPatient(id) {
    return apiClient.get('/patients/' + id)
  },
  getUsers() {
    return apiClient.get('/admin')
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
      doctor_comm: patient.comment
    })
  },
  saveDtoP(doctor, id) {
    return apiClient.post('/savedtop', {
      id: id,
      doctor: doctor
    })
  }
}
