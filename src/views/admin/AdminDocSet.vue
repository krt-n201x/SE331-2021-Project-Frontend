<template>
  <div>
      <tr>
          <td class="table"></td>
            <td>
              <div class="patient-card">
                <h1>{{ Store.patients.name }}</h1>
                <p>{{ Store.patients.surname }}</p>

                <form @submit.prevent="saveDoctor">
                  <h3>Change Doctor to</h3>
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
                    label="Select Doctor"
                  />

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
import BaseSelect from '@/components/BaseSelect.vue'
import Store from '@/store'
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
        doctor: { id: '', name: '', surname: '', age: '' }
      },
      doc: {
        doctors: { id: '', name: '', surname: '', age: '' }
      },
      patient: Store.patients.id
    }
  },
  // eslint-disable-next-line no-unused-vars
  created() {
    DatabaseService.getAllDoctors()
      .then((response) => {
        Store.doctors = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    saveDoctor() {
      DatabaseService.saveDtoP(this.event.doctor, Store.patients.id)
        .then((response) => {
          console.log(response)
          this.$router.push({
            name: 'Home'
          })
        })
        .catch((error) => {
          console.log(error)
        })
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
  height: 208px;
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
