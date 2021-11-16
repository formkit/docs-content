<template>
  <FormKit
    v-model="value"
    type="checkbox"
    label="Trim extras"
    :options="{
      650: 'Leather seats ($650)',
      1200: 'Sweet rims ($1,200)',
      13250: 'Gold leaf ($13,250)',
      500: 'Massaging seats ($500)'
    }"
    help="Configure your car’s trim options"
  />
  <pre wrap>Extra cost: ${{ sum }}</pre>
</template>

<script setup>
import { ref, computed } from 'vue'
const value = ref([])
const sum = computed(() => {
  return new Intl.NumberFormat('en-US')
    .format(value.value.reduce((sum, price) => Number(price) + sum, 0))
})
</script>
