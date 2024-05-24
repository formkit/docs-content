<script setup>
import { reactive } from 'vue'

const schema = [
  {
    $el: 'h1',
    children: [
      'Hello ',
      '$location'
    ],
    attrs: {
      class: 'text-2xl font-bold mb-4'
    }
  }
]

const data = reactive({
  location: 'World'
})

const move = () => {
  data.location = data.location === 'World' ? 'Mars' : 'World'
}
</script>

<template>
  <FormKitSchema
    :schema="schema"
    :data="data"
  />
  <FormKit type="button" @click="move">
    Change location
  </FormKit>
</template>
