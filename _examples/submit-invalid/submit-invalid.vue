<!-- %partial% -->
<script setup>
import { getValidationMessages } from '@formkit/validation'
import { ref } from 'vue'

const messages = ref([])

function showErrors(node) {
  const validations = getValidationMessages(node)
  messages.value = []
  validations.forEach((inputMessages) => {
    messages.value = messages.value.concat(
      inputMessages.map((message) => message.value)
    )
  })
}
</script>

<template>
  <h2 class="text-xl font-bold mb-4">Support ticket</h2>
  <FormKit type="form" @submit-invalid="showErrors">
    <ul class="validation-errors" v-if="messages.length">
      <li v-for="message in messages">{{ message }}</li>
    </ul>
    <FormKit
      name="title"
      label="Ticket title"
      help="A short sentence that describes your problem."
      validation="required"
    />
    <FormKit
      name="issue"
      type="textarea"
      label="Issue"
      help="Please describe your issue in detail."
      validation="required|length:50,500"
    />
  </FormKit>
</template>
<!-- %partial% -->

<style scoped>
.validation-errors {
  @apply p-4 mb-6 rounded bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100;
}
</style>
