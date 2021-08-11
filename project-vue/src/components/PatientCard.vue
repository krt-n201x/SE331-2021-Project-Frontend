<template>
  <!-- <router-link
    class="patient-link"
    :to="{ name: 'PatientDetails', params: { id: patient.id } }"
  > -->
    <div class="patient-card">
      <h1>{{ patient.name }} {{patient.surname}}</h1>
    </div>
</template>

<script>
export default {
  name: "PatientCard",
  props: {
    patient: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.patient-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.patient-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.patient-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
