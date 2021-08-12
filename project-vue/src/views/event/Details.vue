<template>
<div>
  <p>{{ patients.name }} {{ patients.surname }}</p>
</div>
</template>

<script>
export default {
  props: ['patients'],
}
</script>
