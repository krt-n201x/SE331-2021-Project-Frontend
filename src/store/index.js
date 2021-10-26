import { reactive } from 'vue'

export default reactive({
  flashMessage: '',
  event: null,
  doctors: null,
  currentLowUser: localStorage.getItem('lowuser'),
  currentUser: JSON.parse(localStorage.getItem('user'))
})
