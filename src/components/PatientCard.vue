<template>
  <router-link
    class="patient-link"
    :to="{ name: 'Details', params: { id: patient.id } }"
  >
    <div class="patient-card">
      <div class="p-grid">
        <div class="p-col-5">
          <img class="photo" :src="patient.photo" />
        </div>
        <div class="p-col" id="info">
          <div id="info2">
            <h2>{{ patient.name }}</h2>
            <h3>{{ patient.surname }}</h3>
            Vaccine Status:
            <p>{{ patient.status }}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PatientCard',
  props: {
    patient: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.photo {
  width: 100%;
  padding-top: 15%;
  align-items: center;
}
.patient-card {
  background-color: rgb(255, 255, 255);
  padding: 15px;
  height: 208px;
  width: 350px;
  cursor: pointer;
  margin: 15px;
  border-radius: 5%;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
}

.patient-card:hover {
  transition: 0.25s;
  transform: scale(1.15);
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
#info:hover {
  border-radius: 5%;
  background-color: rgb(255, 255, 255);
}

#info2 {
  padding-left: 10%;
}
</style>
