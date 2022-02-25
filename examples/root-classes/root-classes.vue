<script setup>
function rootClasses(sectionKey) {
  return {
    [`foo-${sectionKey}`]: true
  }
}
</script>

<template>
  <FormKit
    :config="{ rootClasses }"
  />
</template>
