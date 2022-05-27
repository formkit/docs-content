<script setup>
import { createIconPlugin, tag, magnifyingGlass } from '@formkit/icons'
</script>

<template>
  <div class="demo-container">
    <FormKit
      type="form"
      :plugins="[createIconPlugin({ tag, magnifyingGlass })]"
      :actions="false"
    >
      <!-- %partial% -->
      <FormKit
        type="text"
        icon-prefix="tag"
        icon-suffix="magnifyingGlass"
        label="What are you looking for?"
        help="You can render both prefix and suffix together"
      />
      <!-- %partial% -->
    </FormKit>
  </div>
</template>

<style>
@import 'https://assets.wearebraid.com/formkit/distro/genesis.css';
</style>
