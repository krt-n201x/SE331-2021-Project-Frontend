<template>
<div class="FS">
  <div class="size">
<Fieldset legend="INFORMATIONS">
  <div class="p-grid">
    <Info id="info1" class="p-col-12 p-md-6 p-lg-4"> 
        <img class="photo" :src='patients.photo'>
    </Info>
    <Info id="info2" class="p-col-12 p-md-6 p-lg-8">
        <p><b>Name:</b> {{ patients.name }}</p>
        <p><b>Surname:</b> {{ patients.surname }}</p>
        <p><b>Age:</b> {{ patients.age }}</p>
        <p><b>Hometown:</b> {{ patients.hometown }}</p>
    </Info>
  </div>
</Fieldset>
  </div>
</div>
</template>


<script>
export default {
  props: ['patients'],
}
</script>

<style>
.FS{
  text-align: left;
}

.photo {
  width: 250px;
  padding-left: 25%;
}

.size{
  padding-left: 10%;
  padding-right: 10%;
}

</style>

