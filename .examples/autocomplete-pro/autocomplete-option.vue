<script setup>
import countries from './countries.js'
</script>

<template>
  <FormKit type="form" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit
      value="US"
      type="autocomplete"
      :options="countries"
      label="Search for a country"
      placeholder="Example: United States"
      selection-appearance="option"
    />
    <!-- %partial%::html:: -->
  </FormKit>
</template>
