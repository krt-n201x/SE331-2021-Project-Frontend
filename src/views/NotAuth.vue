<template>
  <div>
    <h1>Oopsie Daisy!</h1>
    <h3>You are not authorized to watch this page</h3>
    <router-link :to="{ name: 'Login' }">Login</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>
