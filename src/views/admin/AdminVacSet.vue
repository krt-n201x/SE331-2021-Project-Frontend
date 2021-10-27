<template>
  <div>
    <p>{{ Store.patients.name }}</p>
    <p>{{ Store.patients.surname }}</p>

    <form @submit.prevent="saveVaccine">
      <h3>Add Vaccine</h3>
      <label>Select Vaccine</label>
      <select
        :value="modelValue.name"
        v-model="vaccine.name"
        v-bind="{
          ...$attrs,
          onChange: ($vaccine) => {
            $emit('update:modelValue', $vaccine.target.value)
          }
        }"
        label="Select Vaccine"
      >
        <option value="Astraceneca">Astraceneca</option>
        <option value="Sinovac">Sinovac</option>
        <option value="Sinopharm">Sinopharm</option>
        <option value="Moderna">Moderna</option>
      </select>
      <br />
      <input type="text" placeholder="Input date ejected..." v-model="vaccine.date_injected" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import DatabaseService from '@/services/DatabaseService.js'
import Store from '@/store'
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
      vaccine: 
        {
          name: '',
          date_injected: '',
          patient: Store.patients
        }
    }
  },
  // eslint-disable-next-line no-unused-vars
  created() {
    DatabaseService.getVaccines()
      .then((response) => {
        Store.vaccines = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    saveVaccine() {
      console.log(this.vaccine)
      DatabaseService.addVac(this.vaccine)
      .then((response) => {
          console.log(response)
          this.$router.push({
            name: 'Home'
          })
        })
        .catch((error) => {
          console.log(error)
        })
      // DatabaseService.saveVac(this.vaccine, Store.patients.id)
      //   .then((response) => {
      //     console.log(response)
      //     this.$router.push({
      //       name: 'Home'
      //     })
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
    }
  }
}
</script>

<style>
</style>
