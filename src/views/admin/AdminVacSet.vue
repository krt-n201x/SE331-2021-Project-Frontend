<template>
  <div>
    <tr>
          <td class="table"></td>
            <td>
              <div class="patient-card">
    <h1>{{ Store.patients.name }}</h1>
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
          </td>
          <td class="table"></td>
      </tr>
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
<style scoped>
.center {
  width: 300px;
  align-items: center;
}
.table {
  width:50%;
  padding-top: 15%;
  align-items: center;
}
.patient-card {
  background-color: rgb(255, 255, 255);
  padding: 15px;
  height: 300px;
  width: 400px;
  cursor: pointer;
  margin: 15px;
  border-radius: 5%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.patient-card:hover {
  transition: 0.25s;
  background-color: rgb(230, 228, 228);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.patient-link {
  color: #2c3e50;
  text-decoration: none;
}
#info {
  border-radius: 5%;
  background-color: rgb(248, 248, 248);
}

#info2 {
  padding-left: 10%;
}
</style>
