<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="mask"
    mode="select"
    name="year"
    mask="####"
    label="What year were you born?"
    help="You must be at least 21 to enter this site."
    :tokens="{
      '#': {
        selectFill: '0',
      },
    }"
    :validation="`required|max:${new Date().getFullYear() - 21}|min:${
      new Date().getFullYear() - 120
    }`"
    validation-label="Birth year"
    validation-visibility="live"
    :validation-messages="{
      min: 'Alright gramps, you\'re too old for this site.',
    }"
  />
  <!-- %partial%::html:: -->
</template>
