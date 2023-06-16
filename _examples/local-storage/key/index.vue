<script setup>
import { ref } from 'vue'
import { createLocalStoragePlugin } from '@formkit/addons'

const submitHandler = async function (payload, node) {
  await new Promise((r) => setTimeout(r, 2000))
  node.reset()
}

async function handleChange() {
  window.location.reload()
}

const user = ref(1)
</script>

<template>
  <FormKit
    type="form"
    name="multiUserDemo"
    use-local-storage
    :plugins="[createLocalStoragePlugin({ debounce: 0 })]"
    :actions="false"
  >
    <p>Switch between mock users of our app:</p>
    <FormKit
      type="select"
      v-model="user"
      name="user"
      :options="[
        { label: 'Dave', value: 1 },
        { label: 'Amanda', value: 2 },
        { label: 'Larry', value: 3 },
      ]"
      @change="handleChange"
    />
  </FormKit>
  <hr />
  <div :key="user">
    <p>
      <em><small>Data in localStorage is keyed to each user ID</small></em>
    </p>
    <!-- %partial% -->
    <FormKit
      type="form"
      name="contactWithKey"
      :plugins="[
        createLocalStoragePlugin({
          key: user,
        }),
      ]"
      use-local-storage
      @submit="submitHandler"
    >
      <FormKit type="text" name="name" label="Your name" />
      <FormKit type="text" name="email" label="Your email" />
      <FormKit type="textarea" name="message" label="Your message" />
    </FormKit>
    <!-- %partial% -->
  </div>
</template>
