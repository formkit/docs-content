<script setup>
import { ref } from 'vue'
import { customQuad, customSine } from './scaling-utils.js'

const scalingValue = ref([25, 75])
const scalingMarks = [
  {
    at: 0,
    label: '0',
  },
  {
    at: 25,
    label: '25',
  },
  {
    at: 50,
    label: '50',
  },
  {
    at: 75,
    label: '75',
  },
  {
    at: 100,
    label: '100',
  },
]
const sharedProps = {
  step: 0.01,
  marks: scalingMarks,
  markLabels: true,
  tooltipFormat: (v) =>
    `${v.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
  delay: 0,
}
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="scalingValue"
    type="slider"
    label="Scaling: Linear"
    scaling-function="linear"
    v-bind="sharedProps"
  />
  <FormKit
    v-model="scalingValue"
    type="slider"
    label="Scaling: Logarithmic"
    scaling-function="log"
    v-bind="sharedProps"
  />
  <FormKit
    v-model="scalingValue"
    type="slider"
    label="Scaling: Custom Quadratic"
    :scaling-function="customQuad"
    v-bind="sharedProps"
  />
  <FormKit
    v-model="scalingValue"
    type="slider"
    label="Scaling: Custom Sine Wave"
    :scaling-function="customSine"
    v-bind="sharedProps"
  />
  <!-- %partial%::html:: -->
</template>
