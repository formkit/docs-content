<template>
  <!-- %partial%::html:: -->
  <h2 class="text-xl font-bold mb-4">Account</h2>
  <FormKit
    label="Your name"
    type="text"
    help="This input is not in the group, so it does not get classes applied"
  />
  <FormKit
    type="group"
    :config="{
      classes: {
        label: 'super-red',
      },
    }"
  >
    <FormKit label="Street address" type="text" />
    <FormKit label="City" type="text" />
  </FormKit>
  <!-- %partial%::html:: -->
</template>

<style>
.super-red {
  color: red !important;
}
</style>
