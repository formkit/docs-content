<template>
  <FormKitSchema
    :schema="schema"
    :data="data"
  />
  <button @click="move">
    Change location
  </button>
</template>

<script setup>
import { reactive } from 'vue'

const schema = [
  {
    $el: 'h1',
    children: [
      'Hello ',
      '$location'
    ]
  }
]

const data = reactive({
  location: 'World'
})

const move = () => {
  data.location = data.location === 'World' ? 'Mars' : 'World'
}
</script>
