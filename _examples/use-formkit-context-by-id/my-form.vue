<script setup>
import { useFormKitContextById } from '@formkit/vue'
import { computed } from 'vue'

const initialValues = {
  a: 2,
  b: 3,
}

const formContext = useFormKitContextById('myForm')
const sum = computed(() => {
  const values = formContext.value?.value ?? initialValues
  return (values.a ?? 0) + (values.b ?? 0)
})
</script>

<template>
  <FormKit type="form" id="myForm" :value="initialValues">
    <div class="flex gap-4 items-center">
      <FormKit type="number" name="a" number />
      <FormKit type="number" name="b" number />
      <div class="whitespace-nowrap">= {{ sum }}</div>
    </div>
  </FormKit>
</template>
