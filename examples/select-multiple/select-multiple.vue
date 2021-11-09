<template>
  <FormKit
    v-model="values"
    type="select"
    multiple
    label="Serious medical conditions"
    name="country"
    :options="[
      { label: 'Allergies', value: 'allergies' },
      { label: 'Large feet', value: 'lg-feet' },
      { label: 'Overweight', value: 'overweight' },
      { label: 'Tiny hands', value: 'trump-hands' },
    ]"
    help="Please select any serious medical conditions that apply."
  />
  <pre>{{ values }}</pre>
</template>

<script setup>
import { ref } from 'vue'
const values = ref(['allergies'])
</script>
