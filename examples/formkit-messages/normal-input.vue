<script setup>
import { ref } from 'vue'
import { FormKitMessages } from '@formkit/vue'
const input = ref()
</script>

<template>
  <div class="flex">
    <FormKit
      type="text"
      ref="input"
      validation="required|length:4"
      validation-visibility="live"
      label="Dinosaur name"
      placeholder="Stegosaurus"
    />
    <!-- 👀 messages will be rendered here instead -->
    <FormKitMessages :node="input?.node" />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 1rem;
}
</style>
