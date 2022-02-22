<template>
  <FormKit type="form" @submit="submitHandler">
    <FormKit
      name="username"
      label="Username"
      help="What username would you like?"
      validation="required|length:5"
    />
  </FormKit>
</template>

<script setup>
function submitHandler(data, node) {
  if (data.username !== 'formkit4life') {
    node.setErrors(
      // Arg 1 is form-wide errors
      ['There was an error in this form'],
      // Arg 2 is field-specific errors
      {
        username: 'Sorry, that username is not available.',
      }
    )
  } else {
    alert('Great, you are registered')
  }
}
</script>
