<script setup>
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <!--
    FormKit forms auto-collect values of children inputs.
    Wrap the example in a form so we can display the form values.
  -->
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit
      type="currency"
      name="currency"
      value="12345678.90"
    />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
