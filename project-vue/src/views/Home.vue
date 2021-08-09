<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div v-for="patient in patients" :key="patient.id" :patient="patient">
      {{ patient.name }} {{ patient.surname }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DatabaseService from "@/services/DatabaseService.js";

export default {
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
