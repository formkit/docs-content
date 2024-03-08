<script setup>
import { useFormKitContextById } from '@formkit/vue'
import { computed } from 'vue'

const formContext = useFormKitContextById('myForm')
const sum = computed(() => {
  return (formContext.value?.value.a ?? 0) + (formContext.value?.value.b ?? 0)
})
</script>

<template>
  <FormKit type="form" id="myForm">
    <div class="flex gap-4 items-center">
      <FormKit type="number" name="a" number :value="2" />
      <FormKit type="number" name="b" number :value="3" />
      <div class="whitespace-nowrap">= {{ sum }}</div>
    </div>
  </FormKit>
</template>
