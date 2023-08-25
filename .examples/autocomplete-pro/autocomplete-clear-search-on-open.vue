<script setup>
import countries from './countries.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="autocomplete"
      name="country"
      label="Search for a country"
      placeholder="Example: United States"
      :options="countries"
      clear-search-on-open
      value="US"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
