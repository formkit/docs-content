<script setup>
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <!--
    FormKit forms auto-collect values of children inputs.
    Wrap the example in a form so we can display the form values.
  -->
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit
      type="togglebuttons"
      name="shirt_size"
      label="T-shirt Size"
      :options="['Small', 'Medium', 'Large', 'X-Large']"
      :vertical="value.orientation"
    />

    <FormKit
      type="togglebuttons"
      label="Size Toggle Orientation"
      name="orientation"
      enforced
      :value="false"
      :multiple="false"
      :options="[
        { label: 'Horizontal', value: false },
        { label: 'Vertical', value: true },
      ]"
    />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
