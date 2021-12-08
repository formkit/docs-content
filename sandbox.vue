<template>
  <!-- This editor is using Vue3.
  Multiple root nodes are supported -->
  <FormKit
    type="text"
    label="FormKit Input"
    help="edit me to get started"
  />
</template>

<script>
// You can use the options or composition APIs for your component,
// Including `<script setup>` syntax. Imports are unsupported.
export default {}
</script>

<script type="formkit-config">
// this script tag is special magic for the FormKit example editor.
// A FormKit config object placed here will be applied to your demo.
{}
</script>

<script type="tailwind-config">
// this script tag is special magic for the FormKit example editor.
// A Tailwind config object placed here will be applied to your demo.
// This only applies if your CSS Framework selection is Tailwind.
{}
</script>

<style>
/*
vanilla CSS can go here. If you are using
Tailwind you can also use @apply rules.
*/
</style>
