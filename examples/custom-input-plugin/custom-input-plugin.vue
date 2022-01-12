<template>
  <FormKit type="form" :plugins="[myPlugin]">
    <FormKit type="hello" />
  </FormKit>
</template>

<script setup>
// We’ll use the same input definition.
const helloDefinition = {
  type: 'input',
  schema: ['Hello world'],
}

// In this case our plugin’s body doesn't actually do anything
const myPlugin = () => {}

// Then we attach a library
myPlugin.library = (node) => {
  if (node.props.type === 'hello') {
    node.define(helloDefinition)
  }
}
</script>
