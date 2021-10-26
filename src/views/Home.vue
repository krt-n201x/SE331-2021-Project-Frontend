<template>
  <div>
    <div class="patient">
      <div v-if="isAdmin">
        <h1>Patient List</h1>
        <div class="p-grid">
          <PatientCard
            class="p-col-12 p-md-6 p-lg-4"
            v-for="patient in patients"
            :key="patient.id"
            :patient="patient"
          />
        </div>
      </div>
      <div v-if="isDoctor">
        <div class="p-grid">
          <PatientCard
            class="p-col-12 p-md-6 p-lg-4"
            v-for="patient in Store.currentUser.patient"
            :key="patient.id"
            :patient="patient"
          />
        </div>
      </div>

      <div v-if="isUser">
        <h1>Welcome! user {{ Store.currentUser.name }}</h1>
        <router-link
          :to="{ name: 'Details', params: { id: Store.currentUser.id } }"
          >Click here to view your profile</router-link
        >
      </div>
    </div>

    <div class="pagination">
      <div id="back">
        <Button
          class="p-button-raised p-button-success p-button p-component"
          v-if="page != 1"
        >
          <router-link
            :to="{ name: 'Home', query: { page: page - 1 } }"
            rel="prev"
          >
            Back
          </router-link>
        </Button>
      </div>

      <div id="next">
        <Button
          class="p-button-raised p-button-success p-button p-component"
          v-if="hasNextPage"
        >
          <router-link
            :to="{ name: 'Home', query: { page: page + 1 } }"
            rel="next"
          >
            Next
          </router-link>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService.js'
import PatientCard from '../components/PatientCard.vue'
import AuthService from '@/services/AuthService'

export default {
  inject: ['Store'],
  components: { PatientCard },
  name: 'PatientList',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      patients: null,
      totalEvents: 0
    }
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    DatabaseService.getPatients(9, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.patients = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch((error) => {
        if (error.response.status === 401) {
          next({ name: '401Resource' })
        } else next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    DatabaseService.getPatients(9, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.patients = response.data
        this.totalEvents = response.headers['x-total-count']
        next()
      })
      .catch((error) => {
        if (error.response.status === 401) {
          next({ name: '401Resource' })
        } else next({ name: 'NetworkError' })
      })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 9)
      return this.page < totalPages
    },
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    },
    isDoctor() {
      return AuthService.hasRoles('ROLE_DOCTOR')
    },
    isUser() {
      return AuthService.hasRoles('ROLE_USER')
    }
  }
}
</script>

<style scoped>
.patient {
  margin: 5%;
  margin-top: 0%;
  flex-direction: column;
  align-items: center;
}
.pagination {
  margin: 5%;
}
.pagination a {
  text-decoration: none;
  color: #ffffff;
}

#back {
  text-align: left;
}

#next {
  text-align: right;
}
</style>
