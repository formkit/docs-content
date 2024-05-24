<script setup>
const randomColor = (e) => {
  const hex = Math
    .floor(Math.random()*16777215)
    .toString(16)
  e.target.setAttribute(
    'style',
    'background-color: #' + hex + '88;'
  )
}
</script>

<template>
  <FormKit
    type="button"
    help="You can bind event listeners."
    @click="randomColor"
  >
    Click me!
  </FormKit>
</template>
