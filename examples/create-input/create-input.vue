<template>
  <FormKit
    :type="myInput"
    label="Hello world example"
    help="You still cant interact with me, but im here!"
    validation="required"
    validation-behavior="live"
  />
</template>

<script setup>
// import { createInput } from '@formkit/vue'

// This live code editor cannot yet use bare imports so we extract
// createInput from the iife instead:
const { createInput } = FormKitVue

const myInput = createInput('Hello world')
</script>
