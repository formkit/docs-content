<!-- %partial% -->
<template>
<FormKit
  type="form"
  submit-label="Login"
  @submit="login"
>
  <FormKit
    name="email"
    label="Email address"
    validation="required|email"
  />
  <FormKit
    type="password"
    name="password"
    label="Password"
    validation="required"
  />
</FormKit>
</template>

<script setup>
const login = async (formData) => {
  try {
    await axios.post('/api/login', formData)
    alert('Logged in!')
  } catch (err) {
    // Handle server errors here
  }
}
</script>
<!-- %partial% -->

<script>
// This is just a mock of an actual axios instance.
const axios = {
  post: () => new Promise(r => setTimeout(r, 2000))
}
</script>
