<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="slider"
    label="Default Tooltip Visibility"
    value="25"
    help="I show my tooltip on hover and drag"
  />
  <FormKit
    type="slider"
    label="Force Show Tooltip"
    value="50"
    :tooltip="true"
    help="I always show my tooltip"
  />
  <FormKit
    type="slider"
    label="Force Hide Tooltip"
    value="75"
    :tooltip="false"
    help="I never show my tooltip. I'm basically a native range input"
  />
  <!-- %partial%::html:: -->
</template>
