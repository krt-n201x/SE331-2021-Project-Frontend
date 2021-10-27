<template>
  <div>
    <div v-if="Store.patients">
    <p>{{ Store.patients.name }}</p>
    <p>{{ Store.patients.surname }}</p>

    <form @submit.prevent="saveRolePatient">
        <h3>Add Role</h3>

        <select :value="modelValue.patient"
          v-model="rolePat.patient.user.authorities.name"
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
    <p>{{ Store.doctor.name }}</p>
    <p>{{ Store.doctor.surname }}</p>

    <form @submit.prevent="saveRoleDoc">
        <h3>Add Role</h3>

        <select :value="modelValue.user.authorities[0].name"
          v-model="roleDoc.user.authorities[0].name"
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
            doctor:{ id: Store.doctor.id , user: { authorities : {name: ''}}}
        },
      }
    }
    else {   
        return{
        rolePat: {
            patient:{ id: Store.patients.id , user: { authorities : {name: ''}}}
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
          DatabaseService.saveRoleDoc(this.roleDoc)
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
          DatabaseService.saveRolePat(this.rolePat.patient)
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
