<script setup>
import { ref } from 'vue'
const value = ref(0)
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="rating"
    rating-icon="android"
    off-color="black"
    on-color="#A3C439"
  />
  <pre wrap>
    {{ value }}
  </pre>
  <!-- %partial%::html:: -->
</template>
