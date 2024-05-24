<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="number"
    label="Kitchen renovation budget"
    help="Enter the most you'd like to spend on your kitchen renovation."
    validation="min:5000"
    :validation-messages="{
      min: 'Sorry — we only build high-end kitchens. Try Budget Builders.',
    }"
    validation-visibility="live"
    value="1000"
  />
  <!-- %partial%::html:: -->
</template>
