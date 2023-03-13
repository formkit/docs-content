<script setup>
import { reactive } from 'vue'

const schema = [
  {
    $el: 'h1',
    children: '$orchard.tree.fruit'
  }
]
const data = reactive({
  orchard: {
    tree: {
      fruit: 'apple'
    }
  }
})
</script>

<template>
  <FormKitSchema
    :schema="schema"
    :data="data"
  />
</template>
