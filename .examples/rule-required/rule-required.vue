<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="checkbox"
    :options="['Indubitably']"
    label="Please agree to the terms and conditions of how awesome FormKit is"
    validation="required"
    :validation-messages="{
      required: 'This field is required.',
    }"
    validation-visibility="live"
  />
  <!-- %partial%::html:: -->
</template>
