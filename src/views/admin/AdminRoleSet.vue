<template>
  <div>
    <p>{{ Store.patients.name }}</p>
    <p>{{ Store.patients.surname }}</p>

    <form @submit.prevent="saveDoctor">
        <h3>Add Role</h3>
        <!-- <select 
        :value="modelValue"
        v-model="Store.doctors.id" 
        class="select"
        > 
            <option 
            v-for="option in Store.doctors"
            :value="option.id"
            :key="option.id"
            :selected="option.id === doctors.id"
            >
            {{ option.name }} {{ option.surname }}
            </option>
        </select> -->
        <BaseSelect
        :options="Store.doctors"
        v-model="event.doctor.id"
        label="Select Role"
      />


        <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService.js'
import BaseSelect from '@/components/BaseSelect.vue';
import Store from "@/store";
export default {
    components: { BaseSelect },
    props: {
                modelValue: {   
                    type: [String, Number, Object],
                    default: ''
                }
            },
inject: ['Store'],
  data() {
    return {
        event: {
            doctor: { id: '', name: '', surname: '', age: ''}
        },
        doc: {
            doctors: { id: '', name: '', surname: '', age: ''}
        },
        patient: Store.patients.id
    };
  },
  // eslint-disable-next-line no-unused-vars
  created() {
    DatabaseService.getAllDoctors()
      .then((response) => {
        Store.doctors = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
      saveDoctor() {
          DatabaseService.saveDtoP( this.event.doctor, Store.patients.id)
          .then((response) => {
            console.log(response)
            this.$router.push({
              name: 'Home'
            })
          })
          .catch((error) => {
            console.log(error);
        });
      }
  }


}
</script>

<style>
</style>
