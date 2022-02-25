<script setup>
const randomColor = (e) => {
  const hex = Math
    .floor(Math.random()*16777215)
    .toString(16)
  e.target.setAttribute(
    'style',
    'background-color: #' + hex
  )
}
</script>

<template>
  <!-- You can use the label prop -->
  <FormKit
    type="submit"
    label="Checkout my label"
    help="You can use the label prop."
  />

  <!-- Or the default slot -->
  <FormKit
    type="submit"
    help="You can use the default slot."
  >
    Checkout my slot
  </FormKit>

  <!-- You can also bind event listeners -->
  <FormKit
    type="submit"
    help="You can bind event listeners."
    @click="randomColor"
  >
    Click me!
  </FormKit>
</template>
