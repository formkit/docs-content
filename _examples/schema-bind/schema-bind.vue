<script setup>
import { reactive } from 'vue'

const schema = [
  {
    $el: 'h1',
    // 👀 Look below for the data object with this
    bind: '$someAttributes',
    children: 'Click me!',
  },
]

const data = reactive({
  someAttributes: {
    class: '!text-red-500',
    onClick: () => {
      if (data.someAttributes.class === '!text-red-500') {
        data.someAttributes.class = '!text-blue-500'
      } else {
        data.someAttributes.class = '!text-red-500'
      }
    },
    'data-fruit': 'I like fruit',
  },
})
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>
