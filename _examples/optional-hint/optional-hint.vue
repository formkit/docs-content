<script setup>
const submit = async () => {
  await new Promise((r) => setTimeout(r, 1000))
  alert('Password changed!')
}
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit type="form" @submit="submit">
    <h2>Change password</h2>
    <FormKit
      type="password"
      name="password"
      label="Password"
      validation="required|?length:10"
      :validation-messages="{
        length: 'Try to make your password longer!',
      }"
    />
    <FormKit
      type="password"
      label="Confirm password"
      name="password_confirm"
      validation="required|confirm"
    />
  </FormKit>
  <!-- %partial%::html:: -->
</template>
