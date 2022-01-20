<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="checkbox"
    label="Terms and Conditions"
    help="Do you agree to our terms of service?"
    name="terms"
    validation="accepted"
    validation-visibility="dirty"
  />
  <pre wrap>{{ value }}</pre>
  <!-- %partial%::html:: -->
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
