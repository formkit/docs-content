<script setup>
let flavors = ['Apple', 'Cherry', 'Vanilla']
async function mockAsyncSearch({ search, page, hasNextPage, timeout = 1000 }) {
  if (!search) return []
  await new Promise(r => setTimeout(r, timeout))
  return [
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' },
    { label: 'Third', value: 'third' },
  ].filter(item => item.label.toLowerCase().includes(search.toLowerCase()))
}
</script>

<template>
  <div class="section-wrapper">
    <h2>Pro - Autocomplete</h2>
    <FormKit
      type="autocomplete"
      label="Text single"
      :options="flavors"
    />
    
    <FormKit
      type="autocomplete"
      label="Option single"
      :options="flavors"
      selection-appearance="option"
      value="Apple"
    />
    
    <FormKit
      type="autocomplete"
      label="Text single async"
      :options="mockAsyncSearch"
    />
    
    <FormKit
      type="autocomplete"
      label="Option single async"
      :options="mockAsyncSearch"
      selection-appearance="option"
    />
  </div>
</template>