<script setup>
import Styles from './styles.vue'
</script>

<!-- %partial%::html:: -->
<template>
  <h1>Carbon Sequestration Grant</h1>

  <FormKit
    type="form"
    #default="{ value }"
  >
    <h3>Contact info</h3>
    <FormKit
      type="email"
      label="*Email address"
      validation="required|email"
    />

    <h3>Organization info</h3>
    <FormKit
      type="text"
      label="*Organization name"
      validation="required|length:3"
    />

    <h3>Application</h3>
    <FormKit
      type="textarea"
      label="*How will you use the money?"
      validation="required|length:20,500"
    />

    <details>
      <summary>Form data</summary>
      <pre>{{ value }}</pre>
    </details>
  </FormKit>
  <Styles />
</template>
<!-- %partial%::html:: -->
