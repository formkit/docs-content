<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="slider"
    label="I show marks on my track with labels"
    help="Labels can be enabled via prop."
    value="50"
    step="10"
    :marks="true"
    :mark-labels="true"
  />
  <!-- %partial%::html:: -->
</template>
