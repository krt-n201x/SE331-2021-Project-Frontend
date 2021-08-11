<template>
  <div v-if="Store.patients">
    <div id="nav">
      <router-link :to="{ name: 'Details' }">Details</router-link>
      |
      <router-link :to="{ name: 'Vaccine' }">Vaccine</router-link>
      |
      <router-link :to="{ name: 'DoctorComment' }">DoctorComment</router-link>
    </div>
    <router-view :patients="Store.patients" />
  </div>
</template>
<script>
export default {
  inject: ['Store']
}
</script>
