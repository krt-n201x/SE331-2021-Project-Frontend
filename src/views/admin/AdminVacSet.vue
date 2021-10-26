<template>
  <div>
    <p>{{ Store.patients.name }}</p>
    <p>{{ Store.patients.surname }}</p>

    <form @submit.prevent="saveVaccine">
        <h3>Add Vaccine</h3>

        <select :value="modelValue"
                v-bind="{
      ...$attrs,
      onChange: ($vaccine) => {
        $emit('update:modelValue', $vaccine.target.value)
      }
    }"
                id="vaccine[name]" name="vaccine[name]">
          <option :value="Astraceneca" >Astraceneca</option>
          <option :value="Sinovac" >Sinovac</option>
          <option :value="Sinopharm" >Sinopharm</option>
          <option :value="Moderna" >Moderna</option>
        </select>
        <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService.js'
import Store from "@/store";
export default {
    props: {
      modelValue: {
        type: [String, Number, Object],
        default: ''
      }
    },
inject: ['Store'],
  data() {
    return {
        vaccine: [{
            name:'', date_injected:''
        }],
        patient: Store.patients.id
    };
  },
  // eslint-disable-next-line no-unused-vars
  created() {
    DatabaseService.getVaccines()
      .then((response) => {
        Store.vaccines = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
      saveVaccine() {
          DatabaseService.saveVac( this.vaccine, Store.patients.id)
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
