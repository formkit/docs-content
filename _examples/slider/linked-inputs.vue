<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="slider"
    value="33"
    label="A single slider with a visible input"
    help="I have a single linked input"
    show-input
  />

  <FormKit
    type="slider"
    :value="[33, 66]"
    label="A slider with multiple inputs"
    show-input
  />
  <!-- %partial%::html:: -->
</template>
