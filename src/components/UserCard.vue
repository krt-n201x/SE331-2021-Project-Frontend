<template>
    <tr>
      <td>{{ patient.id }}</td>
      <td>{{ patient.name }}</td>
      <td>{{ patient.surname }}</td>
      <td>{{ patient.user.email }}</td>
    </tr>
</template>

<script>
export default {
  name: 'UserCard',
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
