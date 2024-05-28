<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
  <div>
    <FormKit
      label="No placeholder"
      :options="countries"
      type="dropdown"
      popover
      placeholder="Select a country"
    />
    <FormKit
      label="Placeholder"
      :options="countries"
      type="dropdown"
      popover
      placeholder="Select a country"
    />
    <FormKit
      label="Placeholder with non-falsy value"
      :options="countries"
      type="dropdown"
      popover
      placeholder="Select a country"
      value="US"
    />
  </div>
</template>
