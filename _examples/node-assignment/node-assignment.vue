<script setup>
import { getNode } from '@formkit/core'

function addValidation() {
  const node = getNode('ssn')
  node.props.validation = 'required|matches:/\\d{3}-\\d{2}-\\2{4}/'
}
</script>

<template>
  <FormKit
    id="ssn"
    label="Social security number"
    type="text"
    help="Initially this input has no validation"
    placeholder="XXX-XX-XXXX"
    validation-visibility="live"
  />

  <FormKit type="button" @click="addValidation">Add validation</FormKit>
</template>
