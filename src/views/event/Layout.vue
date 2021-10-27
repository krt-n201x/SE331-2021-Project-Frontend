<template>
  <span v-if="Store.patients" class="nav">
     <div class="p-grid" id="info">
    <div  class="p-col-3 p-md-3 p-lg-3">
    <div class="bar">
      <MegaMenu orientation="vertical" :model="items" :rendered="true" />
    </div>
      </div>
    <div class="p-col-9 p-md-9 p-lg-9">
    <div class="layout">
      <router-view :patients="Store.patients" />
    </div>
    </div>
     </div>
  </span>
</template>
<script>
export default {
  inject: ['Store'],
  data() {
    return {
      items: [
        { label: 'Details', icon: 'pi pi-fw pi-user', to: { name: 'Details' } },
        {
          label: 'Vaccine',
          icon: 'pi pi-fw pi-info-circle',
          to: { name: 'Vaccine' }
        },
        {
          label: 'DoctorComment',
          icon: 'pi pi-fw pi-user-edit',
          to: { name: 'DoctorComment' }
        }
      ]
    }
  }
}
</script>
<style scoped>
.nav {
  width: 100%;
  display: flex;
}
.bar {
  margin-top: 34px;
  padding-left: 50px;
}
.layout {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 50px;
}
#info{
  width: 85%;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
