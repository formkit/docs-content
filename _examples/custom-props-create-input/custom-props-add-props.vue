<script setup>
import { createInput } from '@formkit/vue'

function useLocation(node) {
  node.addProps({
    location: {
      default: 'World',
    },
  })
}

const myInput = createInput(
  {
    $el: 'input',
    attrs: {
      class: '$classes.input',
      placeholder: '$: "Hello " + $location',
    },
  },
  {
    family: ['text'], // inherit theme classes from text family
    features: [useLocation],
  }
)
</script>

<template>
  <FormKit
    :type="myInput"
    label="Hello where?"
    location="Andromeda"
    help="We used a feature with node.addProps() to add a location"
  />
</template>
