<script setup>
import { FormKitIcon } from '@formkit/vue'
</script>

<template>
  <!-- %partial%:html -->
  <FormKit
    label="I'm using FontAwesome icons"
    prefix-icon="atom"
    suffix-icon="lightbulb"
  />
  <FormKit
    type="select"
    label="Custom loaders work with all icon props"
    select-icon="circle-arrow-down"
    :options="['One', 'Two', 'Three']"
    help="I'm a select with a custom select icon"
  />
  <h2 class="text-xl font-bold mb-4">Also works with standalone icons</h2>
  <div class="w-32">
    <FormKitIcon icon="jedi" />
  </div>
  <!-- %partial% -->
</template>
<style scoped>
.formkit-icon {
  max-width: 5em;
}
</style>
