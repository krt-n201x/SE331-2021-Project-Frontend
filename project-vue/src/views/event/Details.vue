<template>
<div>
  <p>{{ patients.name }} {{ patients.surname }}</p>

  <button @click="editinfo"> Edit </button>
</div>
</template>

<script>
export default {
  props: ['patients'],
  inject: ['Store'],
  methods: {
    editinfo() {
      this.Store.flashMessage =
        'You are seccessfully edited info of ' + this.patients.name
      setTimeout(() => {
        this.Store.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'Home',
        params: { id: this.patients.id }
      })
    }
  }
}
</script>
