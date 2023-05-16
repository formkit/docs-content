<script setup>
const submitHandler = async function () {
  await new Promise((r) => setTimeout(r, 2000))
  window.location.reload()
}
</script>

<template>
  <p>
    <em><small>Enter partial data, then reload this example.</small></em>
  </p>
  <!-- %partial% -->
  <FormKit
    type="form"
    name="contact"
    use-local-storage
    @submit="submitHandler"
  >
    <FormKit type="text" name="name" label="Your name" />
    <FormKit type="text" name="email" label="Your email" />
    <FormKit type="textarea" name="message" label="Your message" />
  </FormKit>
  <!-- %partial% -->
</template>
