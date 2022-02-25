<script setup>
import { createInput } from '@formkit/vue'

const myInput = createInput(
  {
    $el: 'input',
    attrs: {
      class: '$classes.input',
      placeholder: '$: "Hello " + $location',
    },
  },
  {
    props: ['location'],
  }
)
</script>

<template>
  <FormKit
    :type="myInput"
    label="Hello where?"
    location="Spain"
    help="We use the custom prop location in our placeholder."
  />
</template>
