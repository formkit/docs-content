<script setup>
import { ref } from 'vue'
const value = ref('saving-ryan')
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="radio"
    label="Best movie"
    :options="[
      { label: 'Shawshank redemption', value: 'shawshank' },
      { label: 'The Godfather', value: 'godfather' },
      { label: 'Casablanca (too old)', value: 'casablanca', attrs: { disabled: true } },
      { label: 'The Lord of the Rings', value: 'lotr' },
      { label: 'Saving Private Ryan', value: 'saving-ryan' },
    ]"
    help="What is the best movie of all time?"
  />
  <pre wrap>{{ value }}</pre>
  <!-- %partial%::html:: -->
</template>
