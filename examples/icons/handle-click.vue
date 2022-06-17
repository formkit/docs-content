<script setup>
import { ref } from 'vue'
const visibilityIcon = ref('eyeClosed')
const inputType = ref('password')
const handleIconClick = () => {
  visibilityIcon.value = visibilityIcon.value === 'eye' ? 'eyeClosed' : 'eye'
  inputType.value = visibilityIcon.value === 'eye' ? 'text' : 'password'
}
</script>

<template>
  <FormKit
    :type="inputType"
    label="A fancy password input"
    value="mySecretPassword!"
    prefix-icon="password"
    :suffix-icon="visibilityIcon"
    @suffix-icon-click="handleIconClick"
  />
</template>

<style>
.formkit-suffix-icon:hover {
  color: var(--fk-color-primary);
}
</style>
