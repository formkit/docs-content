<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="range"
    label="Volume"
    min="0"
    max="11"
    help="Select your volume level."
  />
  <pre wrap>{{ value }}</pre>
  <!-- %partial%::html:: -->
</template>

<script setup>
import { ref } from 'vue'
const value = ref(50)
</script>]
