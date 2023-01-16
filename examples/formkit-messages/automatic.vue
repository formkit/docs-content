<script setup>
import { FormKitMessages } from '@formkit/vue'
async function submitHandler(_data, node) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  node.setErrors([
    'The server doesn’t like your name 😃. Sorry.'
  ])
}
</script>

<template>
  <FormKit type="form" @submit="submitHandler">
    <FormKitMessages /> <!-- 👀 form messages will appear here -->
    <FormKit
      type="text"
      label="Your Name"
      validation="required"
    />
    <FormKit
      type="checkbox"
      label="Top 3 headphones"
      validation-label="Headphones"
      :options="[
        'Galaxy buds',
        'Bowers & Wilkins PX8',
        'AirPods Pro',
        'AirPods Max',
        'Sony WH1000-XM4',
        'Bose 700',
      ]"
      validation="required|min:2"
    />
  </FormKit>
</template>
