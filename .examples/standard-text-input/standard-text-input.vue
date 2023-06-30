<script setup>
import { ref } from 'vue'
const groupValues = ref({})

const simpleText = {
  type: 'input',
  schema: [
    {
      $el: 'input',
      attrs: {
        onInput: '$handlers.DOMInput',
        value: '$_value',
      },
    },
  ],
}
</script>

<template>
  <FormKit type="group" v-model="groupValues">
    <FormKit :type="simpleText" name="simple" />
  </FormKit>
  <pre wrap>{{ groupValues }}</pre>
</template>
