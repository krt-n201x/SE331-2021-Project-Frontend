<template>
  <div>
    <p>{{ Store.patients.name }}</p>
    <p>{{ Store.patients.surname }}</p>
    
      <tr v-for="(data) in doctor" :key="data.id" :data="data">
      <td>{{ data.name }}</td>
      <td>{{ data.surname }}</td>
      <td>{{ data.user.email }}</td>
      </tr>

      <form @submit.prevent="saveDoctor">
        <h3>Change Doctor to</h3>
        <BaseSelect
        :options="data"
        v-model="data.id"
        label="Select an Organizer"
        />
        
    </form>
  </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService.js'
export default {
inject: ['Store'],
  data() {
    return {
      doctor: null
    };
  },
  // eslint-disable-next-line no-unused-vars
  created() {
    DatabaseService.getAllDoctors()
      .then((response) => {
        this.doctor = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style>
</style>
