<template>
  <!-- %partial%::html -->
  <FormKit
    type="form"
    submit-label="Login"
    :errors="['Sorry, our server is currently down. Please try again soon.']"
  >
    <FormKit type="email" label="Email address" />
    <FormKit type="password" label="Password" />
  </FormKit>
  <!-- %partial%::html -->
</template>
