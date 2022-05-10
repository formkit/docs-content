<script>
export default {
  mounted() {
    this.$formkit.setErrors('register', [], {
      username: 'That username is taken.',
      password: 'Your password is too simple.',
    })
  },
}
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="form"
    id="register"
    :config="{ preserveErrors: true }"
  >
    <FormKit
      name="username"
      label="Username"
      help="Select a new username"
    />
    <FormKit
      name="password"
      label="Password"
    />
  </FormKit>
  <!-- %partial%::html:: -->
</template>
