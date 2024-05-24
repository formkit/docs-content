<script setup>
const intervals = [
  { value: 0, step: 10 },
  { value: 100, step: 50 },
  { value: 800, step: 100 },
]
const marks = [
  { at: 0, label: '0' },
  { at: 100, label: '100' },
  { at: 800, label: '800' },
  { at: 3000, label: '3000' },
]
</script>

<template>
  <FormKit
    type="slider"
    label="Scaling: Interval"
    :value="100"
    :intervals="intervals"
    :marks="marks"
    mark-labels
    min="0"
    max="3000"
  />
</template>
