<script setup>
const schema = [
  {
    $formkit: 'email',
    label: 'Email address',
    validation: 'required'
  }
]
</script>

<template>
  <FormKit type="form">
    <FormKitSchema :schema="schema" />
  </FormKit>
</template>
