<script setup>
const hasNativeEyeDropper = !!(
  typeof window !== 'undefined' && window.EyeDropper
)
</script>

<template>
  <h2 v-if="!hasNativeEyeDropper">
    Your browser does not support the Eyedropper API. 😢
  </h2>

  <!-- %partial% -->
  <FormKit
    type="colorpicker"
    label="Eyedropper enabled (default, when available)"
    inline
    value="#B955CB"
  />

  <FormKit
    type="colorpicker"
    label="Eyedropper disabled"
    inline
    eye-dropper="false"
    value="#B955CB"
  />
  <!-- %partial% -->
</template>
