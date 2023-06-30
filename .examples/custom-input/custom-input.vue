<script setup>
const helloWorld = {
  type: 'input',
  schema: ['Hello world'],
}
</script>

<template>
  <FormKit :type="helloWorld" />
</template>
