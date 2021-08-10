<template>
<div>
  <div class="patient">
    <PatientCard v-for="patient in patients" :key="patient.id" :patient="patient"/>
  

    <div class="pagination">
      <router-link
        id="back"
        :to="{ name: 'Home', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Back</router-link
      >
      <router-link
        id="next"
        :to="{ name: 'Home', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next</router-link
      >
    </div>
  </div>
</div>

</template>

<script>
import DatabaseService from "@/services/DatabaseService.js";
import PatientCard from '../components/PatientCard.vue';

export default {
  components: { PatientCard },
  name: "PatientList",
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      patients: null,
      totalEvents: 0
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    DatabaseService.getPatients(8, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.patients = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  beforeRouteUpdate(routeTo) {
    DatabaseService.getPatients(8, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.patients = response.data
        this.totalEvents = response.headers['x-total-count']
      })
      .catch((error) => {
        console.log(error)
      })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 8)
      return this.page < totalPages
    }
  }
};
</script>

<style scoped>

.patient {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#back {
  text-align: left;
}

#next {
  text-align: right;
}
</style>