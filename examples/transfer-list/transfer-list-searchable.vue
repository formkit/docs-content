<script setup>
import { guests } from 'guests.js'
</script>

<template>
  <FormKit
    type="form"
    #default="{ value }"
    :value="{
      vips: ['Monica Baker', 'Marion Blanchard']
    }"
    :actions="false"
  >
    <FormKit
      name="vips"
      type="transferlist"
      label="Choose VIPs for the party"
      source-label="Guests"
      target-label="VIPs"
      source-empty-message="No guests found"
      target-empty-message="No VIPs selected"
      :options="guests"
      searchable
      placeholder="Search guests"
    />
    <pre>{{ value }}</pre>
  </FormKit>
</template>
