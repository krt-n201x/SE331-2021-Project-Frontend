<template>
    <div class="vaccine">
    <h2>Taken Vaccine Information</h2>
    <table>
  <VaccineComp v-for="vac in patients.vaccine" :key="vac.vac_id" :vac="vac" />
    </table>
    </div>
</template>

<script>
import VaccineComp from '@/components/VaccineComp.vue';

export default {
 components: { VaccineComp },
  name: "VacList",   
  props: ['patients']
}
</script>

<style scoped>
.vaccine{
    display: flex;
  flex-direction: column;
  align-items: center;
}
table{
  margin-left: 5px;
  padding: 10px;
  margin-right: 5px;
}
</style>
