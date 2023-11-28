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
        name="shirt_size"
        label="T-shirt Size"
        enforced
        :options="['Small', 'Medium', 'Large', 'X-Large']"
        help="Select at least one."
      />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
