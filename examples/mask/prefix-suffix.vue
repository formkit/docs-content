<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="mask"
    name="years_old"
    prefix="I am "
    suffix=" years old."
    mask="##"
    mode="select"
    validation="required"
    :tokens="{
      '#': {
        selectFill: '0'
      }
    }"
    label="Age"
    help="How old are you?"
  />
  <!-- %partial%::html:: -->
</template>
