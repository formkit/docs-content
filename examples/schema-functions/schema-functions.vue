<template>
  <FormKitSchema
    :schema="schema"
    :data="data"
  />
  <button @click="data.count++">Add To Count</button>
</template>

<script setup>
import { reactive } from 'vue'

const schema = [
  {
    $el: 'h1',
    children: [
      '$count',
      ' + 5 = ',
      '$add($count, 5)'
    ],
  }
]

const data = reactive({
  count: 3,
  add: (a, b) => a + b
})
</script>
