<script setup>
import { ref } from 'vue'
const list = ref([
  'john@formkit.com',
  'sasha@formkit.com',
  'andrew@formkit.com'
])
</script>

<template>
  <FormKit
    v-model="list"
    type="list"
  >
    <p class="text-base mb-4">Please provide a list of emails.</p>
    <FormKit
      label="Email address"
      validation="required|email"
    />
    <FormKit
      label="Email address"
      validation="required|email"
    />
    <FormKit
      label="Email address"
      validation="required|email"
    />
  </FormKit>
  <pre wrap>{{ list }}</pre>
</template>
