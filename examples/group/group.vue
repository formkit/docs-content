<template>
  <FormKit
    type="group"
    v-model="address"
  >
    <FormKit
      type="text"
      label="Street address"
      name="street"
      help="What is your street address"
      validation="required"
    />
  </FormKit>
  <pre wrap>{{ address }}</pre>
</template>

<script setup>
import { ref } from 'vue'
const address = ref({})
</script>
