<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="form"
    @submit="() => false"
    submit-label="Login"
    :errors="['Our server is not working.', 'But we don’t like you anyway!']"
  >
    <FormKit type="email" label="Email address" />
    <FormKit type="password" label="Password" />
  </FormKit>
  <!-- %partial%::html:: -->
</template>
