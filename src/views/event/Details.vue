<template>
  <div class="FS">
    <div class="size">
      <Fieldset legend="INFORMATIONS">
        <div class="p-grid">
          <Info id="info1" class="p-col-12 p-md-6 p-lg-4">
            <img class="photo" src="https://www.img.in.th/images/dc98e9082e4cbf327401cc1a2c04ab2d.png" />
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
  props: ['patients']
}
</script>

<style>
.FS {
  height: 80%;
  width: 100%;
  text-align: left;
}

.photo {
  width: 200px;
  padding-left: 15%;
}

.size {
  padding-left: 5%;
  padding-right: 8%;
}
</style>
