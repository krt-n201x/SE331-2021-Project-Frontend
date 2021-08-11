<template>
  <p>{{ patients.name }} {{ patients.surname }}</p>
</template>

<script>
export default {
  props: ['patients']
}
</script>
