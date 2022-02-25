<script setup>
import { ref } from 'vue'
const value = ref([])
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="checkbox"
    label="Toppings"
    :options="['Mushrooms', 'Olives', 'Salami', 'Anchovies']"
    help="Select your pizza toppings"
    validation="required|min:3"
  />
  <pre wrap>{{ value }}</pre>
  <!-- %partial%::html:: -->
</template>
