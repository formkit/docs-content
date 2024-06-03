<script setup>
import Address from './address.vue'
</script>

<template>
  <FormKit type="form" @submit="() => false">
    <FormKit name="name" label="Name" help="Enter your name" />
    <Address />
  </FormKit>
</template>
