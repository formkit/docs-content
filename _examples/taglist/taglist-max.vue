<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="taglist"
      name="taglist"
      label="Taglist with max prop set to 2"
      :options="countries"
      popover
      max="2"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
