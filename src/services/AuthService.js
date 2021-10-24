import apiClient from "@/services/AxiosClient.js"
import GStore from '@/store'

export default {
    login(user) {
        return apiClient.post('/auth',{
            username: user.username,
            password: user.password
        }).then((response) => {
            localStorage.setItem('token',response.data.token)
            if(JSON.stringify(response.data.user) != null){
                localStorage.setItem('user',JSON.stringify(response.data.user))
                GStore.currentUser = response.data.user
            }
            else {
                localStorage.setItem('user',user.username)
                GStore.currentLowUser = user.username
            }
            return Promise.resolve(response.data)
        }).catch((error) => {
            return Promise.reject(error)
        })

        },
    logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('lowuser')
        GStore.currentUser = null
        GStore.currentLowUser = null

    },
    getUser(){
        return JSON.parse(localStorage.getItem('user'))
    },
    hasRoles(roles) {
        if (GStore.currentUser && roles) {
            let containRoles = GStore.currentUser.authorities.filter((authority) => roles.includes(authority))
            if (containRoles.length > 0) {
                return true
            } else {
                return false
            }
        }
        else{
            return false
        }
    },
    register(user){
        return apiClient.post('/register',{
            username: user.username,
            password: user.password,
            email: user.email
        })
        // let formData = new FormData()
        // formData.append('user', user)
        // return apiClient.post('/register', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
    }
}
