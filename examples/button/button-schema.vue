<script setup>
const schema = [
  /* %partial% */
  {
    $formkit: 'button',
    label: 'Checkout my label',
    help: 'You can use the help prop.'
  }
  /* %partial% */
]
</script>

<template>
  <FormKitSchema :schema="schema" />
</template>
