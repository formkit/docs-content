<script setup>
import Address from './Address.vue'
</script>

<template>
  <FormKit type="form" @submit="() => false">
    <FormKit name="name" label="Name" help="Enter your name" />
    <Address />
  </FormKit>
</template>
