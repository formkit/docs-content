<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="slider"
    label="I render custom marks"
    value="37"
    :marks="[
      { at: 0, label: '0°C' },
      { at: 20, label: '20°C' },
      { at: 37, label: '37°C' },
      { at: 100, label: '100°C' },
    ]"
    mark-labels
    snap-to-marks
  />
  <!-- %partial%::html:: -->
</template>
