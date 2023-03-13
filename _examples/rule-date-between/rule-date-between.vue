<script setup>
const date = new Date()
const month = date.getMonth() + 1
const day = date.getDate()
const year = date.getFullYear()
const addYear = month > 6 ? 1 : month === 6 ? (day > 21 ? 1 : 0) : 0
const summerStart = new Date(`${year + addYear}-6-21`)
const summerEnd = new Date(`${year + addYear}-9-22`)
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="date"
    label="Departure date"
    help="Select a date next summer"
    :validation="[['date_between', summerStart, summerEnd]]"
    validation-visibility="live"
  />
  <!-- %partial%::html:: -->
</template>
