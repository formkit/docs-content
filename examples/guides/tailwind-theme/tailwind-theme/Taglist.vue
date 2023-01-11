<script setup>
let flavors = ['Apple', 'Cherry', 'Vanilla', 'Chocolate', 'Raspberry', 'Toffee', 'Mocha']
</script>

<template>
  <div class="section-wrapper">
    <h2>Pro - Taglist</h2>

    <FormKit
      type="taglist"
      label="Taglist"
      :value="['Chocolate', 'Toffee']"
      :options="flavors"
      allow-new-values
    />
  </div>
</template>