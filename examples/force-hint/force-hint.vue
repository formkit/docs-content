<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="email"
    label="Email address"
    validation="required|length:5|*email"
    validation-behavior="live"
  />
  <!-- By default, the "email" validation rule would
        not run if the "length" rule was failing. -->
  <!-- %partial%::html:: -->
</template>
