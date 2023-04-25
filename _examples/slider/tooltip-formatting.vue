<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="slider"
    label="Default Tooltip Visibility"
    :value="[60, 100]"
    :tooltip-format="
      (value, handle) => {
        return `${handle === 'min' ? 'Min' : 'Max'}: ${value}`
      }
    "
    tooltip="true"
    help="I apply custom formatting to my tooltips"
  />
  <!-- %partial%::html:: -->
</template>
