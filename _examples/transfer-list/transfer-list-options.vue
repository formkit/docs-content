<script setup>
import { guests } from './guests.js'
</script>

<template>
  <FormKit
    type="transferlist"
    label="Choose VIPs for the party"
    source-label="Guests"
    target-label="VIPs"
    source-empty-message="No guests found"
    target-empty-message="No VIPs selected"
    :options="guests"
  />
</template>
