<template>
  <div class="patient">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <PatientCard v-for="patient in patients" :key="patient.id" :patient="patient"/>
      <!-- {{ patient.name }} {{ patient.surname }} -->
    </div>
</template>

<script>
// @ is an alias to /src
import DatabaseService from "@/services/DatabaseService.js";
import PatientCard from '../components/PatientCard.vue';

export default {
  components: { PatientCard },
  name: "PatientList",
  data(){
    return {
      patients: null,
    }
  },
  created(){
    DatabaseService.getAllPatients()
      .then((response) => {
        this.patients = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
};
</script>
