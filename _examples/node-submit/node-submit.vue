<script setup>
import { ref } from 'vue'
const myForm = ref(null)

function submitForm() {
  // retrieve the core node (several ways to do this):
  const node = myForm.value.node
  // submit the form!
  node.submit()
}

function submitHandler() {
  alert('Submitted successfully!')
}
</script>

<template>
  <FormKit ref="myForm" type="form" :actions="false" @submit="submitHandler">
    <FormKit
      type="checkbox"
      label="Computer accessories"
      decorator-icon="heart"
      validation="required|min:2"
      :options="{
        mouse: '🐭 Mouse',
        keyboard: '⌨️ Keyboard',
        monitor: '🖥 Display',
        storage: '💾 Storage',
        laptop_bag: '👝 Laptop bag',
      }"
      help="Pick some accessories you need for your job."
    />
  </FormKit>
  <p class="text-xs font-italic mb-2">
    This button is not part of the above form:
  </p>
  <!-- 👀 Look, this is not part of the form. -->
  <FormKit type="button" @click="submitForm">Submit request</FormKit>
</template>
