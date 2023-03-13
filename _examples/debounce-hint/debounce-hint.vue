<script setup>
// Let's pretend this is an expensive API call.
const username_exists = function ({ value }) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value === 'formkit-4-life'), 200)
  })
}
</script>

<template>
  <FormKit
    label="Username"
    validation="(500)username_exists"
    validation-visibility="live"
    :validation-rules="{ username_exists }"
    :validation-messages="{
      username_exists: 'Sorry, that username is taken. Try “formkit-4-life”.',
    }"
  />
</template>
