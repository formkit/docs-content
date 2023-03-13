<template>
  <!-- %partial%::html:: -->
  <FormKit type="form" #default="{ value }">
    <FormKit
      type="mask"
      name="phone"
      mask="(###) ###-####"
      label="Phone number"
      help="Enter a full phone number. See the value has no string literals."
      unmask-value="true"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
  <!-- %partial%::html:: -->
</template>


<style>
pre[wrap] { margin-bottom: 20px !important; }
</style>
