<script setup>
import { createInput } from '@formkit/vue'

const myInput = createInput('Hello world')
</script>

<template>
  <FormKit
    :type="myInput"
    label="Hello world example"
    help="You still cant interact with me, but im here!"
    validation="required"
    validation-visibility="live"
  />
</template>
