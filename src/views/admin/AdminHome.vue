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
          v-for="user in users"
          :key="user.id"
          :user="user"
        />
    </table>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
import DatabaseService from '@/services/DatabaseService.js'
export default {
  components: { UserCard },
  name: 'UserList',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      users: null,
      totalEvents: 0
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    DatabaseService.getUsers(9, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.users = response.data
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
    DatabaseService.getUsers(9, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.users = response.data
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
