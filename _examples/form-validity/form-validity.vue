<script setup>
const handleSubmit = () => alert('Password reset!')
</script>

<template>
  <FormKit
    type="form"
    :actions="false"
    @submit="handleSubmit"
    #default="{ state: { valid } }"
  >
    <h2>Password reset</h2>
    <FormKit
      type="email"
      label="Email address"
      help="Enter your email address to reset your password"
      validation="required|email"
    />
    <FormKit type="submit" :disabled="!valid" />
    <pre wrap>Form validity: {{ valid }}</pre>
  </FormKit>
</template>
