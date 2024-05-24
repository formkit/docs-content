<script setup>
import { ref } from 'vue'

const extraData = {
  hair: 'gold',
  eyes: 'blue',
  weight: '215lb',
  height: '6ft 3in',
  hands: 'tiny',
  cool: false
}
</script>

<template>
  <FormKit type="form" :actions="false" #default="{ value }">
    <FormKit name="name" label="Name" />
    <FormKit type="meta" name="metaDetails" :value="extraData" />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>