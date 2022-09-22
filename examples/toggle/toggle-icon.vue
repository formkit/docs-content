<script setup>
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="toggle"
    thumb-icon="star"
  />
  <pre wrap>
    {{ value }}
  </pre>
  <!-- %partial%::html:: -->
</template>
