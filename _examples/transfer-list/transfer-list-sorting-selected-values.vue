<script setup>
import { guests } from 'guests.js'

const primaryVip = (node) => {
  return node.value[0] === 'Lulu Cabrera'
}
</script>

<template>
  <FormKit
    type="transferlist"
    name="vips"
    label="Choose VIPs for the party"
    source-label="Guests"
    target-label="VIPs"
    searchable
    placeholder="Search for a guest"
    :options="guests"
    :value="['Monica Baker', 'Marion Blanchard', 'Bilal Cline', 'Lulu Cabrera']"
    validation-visibility="live"
    :validation-rules="{ primaryVip }"
    validation="primaryVip"
    :validation-messages="{
      primaryVip: 'Lulu Cabrera is first in line for this party.'
    }"
  />
</template>
