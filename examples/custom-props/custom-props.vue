<template>
  <FormKit :type="hello" location="Mars" />
</template>

<script setup>
// This is our input definition:
const hello = {
  type: 'input',
  // Look! A new prop is born:
  props: ['location'],
  // We can use the prop directly in our schema:
  schema: [
    {
      $el: 'h1',
      children: ['Hello ', '$location'],
    },
  ],
}
</script>
