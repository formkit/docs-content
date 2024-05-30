<script setup>
function distinct(node) {
  // 👀 use node traversal to get the parent node
  const parent = node.at('$parent')
  if (parent.value) {
    // Ensure all the siblings are different values
    for (const childName in parent.value) {
      if (childName === node.name) continue
      if (parent.value[childName] === node.value) {
        return false
      }
    }
  }
  return true
}
</script>

<template>
  <FormKit
    type="form"
    @submit="() => false"
    :config="{
      validationVisibility: 'live',
    }"
    :value="{
      first: 'Same',
      second: 'Same',
      third: 'Different',
    }"
  >
    <FormKit
      label="First item"
      name="first"
      :validation-rules="{ distinct }"
      validation="distinct"
    />
    <FormKit
      label="Second item"
      name="second"
      :validation-rules="{ distinct }"
      validation="distinct"
    />
    <FormKit
      label="Third item"
      name="third"
      :validation-rules="{ distinct }"
      validation="distinct"
    />
  </FormKit>
</template>
