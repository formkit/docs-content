<script setup>
import { onMounted } from 'vue'
import { getNode } from '@formkit/core'

onMounted(() => {
  const node = getNode('manufacturer')
  node.input('Samsung', false)
})
</script>

<template>
  <FormKit
    type="select"
    id="manufacturer"
    label="Manufacturer"
    :options="['Sony', 'Apple', 'Samsung', 'Lenovo']"
    help="Select your favorite tech manufacturer."
  />
</template>
