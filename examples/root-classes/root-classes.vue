<template>
  <FormKit
    :config="{ rootClasses }"
  />
</template>

<script setup>
function rootClasses(sectionKey) {
  return {
    [`foo-${sectionKey}`]: true
  }
}
</script>
