<template>
  <FormKit
    type="select"
    label="Fruit"
    placeholder="Select a fruit"
    v-model="fruit"
    :options="['Apple', 'Peach', 'Pear']"
    :errors="errors"
  />
</template>

<script setup>
import { ref, computed } from 'vue'
const fruit = ref('')
const errors = computed(() => {
  return fruit.value ? [`Sorry, we are sold out of ${fruit.value}`] : []
})
</script>
