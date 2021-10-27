<template>
  <div>
    <div class="patient">
      <h1>List of User</h1>
    </div>
    <table>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Vaccine Status</th>
        <th>Set Vaccine</th>
        <th>Set Doctor</th>
        <th>Set Role</th>
      </tr>
      <tr v-for="data in patient" :key="data.id" :data="data">
        <td>{{ data.name }}</td>
        <td>{{ data.surname }}</td>
        <td>{{ data.user.email }}</td>
        <td>{{ data.vaccine.length }} dose</td>
        <td v-if="data.vaccine.length == 2">no need</td>
        <td v-if="data.vaccine.length < 2">
          <router-link :to="{ name: 'AdminDocSet', params: { id: data.id } }">
          <Button class="p-button-raised p-button-success p-button p-component"> Click here </Button>
          </router-link>
        </td>

        <!-- <router-link
    :to="{ name: 'AddVaccine', params: { id: data.id } }"
  >   <td> Click here </td>
      </router-link> -->

        
          <td><router-link :to="{ name: 'AdminDocSet', params: { id: data.id } }">
            <Button class="p-button-raised p-button-success p-button p-component"> Click here </Button>
        </router-link></td>
      </tr>

      <tr v-for="data in doctor" :key="data.id" :data="data">
        <td>{{ data.name }}</td>
        <td>{{ data.surname }}</td>
        <td>{{ data.user.email }}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService.js'
export default {
  name: 'UserList',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      patient: null,
      doctor: null,
      user: null
    }
  },
  // eslint-disable-next-line no-unused-vars
  created() {
    DatabaseService.getAllPatients()
      .then((response) => {
        this.patient = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    DatabaseService.getAllDoctors()
      .then((response) => {
        this.doctor = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    DatabaseService.getUsers()
      .then((response) => {
        this.user = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },

  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 9)
      return this.page < totalPages
    },
    VaccineChevk() {
      return localStorage.getItem('user')
    }
  }
}
</script>

<style scoped>
td{
 height: 50px;
}
th{
  width: 1000px;
  height: 20px;
  color: rgb(216, 216, 216);
  background-color: #7f8180;
}

tr{
  background-color: #cccccc;
}
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
