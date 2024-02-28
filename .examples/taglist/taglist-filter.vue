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
      :value="['AX', 'AL']"
      :filter="(option, search) =>
        option.label.toLowerCase().startsWith(search.toLowerCase())"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

