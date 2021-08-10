import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Vaccine from '@/views/event/Vaccine.vue'
import DoctorComment from '@/views/event/DoctorComment.vue'
import Details from '@/views/event/Details.vue'
import EventLayout from '@/views/event/Layout.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
