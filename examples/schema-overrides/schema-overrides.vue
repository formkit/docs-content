<template>
  <!-- %partial%::html:: -->
  <FormKit
    label="Full name"
    help="Please provide your full name."
    :schema="{
      messages: { $el: 'div' },
      message: { $el: 'span' },
    }"
    validation="required|length:5"
    validation-behavior="live"
  />
  <!-- Remove the :schema prop to see validation
        messages revert to their default HTML. -->
  <!-- %partial%::html:: -->
</template>
