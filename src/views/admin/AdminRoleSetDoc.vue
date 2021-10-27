<template>
  <div>
    
                            <div v-if="Store.patients">


                            <p>{{ Store.patients.name }}</p>
                            <p>{{ Store.patients.surname }}</p>

                            <form @submit.prevent="saveRolePatient">
                                <h3>Add Role</h3>

                                <select :value="modelValue.patient"
                                  v-model="rolePat"
                                        v-bind="{
                                      ...$attrs,
                                onChange: ($rolePat) => {
                                $emit('update:modelValue', $rolePat.target.value)
                                  }
                                }"
                              >
                                  <option value="ROLE_USER" >Patient</option>
                                  <option value="ROLE_DOCTOR" >Doctor</option>
                                  <option value="ROLE_ADMIN" >Admin</option>
                                </select>
                                <button type="submit">Submit</button>
                            </form>
                
                            </div>


                            <div v-if="Store.doctor">
                              <div>
      <tr>
          <td class="table"></td>
            <td>
              <div class="patient-card">
                            <h1>{{ Store.doctor.name }}</h1>
                            <p>{{ Store.doctor.surname }}</p>

                            <form @submit.prevent="saveRoleDoc">
                                <h3>Add Role</h3>

                                <select :value="modelValue.doctor"
                                  v-model="roleDoc"
                                        v-bind="{
                                      ...$attrs,
                                onChange: ($roleDoc) => {
                                $emit('update:modelValue', $roleDoc.target.value)
                                  }
                                }"
                              >
                                  <option value="ROLE_USER" >Patient</option>
                                  <option value="ROLE_DOCTOR" >Doctor</option>
                                  <option value="ROLE_ADMIN" >Admin</option>
                                </select>
                                <button type="submit">Submit</button>
                            </form>
</div>
          </td>
          <td class="table"></td>
      </tr>
  </div>  
                            
                            </div>

            
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
    if(Store.doctor){
      return {
        roleDoc: {
            name: ''
        },
      }
    }
    else {   
        return{
        rolePat: {
            name: ''
        },
        } 
    }
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
      saveRoleDoc() {
          DatabaseService.saveRoleDoc(this.roleDoc, Store.doctor.id)
          .then((response) => {
            console.log(response)
            this.$router.push({
              name: 'Home'
            })
          })
          .catch((error) => {
            console.log(error);
        });
      },
      saveRolePatient() {
        console.log(this.rolePat)
          DatabaseService.saveRolePat(this.rolePat, Store.patients.id)
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

