<template>
  <!-- %partial%::html:: -->
  <FormKit type="group">
    <FormKit
      type="password"
      name="password"
      label="Password"
      validation="required"
      validation-visibility="live"
    />
    <FormKit
      type="password"
      name="password_confirm"
      label="Confirm password"
      validation="required|confirm"
      validation-visibility="live"
      validation-label="Confirmation"
    />
  </FormKit>
  <!-- %partial%::html:: -->
</template>
