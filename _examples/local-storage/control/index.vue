<script setup>
import { createLocalStoragePlugin } from '@formkit/addons'

const submitHandler = async function (payload, node) {
  await new Promise((r) => setTimeout(r, 2000))
  node.reset()
}
</script>

<template>
  <p>
    <em><small>Data saving is controlled by the form's checkbox.</small></em>
  </p>
  <!-- %partial% -->
  <FormKit
    type="form"
    name="contactWithControl"
    :plugins="[
      createLocalStoragePlugin({
        control: 'save',
      }),
    ]"
    use-local-storage
    @submit="submitHandler"
  >
    <FormKit
      type="checkbox"
      name="save"
      :value="true"
      label="Save my progress as I type"
    />
    <FormKit type="text" name="name" label="Your name" />
    <FormKit type="text" name="email" label="Your email" />
    <FormKit type="textarea" name="message" label="Your message" />
  </FormKit>
  <!-- %partial% -->
</template>
