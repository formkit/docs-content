<script setup>
function disabledDays(node, date) {
  // Re-implement min-date and max-date
  if (node.props.minDate && date < node.props.minDate) return true
  if (node.props.maxDate && date > node.props.maxDate) return true

  // If the date is a weekend, disable it.
  return date.getDay() === 0 || date.getDay() === 6
}
</script>

<template>
  <FormKit
    type="datepicker"
    name="pickup"
    label="Next available workday"
    placeholder="Select a workday"
    picker-only
    popover
    min-date="2023-01-01"
    max-date="2025-01-01"
    :disabled-days="disabledDays"
  />
</template>
