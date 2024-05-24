<script setup>
import Address from './Address.vue'
</script>

<template>
  <FormKit type="form">
    <FormKit name="name" label="Name" help="Enter your name" />
    <Address />
  </FormKit>
</template>
