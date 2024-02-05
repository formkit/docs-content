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
    label="Taglist with max prop set to 2"
    :options="countries"
    popover
    max="2"
  />
  </FormKit>
</template>

