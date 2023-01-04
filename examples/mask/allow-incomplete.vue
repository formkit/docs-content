<template>
  <!-- %partial%::html:: -->
  <FormKit type="form" #default="{ value }">
    <FormKit
      type="mask"
      name="phone"
      mask="(###) ###-####"
      label="Phone number"
      help="Enter a phone number"
      allow-incomplete="true"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
  <!-- %partial%::html:: -->
</template>

<style>
pre[wrap] { margin-bottom: 20px !important; }
</style>
