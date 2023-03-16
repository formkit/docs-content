<script setup>
function disableEvenMonths(_node, date) {
  return date.getMonth() % 2 !== 0
}
</script>

<template>
  <FormKit
    type="datepicker"
    name="pickup"
    label="Next date"
    placeholder="Select a day"
    help="Use the keyboard to advance past an entire disabled month."
    :max-scan="32"
    picker-only
    :disabled-days="disableEvenMonths"
  />
</template>
