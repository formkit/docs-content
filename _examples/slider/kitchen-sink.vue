<script setup>
const chartData = Array(100)
  .fill(0)
  .map((_, i) => ({
    at: i * 20,
    value: Math.random() * 100 + i * 2,
  }))
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="slider"
    label="Choose your price range"
    :value="[800, 1200]"
    :tooltip-format="(v) => `$${v}`"
    :tooltip="true"
    :min="0"
    :max="2000"
    :show-input="true"
    :step="25"
    :input-attrs="{
      floatingLabel: true,
      prefixIcon: 'dollar',
    }"
    :min-input-attrs="{
      label: 'Minimum',
    }"
    :max-input-attrs="{
      label: 'Maximum',
    }"
    :marks="[
      { at: 0, label: '$0' },
      { at: 500, label: '$500' },
      { at: 1000, label: '$1000' },
      { at: 1500, label: '$1500' },
      { at: 2000, label: '$2000' },
    ]"
    :mark-labels="true"
    :chart="chartData"
  />
  <!-- %partial%::html:: -->
</template>
