<script setup></script>

<template>
  <h2 class="text-2xl font-bold mb-4">Guest list</h2>
  <FormKit type="list" :value="['']" dynamic #default="{ items, node, value }">
    <FormKit
      v-for="(item, index) in items"
      :key="item"
      :index="index"
      label="Guest name"
      placeholder="Guest name"
      suffix-icon="trash"
      @suffix-icon-click="() => node.input(value.filter((_, i) => i !== index))"
      :sections-schema="{
        suffixIcon: {
          // change wrapper to a button for accessibility
          $el: 'button',
        },
      }"
    />
    <FormKit type="button" @click="() => node.input(value.concat(''))">
      + Add another
    </FormKit>
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style scoped>
.formkit-suffix-icon {
  appearance: none;
  background: none;
  border: none;
  font-size: 1em;
}
</style>
