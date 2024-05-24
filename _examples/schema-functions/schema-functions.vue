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
    attrs: {
      class: 'text-2xl font-bold mb-4'
    }
  }
]

const data = reactive({
  count: 3,
  add: (a, b) => a + b
})
</script>

<template>
  <FormKitSchema
    :schema="schema"
    :data="data"
  />
  <FormKit type="button" @click="data.count++">Add To Count</FormKit>
</template>
