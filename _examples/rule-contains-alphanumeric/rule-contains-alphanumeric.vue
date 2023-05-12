<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="text"
    label="Enter your desired username"
    value="$!@#"
    validation="contains_alphanumeric"
    validation-label="username"
    validation-visibility="live"
  />
  <!-- %partial%::html:: -->
</template>
