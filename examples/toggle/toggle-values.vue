<script setup>
import { ref } from 'vue'
const value = ref('inactive')
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="toggle"
    on-value="active"
    off-value="inactive"
  />
  <pre wrap>
    {{ value }}
  </pre>
  <!-- %partial%::html:: -->
</template>
