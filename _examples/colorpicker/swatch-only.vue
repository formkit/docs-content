<script setup>
const swatches = [
  '#000000',
  'hsla(180, 100%, 0%, 0.5)',
  'hsla(352, 98%, 41%, 1)',
  'rgb(245, 166, 35)',
  'hsl(55deg, 94%, 54.1%)',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#B955CB',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
  'hsla(220, 30%, 100%, 0.5)',
  'rgba(233,22,155,0.5)',
  'hsla(50deg,85.5%,83.7%,0.5)',
]
</script>

<template>
  <!-- %partial% -->
  <FormKit
    type="colorpicker"
    label="Swatch-only in inline mode"
    value="#CF021D"
    inline
    :options="swatches"
    panel-controls="false"
    panel-format="false"
  />

  <FormKit
    type="colorpicker"
    label="Swatch-only in pop-over mode"
    value="#B955CB"
    :options="swatches"
    panel-controls="false"
    panel-format="false"
    popover
    close-on-select
  />
  <!-- %partial% -->
</template>
