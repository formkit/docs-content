<script setup>
import { ref, computed } from 'vue'
const value = ref([])
const sum = computed(() => {
  return new Intl.NumberFormat('en-US')
    .format(value.value.reduce((sum, price) => Number(price) + sum, 0))
})
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="checkbox"
    label="Indian food"
    :options="[
      {
        value: 'item-2',
        label: 'Bhajji',
        help: 'Fried chickpea batter — spicy.',
      },
      {
        value: 'item-55',
        label: 'Vada Pav (out of stock)',
        help: 'Fried vegetarian dumplings.',
        attrs: { disabled: true }
      },
      {
        value: 'item-22',
        label: 'Paratha',
        help: 'Flatbread layered and pan friend.',
      },
      {
        value: 'item-44',
        label: 'Halwa',
        help: 'Pudding made with flour.',
      }
    ]"
    help="Select your favorite Indian dishes."
  />
  <!-- %partial%::html:: -->
</template>
