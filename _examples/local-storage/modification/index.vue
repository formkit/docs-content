<script setup>
import { createLocalStoragePlugin } from '@formkit/addons'
const submitHandler = async function (payload, node) { await new Promise((r) => setTimeout(r, 2000)); node.reset() }

async function beforeSave (value) {
  // fake delay for mock API call
  await new Promise((r) => setTimeout(r, 500))
  return btoa(JSON.stringify(value))
}
async function beforeLoad (value) {
  // fake delay for mock API call
  // note that form is disabled until this is resolved
  await new Promise((r) => setTimeout(r, 1000))
  return JSON.parse(atob(value))
}
</script>

<template>
  <p><em><small>If you check localStorage you will see that saved form data is base64 encoded.</small></em></p>
  <FormKit
    type="form"
    name="contactWithModification"
    :plugins="[
      createLocalStoragePlugin({
        beforeSave,
        beforeLoad
      }),
    ]"
    use-local-storage
    @submit="submitHandler"
  >
    <FormKit type="text" name="name" label="Your name" />
    <FormKit type="text" name="email" label="Your email" />
    <FormKit type="textarea" name="message" label="Your message" />
  </FormKit>
</template>
