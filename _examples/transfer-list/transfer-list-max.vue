<script setup>
import { guests } from 'guests.js'

const customFilter = (option, search) =>
  option.label.toLowerCase().startsWith(search.toLowerCase())
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
      :filter="customFilter"
      :max="2"
    />
    <pre>{{ value }}</pre>
  </FormKit>
</template>
