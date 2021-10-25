import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Registration.vue'
import Vaccine from '@/views/event/Vaccine.vue'
import DoctorComment from '@/views/event/DoctorComment.vue'
import Details from '@/views/event/Details.vue'
import EventLayout from '@/views/event/Layout.vue'
import NotFound from '../views/NotFound.vue'
import NetWorkError from '@/views/NetworkError.vue'
import Registerpat from '@/views/register/RegisterPat.vue'
import Registerdoc from '@/views/register/RegisterDoc.vue'
import DatabaseService from '../services/DatabaseService.js'
import Store from '@/store'
import NProgress from 'nprogress'
import Login from '@/views/LoginForm.vue'
import NotAuth from '@/views/NotAuth.vue'
import Information from '@/views/patmenu.vue'
import AdminHome from '@/views/admin/AdminHome.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/patmenu/:id',
    name: 'Information',
    props: true,
    component: Information,
    beforeEnter: (to) => {
      return DatabaseService.getPatient(to.params.id)
          .then((response) => {
            Store.patients = response.data
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              return {
                name: '404Resource',
                params: { resource: 'patient' }
              }
            } else if (error.response && error.response.status == 401) {
              return {
                name: '401Resource'
              }
            } else {
              return { name: 'NetworkError' }
            }
          })
    },
    children: [
      {
        path: '',
        name: 'Details',
        component: Details
      },
      // {
      //   path: 'doctorcomment',
      //   name: 'DoctorComment',
      //   props: true,
      //   component: DoctorComment
      // },
      {
        path: 'vaccine',
        name: 'Vaccine',
        props: true,
        component: Vaccine
      }
    ]
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    beforeEnter: (to) => {
      return DatabaseService.getPatient(to.params.id)
        .then((response) => {
          Store.patients = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              name: '404Resource',
              params: { resource: 'patient' }
            }
          } else if (error.response && error.response.status == 401) {
            return {
              name: '401Resource'
            }
          } else {
            return { name: 'NetworkError' }
          }
        })
    },
    children: [
      {
        path: '',
        name: 'Details',
        component: Details
      },
      {
        path: 'doctorcomment',
        name: 'DoctorComment',
        props: true,
        component: DoctorComment
      },
      {
        path: 'vaccine',
        name: 'Vaccine',
        props: true,
        component: Vaccine
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404/:',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/401',
    name: '401Resource',
    component: NotAuth,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkError
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/registerpat',
    name: 'Registerpat',
    component: Registerpat
  },
  {
    path: '/registerdoc',
    name: 'Registerdoc',
    component: Registerdoc
  },
  {
    path: '/adminhome',
    name: 'AdminHome',
    component: AdminHome,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
