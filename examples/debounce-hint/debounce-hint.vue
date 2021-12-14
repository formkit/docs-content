<template>
  <FormKit
    label="Username"
    validation="(500)username_exists"
    validation-behavior="live"
    :validation-rules="{ username_exists }"
    :validation-messages="{
      username_exists: 'Sorry, that username is taken try “formkit-4-life”.',
    }"
  />
</template>

<script setup>
// Lets pretend this is an expensive API call.
const username_exists = function ({ value }) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value === 'formkit-4-life'), 200)
  })
}
</script>
