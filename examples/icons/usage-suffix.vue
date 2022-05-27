<script setup>
import { createIconPlugin, magnifyingGlass } from '@formkit/icons'
</script>

<template>
  <div class="demo-container">
    <FormKit
      type="form"
      :plugins="[createIconPlugin({ magnifyingGlass })]"
      :actions="false"
    >
      <!-- %partial% -->
      <FormKit
        type="text"
        icon-suffix="magnifyingGlass"
        label="What are you looking for?"
        help="Icons can also be rendered in the suffix section"
      />
      <!-- %partial% -->
    </FormKit>
  </div>
</template>

<style>
@import 'https://assets.wearebraid.com/formkit/distro/genesis.css';
</style>
