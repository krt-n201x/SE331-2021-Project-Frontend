<template>
<div id="flashMessage" v-if="Store.flashMessage">
    {{ Store.flashMessage }}
</div>
<div>
  <TabMenu :model="items" />
</div>
  <router-view />
</template>

<script>
export default {
  inject: ['Store'],
	data() {
		return {
			items: [
                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
                {label: 'About', icon: 'pi pi-fw pi-file', to: '/about'}
            ]
		}
	}
}
</script>

<style>

body {
  background-color: #DFEAE2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@keyframes fade {
  from {
    background: mediumaquamarine;
  }
  to {
    background: transparent;
  }
}
#flashMessage {
  animation-name: fade; 
  animation-duration: 6s;
} 

</style>
