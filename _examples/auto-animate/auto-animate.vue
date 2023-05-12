<script setup>
import { ref } from 'vue'
const submitApp = async (formData, node) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  node.setErrors(['This is an example form-level error.'])
}
const fruit = ref(null)
</script>

<template>
  <!-- %partial% -->
  <FormKit type="form" @submit="submitApp">
    <FormKit type="repeater">
      <FormKit
        label="username"
        type="text"
        value="hello"
        validation="required|length:6"
        validation-visibility="live"
      />
      <FormKit
        label="Email"
        type="email"
        value="invalid@foo."
        validation="required|email"
        validation-visibility="live"
        help="Change me to see animations"
      />
    </FormKit>

    <FormKit
      v-model="fruit"
      label="Select a fruit"
      help="Conditional fields at the root form level will also be animated"
      type="radio"
      name="fruit"
      placeholder="Select the best country"
      :options="['None', 'Apple', 'Strawberry', 'Banana']"
      :sections-schema="{
        // custom override of AutoAniate config settings
        // just for this input
        outer: {
          meta: {
            autoAnimate: {
              duration: 2000,
            },
          },
        },
      }"
    />
    <FormKit
      v-if="fruit && fruit !== 'None'"
      type="checkbox"
      validation="required|accepted"
      validation-label="Confirmation"
      :label="`Please confirm that you meant to select ${fruit}.`"
    />
  </FormKit>
  <!-- %partial% -->
</template>
