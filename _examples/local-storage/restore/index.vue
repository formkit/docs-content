<script setup>
const failingSubmitHandler = async function (payload, node) {
  // assume a failing request
  await new Promise((r) => setTimeout(r, 1000))
  node.setErrors(['Something went wrong with the server, please try again'])
  // comment out this line and refresh after submit
  // to see how values would otherwise be lost.
  node.restoreCache()
}
</script>

<template>
  <p>
    <em><small>Data can be recovered with node.restoreCache()<br>If you reload after submit the data will persist.</small></em>
  </p>
  <FormKit
    type="form"
    name="contactWithRestore"
    use-local-storage
    @submit="failingSubmitHandler"
  >
    <FormKit type="text" name="name" label="Your name" />
    <FormKit type="text" name="email" label="Your email" />
    <FormKit type="textarea" name="message" label="Your message" />
  </FormKit>
</template>
