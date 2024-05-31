<script setup>
import { getGuests, loadGuest } from './api.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      name="vips"
      type="transferlist"
      label="Choose VIPs for the party"
      source-label="Guests"
      target-label="VIPs"
      source-empty-message="No guests found"
      target-empty-message="No VIPs selected"
      :options="getGuests"
      :option-loader="loadGuest"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
