<script setup>
const submitHandler = async function () {
  await new Promise((r) => setTimeout(r, 2000))
  alert(
    'Form submitted!, localStorage values have been cleared. Page will now reload.'
  )
  window.location.reload()
}
</script>

<template>
  <p><em><small>Enter partial data, then refresh the page.</small></em></p>
  <!-- %partial% -->
  <FormKit 
    type="form" 
    name="contact" 
    use-local-storage 
    @submit="submitHandler"
  >
    <FormKit type="text" label="Your name" />
    <FormKit type="email" label="Your email" />
    <FormKit type="textarea" label="Your message" />
  </FormKit>
  <!-- %partial% -->
</template>
