<script setup>
import { FormKitMessages } from '@formkit/vue'

async function handleSubmit(_data, node) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  node.setErrors([], {
    referral: ['Invalid referral code!'],
  })
}
</script>

<template>
  <FormKit type="form" @submit="handleSubmit">
    <FormKit name="username" label="Username" />
    <fieldset>
      <legend>Referral Code</legend>
      <FormKit type="group" name="referral">
        <FormKit type="text" label="Who referred you?" />
        <FormKit
          type="password"
          name="code"
          label="Referral code"
          validation="required"
        />
        <!-- 👀 displays the group’s validation -->
        <FormKitMessages />
      </FormKit>
    </fieldset>
  </FormKit>
</template>

<style scoped>
fieldset {
  margin-bottom: 1em;
}
</style>
