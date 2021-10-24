<template>
  <router-link
    class="patient-link"
    :to="{ name: 'Registerpat' }"
  >
    <div class="patient-card">
      <div class="p-grid">
        <div class="p-col-10">
        <img class="photo" src= "https://sv1.picz.in.th/images/2021/10/24/uU8ZWt.png" />
        </div>
        
        <div class="p-col-10">
        <div id="info2">
          <h2>Patient</h2> 
        </div>
        </div>
      </div>
    </div>
</router-link>
<router-link
    class="patient-link"
    :to="{ name: 'Registerdoc' }"
  >
    <div class="patient-card">
      <div class="p-grid">
        <div class="p-col-10">
        <img class="photo" src= "https://sv1.picz.in.th/images/2021/10/24/uU8fL8.png" />
        </div>
        
        <div class="p-col-10">
        <div id="info2">
          <h2>Doctor</h2> 
        </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>

</script>

<style scoped>
.photo {
  width: 250px;
  padding-top: 10% ;
  padding-left: 15% ;
  align-items: center;
}
.patient-card {
  background-color: rgb(255, 255, 255);
  padding: 15px;
  height: 350px;
  width: 350px;
  cursor: pointer;
  margin: 15px;
  border-radius: 5%;
  text-align: center;
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
