<template>
  <div>
    <div class="patient">
      <h1>List of User</h1>
    </div>
    <table>
      <tr>
        <th>User ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
      </tr>
      
      <UserCard
          class="p-col-12 p-md-6 p-lg-4"
          v-for="patient in patients"
          :key="patient.id"
          :patient="patient"
        />
    </table>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
import DatabaseService from '@/services/DatabaseService.js'
export default {
  components: { UserCard},
  name: 'UserList',
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
