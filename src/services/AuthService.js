import apiClient from '@/services/AxiosClient.js'
import Store from '@/store'

export default {
  login(user) {
    return apiClient
      .post('/auth', {
        username: user.username,
        password: user.password
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        if (JSON.stringify(response.data.user) != null) {
          localStorage.setItem('user', JSON.stringify(response.data.user))
          Store.currentUser = response.data.user
        } else {
          localStorage.setItem('lowuser', user.username)
          Store.currentLowUser = user.username
        }
    },
    register(user) {
        return apiClient.post('/register', {
                username: user.username,
                password: user.password,
                email: user.email
            })
            
    },
    saveDoc(user) {
        return apiClient.post('/registerdoc', {
                username: user.username,
                email: user.email,
                password: user.password,
                firstname: user.firstname,
                lastname: user.lastname,
                age : user.age
            })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                GStore.currentUser = response.data.user
                return Promise.resolve(response.data)
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    },
    savePat(user) {
        return apiClient.post('/registerpat', {
                username: user.username,
                email: user.email,
                password: user.password,
                firstname: user.firstname,
                lastname: user.lastname,
                age: user.age,
                hometown: user.hometown
            })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                GStore.currentUser = response.data.user
                return Promise.resolve(response.data)
            })
            .catch((error) => {
                return Promise.reject(error)
            })
        return Promise.resolve(response.data)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('lowuser')
    Store.currentUser = null
    Store.currentLowUser = null
  },
  getUser() {
    return JSON.parse(localStorage.getItem('user'))
  },
  hasRoles(roles) {
    if (Store.currentUser && roles) {
      let containRoles = Store.currentUser.authorities.filter((authority) =>
        roles.includes(authority)
      )
      if (containRoles.length > 0) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  },
  register(user) {
    return apiClient.post('/register', {
      username: user.username,
      password: user.password,
      email: user.email
    })
  },
  saveDoc(user) {
    return apiClient
      .post('/registerdoc', {
        username: user.username,
        email: user.email,
        password: user.password,
        firstname: user.firstname,
        lastname: user.lastname,
        age: user.age
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        Store.currentUser = response.data.user
        return Promise.resolve(response.data)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  savePat(user) {
    return apiClient
      .post('/registerpat', {
        username: user.username,
        email: user.email,
        password: user.password,
        firstname: user.firstname,
        lastname: user.lastname,
        age: user.age,
        hometown: user.hometown
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        Store.currentUser = response.data.user
        return Promise.resolve(response.data)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  isDoctor() {
    return this.hasRoles('ROLE_DOCTOR')
  }
}
