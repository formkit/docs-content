<script setup>
import { ref } from 'vue'
const values = ref(['allergies'])
</script>

<template>
  <FormKit
    v-model="values"
    type="select"
    multiple
    label="Serious medical conditions"
    name="medical_conditions"
    :options="[
      { label: 'Outie belly button', value: 'outie' },
      { label: 'Large feet', value: 'lg-feet' },
      { label: 'Neck beard', value: 'neard' },
      { label: 'Tiny hands', value: 'trump-hands' },
    ]"
    help="Select all that apply by holding command (macOS) or control (PC)."
  />
  <pre wrap>{{ values }}</pre>
</template>
