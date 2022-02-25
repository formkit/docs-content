<script setup>
import { reactive } from 'vue'
const data = reactive({ value: 0 })
const schema = [
  {
    $el: 'h2',
    if: '$value >= 5 && $value <= 10',
    children: '$value + " is between 5-10!"',
  }
]
</script>

<template>
  <FormKit
    type="number"
    v-model="data.value"
    label="Enter a number between 5-10"
  />
  <FormKitSchema
    :schema="schema"
    :data="data"
  />
</template>
