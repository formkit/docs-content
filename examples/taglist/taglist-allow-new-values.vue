<!-- %partial%::html:: -->
<script setup>
const flavors = ['Chocolate', 'Vanilla', 'Strawberry'];
</script>

<template>
  <FormKit
    type="form"
    #default="{ value }"
    :actions="false"
  >
    <FormKit
      type="taglist"
      name="flavors"
      label="Select or add a flavor"
      :options="flavors"
      :value="['Chocolate', 'Vanilla']"
      :allow-new-values="true"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
<!-- %partial%::html:: -->

<style>
.source-content {
  background-color: transparent;
}
</style>


