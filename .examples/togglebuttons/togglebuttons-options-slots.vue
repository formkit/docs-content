<script setup>
import { FormKitIcon } from '@formkit/vue'
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <!--
    FormKit forms auto-collect values of children inputs.
    Wrap the example in a form so we can display the form values.
  -->
  <FormKit
    type="form"
    #default="{ value }"
    :actions="false"
  >
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@formkit/pro@dev/genesis.min.css" />
    <!-- %partial%::html:: -->
      <FormKit
        type="togglebuttons"
        name="social_network"
        label="Preferred social network"
        :options="['Facebook', 'Twitter', 'Instagram']"
      >
        <template #default="context">
          <FormKitIcon :icon="context.option.value.toLowerCase()" />
        </template>
      </FormKit>
    <!-- %partial%::html:: -->
    <p
      v-if="value.social_network"
      v-text="`I prefer ${value.social_network}`"
    />
  </FormKit>
</template>
