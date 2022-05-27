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
        icon="magnifyingGlass"
        label="What are you looking for?"
        help="By default, I render my icon in the prefix section"
      />
      <!-- %partial% -->
    </FormKit>
  </div>
</template>

<style>
@import 'https://assets.wearebraid.com/formkit/distro/genesis.css';
</style>
