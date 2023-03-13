<script setup>
import { onMounted } from 'vue'
import { setErrors } from '@formkit/core'

onMounted(() => {
  setErrors('my-form', ['This form has some errors'], {
    first_input: 'This error will clear when you type.',
    second_input: 'This error will remain even after typing.',
  })
})

function clearErrors(formData, node) {
  // This will explicitly clear all errors on the form.
  node.clearErrors()
}
</script>

<template>
  <FormKit
    id="my-form"
    type="form"
    @submit="clearErrors"
    submit-label="Submit to clear all errors"
  >
    <FormKit
      name="first_input"
      label="Auto-clearing error"
      value="Change me!"
      help="When you edit this input the error will clear"
    />
    <FormKit
      name="second_input"
      preserve-errors="true"
      label="Preserved error"
      value="Or change me!"
      help="Sometimes it is best to keep an error until a user submits the form."
    />
  </FormKit>
</template>
