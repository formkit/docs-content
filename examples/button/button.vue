<template>
<!-- You can use the default slot -->
<FormKit
  type="button"
  help="You can use the default slot"
>
  Checkout my slot
</FormKit>

<!-- You can use the default slot -->
<FormKit
  type="button"
  label="Checkout my label"
  help="You can use the label prop"
/>

<!-- You can use the default slot -->
<FormKit
  type="button"
  help="You can bind event listeners"
  @click="randomColor"
>
  Click me!
</FormKit>
</template>

<script setup>
const randomColor = (e) => {
  const hex = Math.floor(Math.random()*16777215).toString(16)
  e.target.setAttribute(
    'style',
    'background-color: #' + hex
  )
}
</script>
