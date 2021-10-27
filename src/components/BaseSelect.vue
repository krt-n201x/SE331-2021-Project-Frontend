<template>
  <label v-if="label">{{ label }}</label>

  <select v-if =!vaccine
    class="field"
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value)
      }
    }"
  >
    <option
      v-for="option in options"
      :value="option.id"
      :key="option.id"
      :selected="option.id === modelValue.id"
    >
      {{ option.name }}
    </option>
  </select>

<!--  <select v-if =vaccine-->
<!--          class="field"-->
<!--          :value="modelValue"-->
<!--          v-bind="{-->
<!--      ...$attrs,-->
<!--      onChange: ($event) => {-->
<!--        $emit('update:modelValue', $event.target.value)-->
<!--      }-->
<!--    }"-->
<!--  >-->
<!--    <option value="Astraceneca" >Astraceneca</option>-->
<!--    <option value="Sinovac" >Sinovac</option>-->
<!--    <option value="Sinopharm" >Sinopharm</option>-->
<!--    <option value="Moderna" >Moderna</option>-->

<!--  </select>-->

</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number, Object],
      default: ''
    },
    options: {
      type: Array,
      required: false
    }
  }
}
</script>
