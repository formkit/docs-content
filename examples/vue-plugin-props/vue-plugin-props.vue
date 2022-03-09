<script setup>
const setNode = (node) => {
  console.log(node.props.validation)
}
</script>

<template>
  <!-- 👀 check it out — the validation prop is not set here -->
  <FormKit
    type="password"
    label="Password"
    validation-visibility="live"
    @node="setNode"
  />
</template>
