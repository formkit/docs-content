<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="radio"
    label="Preferred transportation"
    :options="['E-Bike', 'E-Scooter', 'Electric car', 'Walking', 'Space tube']"
    help="How do you like to get around?"
  />
  <pre wrap>{{ value }}</pre>
  <!-- %partial%::html:: -->
</template>

<script setup>
import { ref } from 'vue'
const value = ref(undefined)
</script>
