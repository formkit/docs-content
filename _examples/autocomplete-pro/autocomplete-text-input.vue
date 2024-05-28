<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
  <FormKit type="form" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit
      value="US"
      type="autocomplete"
      :options="countries"
      label="Search and select a country"
      placeholder="Example: United States"
      selection-appearance="text-input"
      popover
    />
    <!-- %partial%::html:: -->
  </FormKit>
</template>
