<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="slider"
    label="I render custom marks"
    value="37"
    :marks="[
      { value: 0, label: '0°C' },
      { value: 20, label: '20°C' },
      { value: 37, label: '37°C' },
      { value: 100, label: '100°C' },
    ]"
    :mark-labels="true"
    :snap-to-mark="true"
  />
  <!-- %partial%::html:: -->
</template>
