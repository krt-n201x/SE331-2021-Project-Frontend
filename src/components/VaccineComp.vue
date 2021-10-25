<template>
  <td class="vac-card" v-if="vac.vac_id != 0">
    <h1>{{ vac.name }}</h1>
    <p>Date taken: {{ vac.date_injected }}</p>
  </td>
</template>

<script>
export default {
  name: 'VaccineComp',
  props: {
    vac: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.vac-card {
  background-color: rgb(255, 255, 255);
  border-radius: 5%;
  padding: 20px;
  width: 250px;
  margin: 15px;
  margin-bottom: 18px;
}

.vac-card:hover {
  transition: 0.25s;
  transform: scale(1.05);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

td {
  margin-left: 5px;
  padding: 10px;
  margin-right: 5px;
}
</style>
