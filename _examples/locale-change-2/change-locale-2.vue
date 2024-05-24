<script setup>
import { changeLocale } from '@formkit/vue'
</script>

<template>
  <button class="border-2 px-2 py-1 mb-4" @click="changeLocale('zh')">
    Set to Chinese
  </button>
  <FormKit
    type="text"
    validation="required|length:10"
    name="username"
    validation-visibility="live"
  />
</template>
