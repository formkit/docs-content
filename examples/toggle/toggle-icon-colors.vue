<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="toggle"
    thumb-icon="whatsapp"
    thumb-color-on="#4FCE5D"
    track-color-on="#435A64"
    icon-color-on="white"
  />
  <pre wrap>
    {{ value }}
  </pre>
  <!-- %partial%::html:: -->
</template>
