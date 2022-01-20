<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="select"
    label="Favorite JS framework?"
    placeholder="Select a framework"
    :options="['Vue', 'React', 'Angular', 'Laravel', 'Django']"
    validation="required|is:Vue,React,Angular"
    validation-label="JS framework"
    validation-visibility="live"
    :validation-messages="{
      required: 'Pick your favorite framework',
      is: customMessage,
    }"
  />
  <!-- %partial%::html:: -->
</template>

<script setup>
const customMessage = ({ name, args, node }) => {
  return `${node.value} is not a ${name}. Select ${args[0]}, ${args[1]}, or ${args[2]}`
}
</script>
