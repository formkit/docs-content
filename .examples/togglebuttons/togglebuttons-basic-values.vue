<script setup>
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <!--
    FormKit forms auto-collect values of children inputs.
    Wrap the example in a form so we can display the form values.
  -->
  <FormKit
    type="form"
    #default="{ value }"
    :actions="false"
  >
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@formkit/pro@dev/genesis.min.css" />
    <!-- %partial%::html:: -->
      <FormKit
        type="togglebuttons"
        name="airplane_mode"
        label="Airplane mode"
        on-value="active"
        off-value="inactive"
      />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
