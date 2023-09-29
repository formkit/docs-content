<script setup>
const swatches = [
  // supports flat strings
  // in hex format
  '#79B2D6',
  // or HSLA
  'hsla(240, 75%, 35%, 0.75)',
  // or RGBA
  'rgba(240, 75, 35, 0.75)',
  // and also supports label/value pairs
  // where the label will render as a title
  // attribute which shows on mouse hover.
  {
    label: 'Really Red!',
    value: '#DE1B1B',
  },
]
</script>

<template>
  <FormKit type="colorpicker" inline :options="swatches" />
</template>
