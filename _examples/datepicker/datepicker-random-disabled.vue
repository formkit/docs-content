<script setup>
import { ref } from 'vue'
const loading = ref(true)
let unavailableDates = []
fetch('https://api-formkit-docs-examples.formkit.workers.dev/blocked-dates')
  .then((res) => res.json())
  .then((data) => {
    unavailableDates = data.map(([a, b]) => [new Date(a), new Date(b)])
    loading.value = false
  })
  .catch((err) => console.error(err))

function disabledDays(node, date) {
  // Re-implement min-date and max-date
  if (node.props.minDate && date < node.props.minDate) return true
  if (node.props.maxDate && date > node.props.maxDate) return true
  // If the date is a weekend, disable it.
  for (const [start, end] of unavailableDates) {
    if (date >= start && date <= end) return true
  }
  return false
}
</script>

<template>
  <FormKit
    type="datepicker"
    name="pickup"
    label="Next available workday"
    placeholder="Select a workday"
    picker-only
    :min-date="new Date()"
    :max-date="new Date(new Date().setDate(new Date().getDate() + 90))"
    :disabled-days="disabledDays"
  />
</template>
