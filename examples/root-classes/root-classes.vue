<template>
  <FormKit
    :config="{ rootClasses }"
  />
</template>

<script setup>
function rootClasses(compositionKey) {
  return {
    [`foo-${compositionKey}`]: true
  }
}
</script>
