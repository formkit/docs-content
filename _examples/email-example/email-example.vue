<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="email"
    label="Student email address"
    help="Please enter your student email address."
    validation="required|email|ends_with:.edu"
    validation-visibility="live"
    placeholder="vikas@school.edu"
  />
  <!-- %partial%::html:: -->
</template>
