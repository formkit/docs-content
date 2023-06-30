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

  for (const [start, end] of unavailableDates) {
    if (date >= start && date <= end) return true
  }
  return false
}
</script>

<template>
  <h3>Bike rental (fetch from API)</h3>
  <FormKit
    type="datepicker"
    name="pickup"
    label="Pickup date."
    placeholder="Select a pickup date"
    help="Select what day you want to pickup your bike"
    :min-date="new Date()"
    :max-date="new Date(new Date().setDate(new Date().getDate() + 90))"
    :disabled-days="disabledDays"
    picker-only
  >
    <template #day="{ classes, day, fns, minDate, maxDate }">
      <div :class="classes.day">
        {{ day.getDate()}}
        <div v-if="fns.isDisabled(day) && day > minDate && day < maxDate" class="disabled-indicator"></div>
      </div>
    </template>
  </FormKit>
</template>

<style scoped>
.formkit-day {
  position: relative;
}
.disabled-indicator {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: red;
  position:absolute;
  bottom: 3px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
