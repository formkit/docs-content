<template>
  <FormKitSchema
    :schema="schema"
    :library="library"
  />
</template>

<script setup>
import { markRaw } from 'vue'
// A custom component, typically imported from elsewhere
const CustomComponent = {
  props: ['name'],
  template: `Hello {{ name }}`
}

// Assign the custom component a library
const library = markRaw({
  MyComponent: CustomComponent
})

// Reference the key of the desired component from
// the library.
const schema = [
  {
    $cmp: 'MyComponent',
    props: {
      name: 'Jane'
    }
  }
]
</script>
