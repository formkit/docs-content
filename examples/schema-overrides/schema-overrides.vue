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
  <!-- %partial%::html:: -->
</template>
