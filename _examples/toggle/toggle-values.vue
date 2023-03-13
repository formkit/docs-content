<script setup>
import { ref } from 'vue'
const value = ref('inactive')
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
  <!-- %partial%::html:: -->
    <FormKit
      type="toggle"
      name="toggle"
      on-value="active"
      off-value="inactive"
    />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
