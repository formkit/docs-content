<script setup>
const setNode = (node) => node.input('Much node!')
</script>

<template>
  <FormKit type="text" @node="setNode" />
</template>
