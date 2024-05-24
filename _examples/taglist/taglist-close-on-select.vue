<script setup>
import countries from './countries.js'
</script>

<template>
  <FormKit
    type="form"
    #default="{ value }"
    :actions="false"
  >
    <FormKit
      type="taglist"
      name="taglist"
      label="Search for a country"
      popover
      :options="countries"
      :close-on-select="false"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

