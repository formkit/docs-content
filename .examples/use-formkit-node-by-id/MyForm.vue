<script setup>
import { useFormKitNodeById } from '@formkit/vue'

const nodeRef = useFormKitNodeById('student_id', (node) => {
  // perform an effect when the node is available
  node.input('edu-445-1232')
})
</script>

<template>
  <FormKit type="form">
    <FormKit
      id="student_id"
      type="mask"
      mask="edu-###-####"
      name="student_id"
      validation="required"
    />
  </FormKit>
</template>
