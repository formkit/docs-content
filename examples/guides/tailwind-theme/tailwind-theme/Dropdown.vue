<script setup>
let flavors = ['Apple', 'Cherry', 'Vanilla']
function loadOptionsSync () {
  return ['Romeo', 'Juliet', 'Capulet', 'Montague']
}
</script>

<template>
  <div class="section-wrapper">
    <h2>Pro - Dropdown</h2>
    <FormKit
      type="dropdown"
      label="Dropdown short"
      placeholder="Hello"
      :options="flavors"
    />
    <FormKit
      type="dropdown"
      label="Disabled"
      :disabled="true"
      :options="flavors"
    />
    <FormKit
      type="dropdown"
      label="Load options synchronously from a function"
      :options="loadOptionsSync"
    />
    <FormKit
      type="dropdown"
      label="Overscroll"
      placeholder="Select a flavor"
      :options="flavors"
      validation="required"
      behavior="overscroll"
    />
  </div>
</template>