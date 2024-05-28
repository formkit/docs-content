<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="taglist"
      name="taglist"
      label="Search for a country"
      :options="countries"
      popover
      placeholder="Example: United States"
      empty-message="No countries found"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
