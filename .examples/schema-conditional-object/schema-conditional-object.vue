<script setup>
import { reactive } from 'vue'
const data = reactive({ value: 0 })
const schema = [
  {
    $el: 'h2',
    children: {
      if: '$value < 5',
      then: '$value + " is less than 5"',
      else: {
        if: '$value >= 5 && $value <= 10',
        then: '$value + " is between 5 and 10"',
        else: '$value + " is more than 10"'
      }
    },
    attrs: {
      class: 'text-xl font-bold'
    }
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
