<template>
  <FormKit ref="myForm" type="form" :actions="false" @submit="submitHandler">
    <FormKit
      type="checkbox"
      label="Computer accessories"
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
  <p>This button is not part of the above form:</p>
  <!-- 👀 Look ,this is not part of the form. -->
  <button @click="submitForm">Submit request</button>
</template>

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
