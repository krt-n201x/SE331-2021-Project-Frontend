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
      </tr>
      
      <tr v-for="(data,) in patient" :key="data.id" :data="data">
      <td>{{ data.name }}</td>
      <td>{{ data.surname }}</td>
      <td>{{ data.user.email}}</td>
      </tr>

      <tr v-for="(data) in doctor" :key="data.id" :data="data">
      <td>{{ data.name }}</td>
      <td>{{ data.surname }}</td>
      <td>{{ data.user.email }}</td>
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
      user : null
    };
  },

  // eslint-disable-next-line no-unused-vars
  created() {
    DatabaseService.getAllPatients()
      .then((response) => {
        this.patient = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    DatabaseService.getAllDoctors()
      .then((response) => {
        this.doctor = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    DatabaseService.getUsers()
      .then((response) => {
        this.user = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
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
