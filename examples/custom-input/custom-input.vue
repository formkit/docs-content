<template>
  <FormKit :type="helloWorld" />
</template>

<script setup>
const helloWorld = {
  type: 'input',
  schema: ['Hello world'],
}
</script>
