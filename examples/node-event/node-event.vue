<template>
  <FormKit type="text" @node="setNode" />
</template>

<script setup>
const setNode = (node) => node.input('Much node!')
</script>
