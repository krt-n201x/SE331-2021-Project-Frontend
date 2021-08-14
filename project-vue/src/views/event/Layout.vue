<template>
  <span v-if="Store.patients" class="nav">
    <!-- <div class="nav"> -->
    <MegaMenu orientation= "vertical" :model="items" :rendered="true"/>
   <!-- </div> -->
    <router-view :patients="Store.patients" />
  </span>
</template>
<script>
export default {
  inject: ['Store'],
  data() {
		return {
			items: [
                {label: 'Details', icon: 'pi pi-fw pi-user', to: {name: 'Details'}},
                {label: 'Vaccine', icon: 'pi pi-fw pi-info-circle', to: {name: 'Vaccine'}},
                {label: 'DoctorComment', icon: 'pi pi-fw pi-user-edit', to: {name: 'DoctorComment'}},
            ]
		}
	}
}
</script>
<style scoped>
  .nav{
    height: 400px;
    width : 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 50px;
  }
</style>