<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="radio"
    label="Stuffed animal"
    :options="{
      teddy: 'Bear',
      lama: 'Lama',
      lizard: 'Lizard',
      giraffe: 'Giraffe'
    }"
    help="What is your favorite stuffed animal?"
  />
  <pre wrap>{{ value }}</pre>
  <!-- %partial%::html:: -->
</template>

<script setup>
import { ref } from 'vue'
const value = ref('lama')
</script>
