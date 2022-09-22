<script setup>
import { ref } from 'vue'
const value = ref(0)
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="rating"
    min="1"
    max="10"
  />
  <pre wrap>
    {{ value }}
  </pre>
  <!-- %partial%::html:: -->
</template>
