<template>
  <div v-if="GStore.event">
    <div id="nav">
      <router-link :to="{ name: 'Details' }">Details</router-link>
      |
      <router-link :to="{ name: 'Vaccine' }">Vaccine</router-link>
      |
      <router-link :to="{ name: 'DoctorComment' }">DoctorComment</router-link>
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>