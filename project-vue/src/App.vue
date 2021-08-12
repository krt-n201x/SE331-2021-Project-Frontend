<template>
<div id="flashMessage" v-if="Store.flashMessage">
    {{ Store.flashMessage }}
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  inject: ['Store']
}
</script>

<style>
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
