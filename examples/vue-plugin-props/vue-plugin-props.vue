<template>
  <!-- %partial%::html:: -->
  <!--
    👀 The validation prop is not set here but both
    inputs are receiving the validation prop from the plugin.
   -->
  <FormKit
    label="Username"
    validation-visibility="live"
  />
  <FormKit
    type="password"
    label="Password"
    validation-visibility="live"
  />
  <!-- %partial%::html:: -->
</template>
